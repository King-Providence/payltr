"use client";

import styles from "./howItWorksTimeline.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function HowItWorksTimeline({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section
      className={styles.section}
      aria-label="PayLTR process steps"
      data-i18n-skip="true"
      translate="no"
    >
      <div className={styles.inner}>
        <ol className={styles.timeline}>
          <div className={styles.rail} aria-hidden="true" />
          {translated.steps.map((item) => (
            <li className={styles.step} key={item.step}>
              <span className={styles.circle}>{item.step}</span>
              <p className={styles.stepLabel}>{item.label}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
