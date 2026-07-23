"use client";

import styles from "./companyMission.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function CompanyMission({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section
      className={styles.section}
      aria-labelledby="company-mission-title"
    >
      {/* Background Effects */}

      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>

      <div className={styles.container}>
        {/* LEFT */}

        <div className={styles.left}>
          <span className={styles.label}>
            {translated.label}
          </span>

          <h2
            id="company-mission-title"
            className={styles.title}
          >
            {translated.title}

            <span className={styles.titleHighlight}>
              {translated.titleHighlight}
            </span>
          </h2>

          {translated.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className={styles.paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* RIGHT */}

        <div className={styles.timelineCard}>
          <h3 className={styles.timelineTitle}>
            {translated.journeyTitle}
          </h3>

          <div className={styles.timeline}>
            {translated.journeySteps.map((step, index) => (
              <div
                key={step.title}
                className={styles.step}
              >
                {/* Timeline */}

                <div className={styles.lineColumn}>
                  <span className={styles.node}></span>

                  {index !==
                    translated.journeySteps.length - 1 && (
                    <span className={styles.line}></span>
                  )}
                </div>

                {/* Card */}

                <div
                  className={`${styles.stepCard} ${
                    step.highlight
                      ? styles.primaryCard
                      : styles.secondaryCard
                  }`}
                >
                  <h4 className={styles.stepTitle}>
                    {step.title}
                  </h4>

                  <p className={styles.stepDescription}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
