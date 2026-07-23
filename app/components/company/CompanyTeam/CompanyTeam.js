"use client";

import styles from "./companyTeam.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CompanyTeam({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section className={styles.section} aria-labelledby="company-team-title">
      {/* Ambient background — dark, alternates against the light Founder section before it */}
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>
      <div className={styles.grid}></div>

      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.label}>{translated.label}</span>
          <h2 id="company-team-title" className={styles.title}>
            {translated.title}
          </h2>
          <p className={styles.intro}>{translated.intro}</p>
        </header>

        <div className={styles.memberGrid}>
          {translated.members.map((member, index) => (
            <article
              className={styles.memberCard}
              key={member.name + index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.avatar}>
                <span className={styles.avatarInitials}>{member.initials}</span>
              </div>

              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <p className={styles.memberFocus}>{member.focus}</p>
            </article>
          ))}
        </div>

        <div className={styles.closingBlock}>
          <p className={styles.closing}>{translated.closing}</p>

          <div className={styles.ctaRow}>
            {translated.hiringCtas.map((cta, index) => {
              const isPrimary = index === 0;
              const isExternal = cta.href.startsWith("mailto:");

              return isExternal ? (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={isPrimary ? styles.ctaPrimary : styles.ctaSecondary}
                >
                  {cta.label}
                  {isPrimary && <FiArrowRight className={styles.ctaArrow} aria-hidden="true" />}
                </a>
              ) : (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={isPrimary ? styles.ctaPrimary : styles.ctaSecondary}
                >
                  {cta.label}
                  {isPrimary && <FiArrowRight className={styles.ctaArrow} aria-hidden="true" />}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}