"use client";

import styles from "./companyCta.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";
import Link from "next/link";
import { FiArrowRight, FiMail } from "react-icons/fi";

export default function CompanyCta({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section className={styles.section} aria-labelledby="company-cta-title">
      {/* Ambient background — light, alternates against the dark Partner Network section before it */}
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>
      <div className={styles.blurThree}></div>
      <div className={styles.grid}></div>

      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.cardGlow} aria-hidden="true"></div>

          <h2 id="company-cta-title" className={styles.headline}>
            {translated.headline}
          </h2>

          <p className={styles.subheadline}>{translated.subheadline}</p>

          <div className={styles.ctaRow}>
            {translated.ctas.map((cta) => {
              const isExternal = cta.href.startsWith("mailto:");
              const className = cta.primary ? styles.ctaPrimary : styles.ctaSecondary;

              const inner = (
                <>
                  {cta.primary ? (
                    <FiArrowRight className={styles.ctaIcon} aria-hidden="true" />
                  ) : (
                    <FiMail className={styles.ctaIcon} aria-hidden="true" />
                  )}
                  {cta.label}
                </>
              );

              return isExternal ? (
                <a key={cta.label} href={cta.href} className={className}>
                  {inner}
                </a>
              ) : (
                <Link key={cta.label} href={cta.href} className={className}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}