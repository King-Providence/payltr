import {
  AsYouType,
  validatePhoneNumberLength,
  type CountryCode,
} from "libphonenumber-js";
import { PHONE_DIAL_TO_ISO } from "./constants";

/** E.164 subscriber digits are capped at 15; national part stays within a safe upper bound. */
const FALLBACK_MAX_NATIONAL_DIGITS = 15;

export function getIsoForDial(dial: string): CountryCode | undefined {
  return PHONE_DIAL_TO_ISO[dial];
}

export function clampNationalDigits(iso: CountryCode, digits: string): string {
  let d = digits;
  while (d.length > 0 && validatePhoneNumberLength(d, iso) === "TOO_LONG") {
    d = d.slice(0, -1);
  }
  return d;
}

export function clampNationalDigitsForDial(dial: string, digits: string): string {
  const clean = digits.replace(/\D/g, "");
  const iso = PHONE_DIAL_TO_ISO[dial];
  if (!iso) return clean.slice(0, FALLBACK_MAX_NATIONAL_DIGITS);
  return clampNationalDigits(iso, clean);
}

/** National number formatted for the selected calling-code dropdown. */
export function formatNationalForDial(
  dial: string,
  currentPhoneDisplay: string,
): string {
  const digitsOnly = clampNationalDigitsForDial(dial, currentPhoneDisplay);
  if (!digitsOnly) return "";
  const iso = PHONE_DIAL_TO_ISO[dial];
  if (!iso) return digitsOnly;
  return new AsYouType(iso).input(digitsOnly);
}
