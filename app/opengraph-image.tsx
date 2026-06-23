import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PayLTR — zakelijke financiering voor MKB";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            color: "#f8fafc",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          PayLTR
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 500,
            color: "#94a3b8",
            marginTop: 28,
            maxWidth: 900,
            lineHeight: 1.25,
          }}
        >
          Zakelijke financiering voor MKB — 120 dagen betalingspauze
        </div>
      </div>
    ),
    { ...size }
  );
}
