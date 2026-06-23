"use client";

import styles from "./companyStats.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function CompanyStats({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section className={styles.section} aria-label="Company statistics" data-i18n-skip="true" translate="no">
      <div className={styles.inner}>
        {translated.items.map((item) => (
          <div className={styles.stat} key={item.label}>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
