"use client";

import styles from "./companyHero.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";
import { FiLinkedin } from "react-icons/fi";

export default function CompanyHero({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section
      className={styles.hero}
      aria-labelledby="company-hero-title"
    >
      {/* Animated Background */}

      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>
      <div className={styles.grid}></div>
      <div className={styles.noise}></div>

      <div className={styles.container}>
        {/* Page Label */}

        <span className={styles.label}>
          {translated.label}
        </span>

        {/* Heading */}

        <h1
          id="company-hero-title"
          className={styles.title}
        >
          {translated.title}{" "}
          <span className={styles.titleHighlight}>
            {translated.titleHighlight}
          </span>
        </h1>

        {/* Subtitle */}

        <p className={styles.subtitle}>
          {translated.subtitle}
        </p>

        {/* LinkedIn Badge */}

        {translated.linkedinUrl && (
          <a
            href={translated.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinBadge}
          >
            <FiLinkedin className={styles.linkedinIcon} aria-hidden="true" />
            Follow PayLTR on LinkedIn
          </a>
        )}

        {/* Divider */}

        <div className={styles.divider}></div>

        {/* Statistics */}

        <div className={styles.stats}>
          {translated.stats.map((item) => (
            <div
              key={item.label}
              className={styles.statCard}
            >
              <span className={styles.statValue}>
                {item.value}
              </span>

              <span className={styles.statLabel}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}