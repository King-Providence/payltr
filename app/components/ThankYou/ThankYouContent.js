"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./thankYou.module.css";

function CheckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 6L9 17l-5-5"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      className={styles.ctaIcon}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function maskEmail(email) {
  const trimmed = email?.trim();
  if (!trimmed || !trimmed.includes("@")) return null;
  const [local, domain] = trimmed.split("@");
  if (!domain) return null;
  const first = local[0] || "*";
  return `${first}*@${domain}`;
}

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const refFromUrl =
    searchParams.get("ref") ||
    searchParams.get("reference") ||
    searchParams.get("id");
  /* Pass ?ref= on redirect after submit; fallback matches design when omitted */
  const refDisplay = refFromUrl || "QA-2023-1108";
  const emailParam = searchParams.get("email");
  const masked = maskEmail(emailParam);

  const emailSentence = masked
    ? `An automated confirmation email has been sent to your registered email address (${masked}).`
    : "An automated confirmation email has been sent to your registered email address.";

  return (
    <div className={styles.pageShell}>
      <div className={styles.decor} aria-hidden />

      <div className={styles.inner}>
        <h1 className={styles.headline}>
          Your application has been received.
        </h1>

        <div className={styles.cardStack}>
          <div className={styles.badge} aria-hidden>
            <CheckIcon />
          </div>

          <div className={styles.card}>
            <section className={styles.cardSection}>
              <h2 className={styles.sectionTitle}>Application Details:</h2>
              <div className={styles.refBar} role="status" aria-live="polite">
                <strong>Reference Number: {refDisplay}</strong>
              </div>
            </section>

            <section className={styles.cardSection}>
              <h2 className={styles.sectionTitle}>Next Steps:</h2>
              <p className={styles.bodyText}>
                Expected response time: typically within 3 business days.
              </p>
              <p className={styles.bodyText}>{emailSentence}</p>
              <p className={styles.bodyText}>
                No further action is required at this stage. We will review your
                application and contact you soon.
              </p>
            </section>

            <Link href="/" className={styles.cta}>
              <span>Back to homepage</span>
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
