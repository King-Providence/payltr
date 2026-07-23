"use client";

import styles from "./companyStats.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function CompanyStats({ content }) {
  const translated = useTranslatedContent(content);

  // Duplicate the items so the marquee loops seamlessly
  const marqueeItems = [
    ...translated.items,
    ...translated.items,
  ];

  return (
    <section
      className={styles.section}
      aria-labelledby="company-stats-title"
    >
      {/* Background */}

      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>
            {translated.label}
          </span>
        </div>

        {/* Marquee */}

        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {marqueeItems.map((item, index) => (
              <article
                key={`${item.value}-${index}`}
                className={styles.card}
              >
                <h2 className={styles.value}>
                  {item.value}
                </h2>

                <h3 className={styles.title}>
                  {item.title}
                </h3>

                <p className={styles.description}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}