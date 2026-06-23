/**
 * Placeholder integrations for Didit KYC and Ponto PSD2.
 * Replace with real SDK / iframe URLs when available.
 */

export function embedDiditKycPlaceholder(_containerId: string): void {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.info("[Didit] KYC widget placeholder — embed SDK here.");
  }
}

export async function connectPontoPlaceholder(): Promise<{
  ok: boolean;
  message: string;
}> {
  await new Promise((r) => setTimeout(r, 450));
  return { ok: true, message: "Ponto PSD2 connection (simulated)." };
}

export async function connectPontoPlaceholderFailing(): Promise<{
  ok: boolean;
  message: string;
}> {
  await new Promise((r) => setTimeout(r, 450));
  return { ok: false, message: "Ponto connection failed (simulated)." };
}
