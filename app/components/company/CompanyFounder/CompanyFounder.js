"use client";

import styles from "./companyFounder.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";
import { FiLinkedin } from "react-icons/fi";

export default function CompanyFounder({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section className={styles.section} aria-labelledby="company-founder-title">
      {/* Ambient background — same liquid-glass language, light theme */}
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>
      <div className={styles.grid}></div>

      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.label}>{translated.label}</span>
          <h2 id="company-founder-title" className={styles.title}>
            {translated.title}
          </h2>
        </header>

        <div className={styles.layout}>
          {/* Left: avatar + identity */}
          <div className={styles.identity}>
            <div className={styles.avatarRing}>
              <div className={styles.avatar}>
                <span className={styles.avatarInitials}>
                  {translated.founderInitials}
                </span>
              </div>
            </div>

            <p className={styles.founderName}>{translated.founderName}</p>

            <div className={styles.roleRow}>
              <p className={styles.founderRole}>{translated.founderRole}</p>

              {translated.founderLinkedinUrl && (
                <a
                  href={translated.founderLinkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${translated.founderName} on LinkedIn`}
                  className={styles.linkedinIconBtn}
                >
                  <FiLinkedin className={styles.linkedinIcon} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Right: quote card */}
          <div className={styles.quoteCard}>
            <span className={styles.quoteMark} aria-hidden="true">
              "
            </span>

            <div className={styles.bio}>
              {translated.bioParagraphs.map((paragraph, index) => (
                <p className={styles.bioParagraph} key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={styles.attribution}>
              <span className={styles.attributionDash}>—</span>
              <span>
                {translated.founderName}, {translated.founderRole}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}