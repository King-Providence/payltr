"use client";

import Link from "next/link";
import styles from "./companyCta.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function CompanyCta({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section className={styles.section} aria-labelledby="company-cta-title" data-i18n-skip="true" translate="no">
      <div className={styles.inner}>
        <h2 id="company-cta-title" className={styles.title}>
          {translated.title}
        </h2>
        <p className={styles.subtitle}>{translated.description}</p>
        <div className={styles.actions}>
          <Link href={translated.ctaSmesHref} className={styles.cta}>
            {translated.ctaSmes}
          </Link>
          <Link href={translated.ctaPartnerHref} className={styles.cta}>
            {translated.ctaPartner}
          </Link>
        </div>
      </div>
    </section>
  );
}
