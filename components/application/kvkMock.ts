/** Demo-only: pretend KVK lookup returns a company name when enough digits are entered. */
export function mockLookupKvkCompanyName(kvk: string): string | null {
  const digits = kvk.replace(/\D/g, "");
  if (digits.length >= 8) return "Demo Holdings B.V.";
  return null;
}
