import type { ApplicationFormValues } from "./schema";

export const defaultFormValues: ApplicationFormValues = {
  companyName: "",
  kvkNumber: "",
  country: "NL",
  industry: "Services",
  yearsInOperation: "<1 year",
  financingAmount: 50_000,
  financingPurpose: "Supplier payment",
  annualRevenueRange: "< €50k",
  fullName: "",
  email: "",
  phoneCountryCode: "+31",
  phone: "",
  role: "Owner / Director",
  diditCompleted: false,
  pontoConnected: false,
  pontoAttempted: false,
  agreeTerms: false,
  agreePrivacy: false,
  consentCredit: false,
};
