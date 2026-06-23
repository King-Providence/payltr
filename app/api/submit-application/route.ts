import { Resend } from "resend";
import { NextResponse } from "next/server";
import { applicationFormSchema } from "@/components/application/schema";

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function yesNo(v: boolean | undefined) {
  return v ? "Yes" : "No";
}

export async function POST(request: Request) {
  // const apiKey = process.env.RESEND_API_KEY;
  // const from = process.env.RESEND_FROM_EMAIL?.trim();
  // const toRaw = process.env.RESEND_TO_EMAIL?.trim();
  const apiKey = "re_ZUjsb7Xq_KtxNV6ySpdDGeeWVFrSADn7B";
  const from = "support@payltr.eu";
  const toRaw = "support@payltr.eu";

  if (!apiKey || !from || !toRaw) {
    return NextResponse.json(
      { error: "Email delivery is not configured on the server." },
      { status: 503 },
    );
  }

  const to = toRaw.split(",").map((s) => s.trim()).filter(Boolean);
  if (to.length === 0) {
    return NextResponse.json(
      { error: "Email delivery is not configured on the server." },
      { status: 503 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!json || typeof json !== "object") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const body = json as Record<string, unknown>;
  const referenceId =
    typeof body.referenceId === "string" && body.referenceId.length >= 6
      ? body.referenceId
      : null;

  const { referenceId: _drop, ...rest } = body;
  const parsed = applicationFormSchema.safeParse(rest);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (!referenceId) {
    return NextResponse.json({ error: "Missing referenceId." }, { status: 400 });
  }

  const data = parsed.data;
  const rows: [string, string][] = [
    ["Reference", referenceId],
    ["Company name", data.companyName],
    ["KvK number", data.kvkNumber],
    ["Country", data.country],
    ["Industry", data.industry],
    ["Years in operation", data.yearsInOperation],
    [
      "Financing amount",
      `€${data.financingAmount.toLocaleString("nl-NL")}`,
    ],
    ["Financing purpose", data.financingPurpose],
    ["Annual revenue", data.annualRevenueRange],
    ["Full name", data.fullName],
    ["Email", data.email],
    ["Phone", `${data.phoneCountryCode} ${data.phone}`],
    ["Role", data.role],
    ["Didit completed", yesNo(data.diditCompleted)],
    ["Ponto connected", yesNo(data.pontoConnected)],
    ["Ponto attempted", yesNo(data.pontoAttempted)],
    ["Agreed to terms", yesNo(data.agreeTerms)],
    ["Agreed to privacy", yesNo(data.agreePrivacy)],
    ["Credit consent", yesNo(data.consentCredit)],
  ];

  const tableRows = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;">${escapeHtml(k)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  const html = `
    <h2 style="font-family:system-ui,sans-serif;">New financing application</h2>
    <p style="font-family:system-ui,sans-serif;color:#374151;">Reference: <strong>${escapeHtml(referenceId)}</strong></p>
    <table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px;">${tableRows}</table>
  `;

  const resend = new Resend(apiKey);

  const subjectCompany = data.companyName.replace(/[\r\n]+/g, " ").slice(0, 200);

  const { error } = await resend.emails.send({
    from,
    to,
    subject: `New application ${referenceId} — ${subjectCompany}`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Could not send email. Try again later." },
      { status: 502 },
    );
  }

  const sendApplicantCopy =
    process.env.RESEND_APPLICANT_CONFIRMATION === "false";

  if (sendApplicantCopy) {
    const applicant = await resend.emails.send({
      from,
      to: [data.email.trim()],
      subject: `We received your application (${referenceId})`,
      html: `
        <p style="font-family:system-ui,sans-serif;">Hi ${escapeHtml(data.fullName)},</p>
        <p style="font-family:system-ui,sans-serif;">Thank you for applying. Your reference is <strong>${escapeHtml(referenceId)}</strong>. We will be in touch soon.</p>
      `,
    });
    if (applicant.error) {
      console.error("Resend applicant copy error:", applicant.error);
    }
  }

  return NextResponse.json({ ok: true, referenceId });
}
