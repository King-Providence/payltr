import { parsePhoneNumber } from "libphonenumber-js";
import { z } from "zod";
import { PHONE_DIAL_TO_ISO } from "./constants";

export const INDUSTRIES = [
  "Construction",
  "E-commerce",
  "Wholesale",
  "Services",
  "Other",
] as const;

export const YEARS_IN_OPERATION = [
  "<1 year",
  "1–3 years",
  "3–5 years",
  "5+ years",
] as const;

export const FINANCING_PURPOSES = [
  "Inventory",
  "Supplier payment",
  "Marketing",
  "Equipment",
  "VAT",
  "Other",
] as const;

export const ANNUAL_REVENUE_RANGES = [
  "< €50k",
  "€50k–€150k",
  "€150k–€500k",
  "€500k–€1m",
  "€1m+",
] as const;

export const COMPANY_ROLES = [
  "Owner / Director",
  "CFO",
  "Authorised Representative",
  "Other",
] as const;

export const applicationFormSchema = z
  .object({
    companyName: z.string().min(1, "Required"),
    kvkNumber: z.string().min(1, "Required"),
    country: z.string().min(1, "Required"),
    industry: z.enum(INDUSTRIES),
    yearsInOperation: z.enum(YEARS_IN_OPERATION),
    financingAmount: z
      .number()
      .min(3000, "Minimum €3,000")
      .max(500_000, "Maximum €500,000"),
    financingPurpose: z.enum(FINANCING_PURPOSES),
    annualRevenueRange: z.enum(ANNUAL_REVENUE_RANGES),
    fullName: z.string().min(1, "Required"),
    email: z.string().email("Enter a valid email"),
    phoneCountryCode: z.string().min(1, "Required"),
    phone: z.string().min(1, "Required"),
    role: z.enum(COMPANY_ROLES),
    diditCompleted: z.boolean().optional(),
    pontoConnected: z.boolean().optional(),
    pontoAttempted: z.boolean().optional(),
    agreeTerms: z.boolean(),
    agreePrivacy: z.boolean(),
    consentCredit: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (!data.agreeTerms) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Required",
        path: ["agreeTerms"],
      });
    }
    if (!data.agreePrivacy) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Required",
        path: ["agreePrivacy"],
      });
    }
    if (!data.consentCredit) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Required",
        path: ["consentCredit"],
      });
    }

    const iso = PHONE_DIAL_TO_ISO[data.phoneCountryCode];
    if (iso) {
      try {
        const parsed = parsePhoneNumber(data.phone, iso);
        if (!parsed?.isValid()) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Enter a valid phone number for this country",
            path: ["phone"],
          });
        }
      } catch {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Enter a valid phone number for this country",
          path: ["phone"],
        });
      }
    } else if (data.phone.replace(/\D/g, "").length < 6) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter at least 6 digits",
        path: ["phone"],
      });
    }
  });

export type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

export const STEP_FIELD_GROUPS: Record<number, (keyof ApplicationFormValues)[]> =
  {
    1: [
      "companyName",
      "kvkNumber",
      "country",
      "industry",
      "yearsInOperation",
    ],
    2: ["financingAmount", "financingPurpose", "annualRevenueRange"],
    3: ["fullName", "email", "phoneCountryCode", "phone", "role"],
    4: [],
    5: ["agreeTerms", "agreePrivacy", "consentCredit"],
  };
