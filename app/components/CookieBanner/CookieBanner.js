"use client";

import Link from "next/link";
import styles from "./CookieBanner.module.css";

export default function CookieBanner({ onAccept, onReject }) {
  return (
    <aside className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className={styles.message}>
        We use cookies to improve your browsing experience and for analytics. You can Accept or Reject
        cookies. Analytics will only run after you accept. Read our{" "}
        <Link href="/privacybeleid" className={styles.link}>
          Privacy Policy
        </Link>
        .
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.accept} onClick={onAccept}>
          Accept
        </button>
        <button type="button" className={styles.reject} onClick={onReject}>
          Reject
        </button>
      </div>
    </aside>
  );
}
