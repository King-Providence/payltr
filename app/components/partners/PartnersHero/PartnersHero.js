"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./partnersHero.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function PartnersHero({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section
      className={styles.hero}
      aria-labelledby="partners-hero-title"
    >
      {/* Background decoration */}
      <div className={styles.backgroundGlow}></div>
      <div className={styles.backgroundGrid}></div>

      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.contentCol}>

          <span className={styles.pageLabel}>
            {translated.pageLabel}
          </span>

          <h1
            id="partners-hero-title"
            className={styles.title}
          >
            {translated.title}
          </h1>

          <p className={styles.subtitle}>
            {translated.subtitle}
          </p>

          <div className={styles.actions}>

            <Link
              href={translated.primaryCtaHref}
              className={styles.primaryBtn}
            >
              {translated.primaryCtaText}
            </Link>

            <Link
              href={translated.secondaryCtaHref}
              className={styles.secondaryBtn}
            >
              {translated.secondaryCtaText}
            </Link>

          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className={styles.visualCol}>

          <div className={styles.imageWrapper}>

            {/* Decorative circles */}
            <span className={styles.circleOne}></span>
            <span className={styles.circleTwo}></span>
            <span className={styles.circleThree}></span>

            {/* Glass card */}
            <div className={styles.glassCard}></div>

            <Image
              src={translated.image}
              alt="Partner illustration"
              width={560}
              height={720}
              priority
              className={styles.heroImage}
            />

          </div>

        </div>

      </div>
    </section>
  );
}