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
          {translated.steps.map((item, index) => (
            <li className={styles.step} key={item.step}>
              <div className={styles.stepTop}>
                {index > 0 ? <span className={styles.connector} aria-hidden="true" /> : null}
                <span className={styles.circle}>{item.step}</span>
                {index < translated.steps.length - 1 ? (
                  <span className={styles.connector} aria-hidden="true" />
                ) : null}
              </div>
              <p className={styles.label}>{item.label}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
