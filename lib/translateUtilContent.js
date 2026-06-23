"use client";

import { isValidElement } from "react";

function shouldSkipTranslation(value) {
  if (!value) return true;
  if (value.startsWith("/")) return true;
  if (value.includes("@")) return true;
  if (/^\+?[0-9\s().-]+$/.test(value)) return true;
  return false;
}

function translateString(value, t) {
  const attempts = [value, value.trim(), value.replace(/\s+/g, " ").trim()];

  for (const key of attempts) {
    if (!key) continue;
    const translated = t(key, { defaultValue: key, keySeparator: false });
    if (translated !== key) {
      return translated;
    }
  }

  return value;
}

export function translateUtilContent(input, t) {
  if (typeof input === "string") {
    if (shouldSkipTranslation(input)) return input;
    return translateString(input, t);
  }

  if (Array.isArray(input)) {
    return input.map((item) => translateUtilContent(item, t));
  }

  if (!input || typeof input !== "object") {
    return input;
  }

  if (isValidElement(input)) {
    return input;
  }

  const output = {};
  for (const [key, value] of Object.entries(input)) {
    output[key] = translateUtilContent(value, t);
  }
  return output;
}
