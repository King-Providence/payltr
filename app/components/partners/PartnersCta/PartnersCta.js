"use client";

import Link from "next/link";
import styles from "./partnersCta.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";
import { ArrowUpRight } from "lucide-react";

export default function PartnersCta({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section
      className={styles.section}
      aria-labelledby="partners-cta-title"
    >
      {/* Animated Background */}
      <div className={styles.backgroundGlow}></div>
      <div className={styles.backgroundGlowTwo}></div>
      <div className={styles.backgroundGrid}></div>

      <div className={styles.container}>

        {/* Floating particles */}
        <span className={styles.particleOne}></span>
        <span className={styles.particleTwo}></span>
        <span className={styles.particleThree}></span>

        {/* Glass Card */}
        <div className={styles.glassCard}>

          <span className={styles.eyebrow}>
            {translated.eyebrow}
          </span>

          <h2
            id="partners-cta-title"
            className={styles.title}
          >
            {translated.title}
          </h2>

          <p className={styles.subtitle}>
            {translated.description}
          </p>

          <div className={styles.actions}>

            <Link
              href={translated.primaryCtaHref}
              className={styles.primaryBtn}
            >
              <span>{translated.primaryCtaText}</span>

              <ArrowUpRight
                size={18}
                strokeWidth={2.2}
              />
            </Link>

            <Link
              href={translated.secondaryCtaHref}
              className={styles.secondaryBtn}
            >
              <span>{translated.secondaryCtaText}</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}