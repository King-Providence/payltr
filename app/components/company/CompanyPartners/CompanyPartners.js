"use client";

import styles from "./companyPartners.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

const NODE_POSITION_CLASSES = ["nodeLeft", "nodeRight"];

export default function CompanyPartners({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section className={styles.section} aria-labelledby="company-partners-title">
      {/* Ambient background — dark, alternates against the light Story section before it */}
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>
      <div className={styles.grid}></div>

      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.label}>{translated.label}</span>
          <h2 id="company-partners-title" className={styles.title}>
            {translated.title}
          </h2>
          <p className={styles.intro}>{translated.intro}</p>
        </header>

        {/* Decorative orbit diagram — desktop only, purely visual, real info lives in the cards below */}
        <div className={styles.orbitWrap} aria-hidden="true">
          <svg className={styles.orbitSvg} viewBox="0 0 560 220" preserveAspectRatio="xMidYMid meet">
            <line x1="280" y1="110" x2="80" y2="110" className={styles.orbitLine} />
            <line x1="280" y1="110" x2="480" y2="110" className={styles.orbitLine} />

            <line x1="280" y1="110" x2="80" y2="110" className={styles.orbitPulse} />
            <line x1="280" y1="110" x2="480" y2="110" className={styles.orbitPulse} />
          </svg>

          <div className={styles.hub}>
            <span className={styles.hubText}>PayLTR</span>
          </div>

          {translated.partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`${styles.node} ${styles[NODE_POSITION_CLASSES[index]]}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className={styles.nodeInitial}>{partner.initials}</span>
            </div>
          ))}
        </div>

        {/* Accessible, always-visible partner detail cards */}
        <div className={styles.cardGrid}>
          {translated.partners.map((partner, index) => (
            <article
              className={styles.card}
              key={partner.name}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className={styles.cardBadge}>{partner.initials}</div>
              <h3 className={styles.cardName}>{partner.name}</h3>
              <p className={styles.cardRole}>{partner.role}</p>
            </article>
          ))}
        </div>

        <div className={styles.closingBlock}>
          <p className={styles.closing}>{translated.closing}</p>

          <div className={styles.sectorRow}>
            {translated.sectors.map((sector) => (
              <span className={styles.sectorPill} key={sector}>
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}