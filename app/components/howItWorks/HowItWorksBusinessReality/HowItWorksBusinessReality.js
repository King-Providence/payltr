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
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.backgroundImage} aria-hidden="true" />

          <div className={styles.cardContent}>
            <p className={styles.label}>{translated.label}</p>
            <h2 id="how-it-works-reality-title" className={styles.title}>
              {translated.title}
            </h2>

            <ol className={styles.timeline}>
              <div className={styles.rail} aria-hidden="true" />
              {translated.steps.map((item) => (
                <li className={styles.step} key={item.step}>
                  <span className={styles.circle}>{item.step}</span>
                  <p className={styles.stepTitle}>{item.label}</p>
                  {item.note ? <p className={styles.stepNote}>{item.note}</p> : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
