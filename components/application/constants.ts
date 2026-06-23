import type { CountryCode } from "libphonenumber-js";

export const COUNTRY_OPTIONS = [
  { value: "NL", label: "Netherlands" },
  { value: "BE", label: "Belgium" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "GB", label: "United Kingdom" },
  { value: "OTHER", label: "Other" },
] as const;

export const PHONE_COUNTRY_CODES = [
  { value: "+31", label: "NL +31" },
  { value: "+32", label: "BE +32" },
  { value: "+49", label: "DE +49" },
  { value: "+33", label: "FR +33" },
  { value: "+44", label: "UK +44" },
  { value: "+1", label: "US +1" },
] as const;

/** When business country changes, default the phone dial code (not for OTHER). */
export const BUSINESS_COUNTRY_TO_PHONE_DIAL: Record<string, string> = {
  NL: "+31",
  BE: "+32",
  DE: "+49",
  FR: "+33",
  GB: "+44",
};

/** Map calling code from the form to libphonenumber region (for formatting & validation). */
export const PHONE_DIAL_TO_ISO: Record<string, CountryCode> = {
  "+31": "NL",
  "+32": "BE",
  "+49": "DE",
  "+33": "FR",
  "+44": "GB",
  "+1": "US",
};

/** Short hints for the national number field (after the dial code). */
export const PHONE_NATIONAL_PLACEHOLDER: Record<string, string> = {
  "+31": "6 1234 5678",
  "+32": "470 12 34 56",
  "+49": "151 23456789",
  "+33": "6 12 34 56 78",
  "+44": "7700 900123",
  "+1": "202 555 0123",
};
