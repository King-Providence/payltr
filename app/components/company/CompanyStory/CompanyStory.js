"use client";

import styles from "./companyStory.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function CompanyStory({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section className={styles.section} aria-labelledby="company-story-title">
      {/* Ambient background — light, alternates against the dark Team section before it */}
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>
      <div className={styles.grid}></div>

      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.label}>{translated.label}</span>
          <h2 id="company-story-title" className={styles.title}>
            {translated.title}
          </h2>
        </header>

        <div className={styles.timeline}>
          {translated.milestones.map((milestone, index) => (
            <div
              className={styles.timelineItem}
              key={milestone.date}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className={styles.datePill}>{milestone.date}</div>

              <div className={styles.timelineConnector} aria-hidden="true">
                <span className={styles.timelineDot}></span>
                {index < translated.milestones.length - 1 && (
                  <span className={styles.timelineLine}></span>
                )}
              </div>

              <p className={styles.description}>{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}