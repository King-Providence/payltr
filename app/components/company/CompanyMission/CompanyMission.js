"use client";

import styles from "./companyMission.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function CompanyMission({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section className={styles.section} aria-labelledby="company-mission-title" data-i18n-skip="true" translate="no">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.label}>{translated.label}</p>
          <h2 id="company-mission-title" className={styles.title}>
            {translated.title}
            <span className={styles.titleHighlight}>{translated.titleHighlight}</span>
          </h2>
          {translated.paragraphs.map((paragraph) => (
            <p className={styles.text} key={paragraph.slice(0, 24)}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className={styles.journeyCard}>
          <h3 className={styles.journeyTitle}>{translated.journeyTitle}</h3>
          <ul className={styles.journeyTimeline}>
            {translated.journeySteps.map((step) => {
              const label = typeof step === "string" ? step : step.label;
              const highlight = typeof step === "string" ? false : step.highlight;

              return (
                <li
                  className={`${styles.journeyStep} ${highlight ? styles.journeyStepHighlight : styles.journeyStepPlain}`}
                  key={label}
                >
                  <div className={styles.dotCol}>
                    <span className={styles.journeyDot} aria-hidden="true" />
                  </div>
                  <div className={styles.labelCol}>
                    {highlight ? (
                      <span className={styles.journeyBox}>{label}</span>
                    ) : (
                      <span className={styles.journeyPlain}>{label}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
