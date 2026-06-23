"use client";

import styles from "./howItWorksBusinessReality.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function HowItWorksBusinessReality({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section
      className={styles.section}
      aria-labelledby="how-it-works-reality-title"
      data-i18n-skip="true"
      translate="no"
    >
      <div className={styles.pattern} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.label}>{translated.label}</p>
        <h2 id="how-it-works-reality-title" className={styles.title}>
          {translated.title}
        </h2>

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
              <p className={styles.stepLabel}>Step {item.step}</p>
              <p className={styles.stepTitle}>{item.label}</p>
              {item.note ? <p className={styles.stepNote}>{item.note}</p> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
