"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./companyHero.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function CompanyHero({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section
      className={styles.hero}
      aria-labelledby="company-hero-title"
    >
      <div className={styles.backgroundImage} aria-hidden="true" />

      <div className={styles.contentWrapper}>
        <h1 id="company-hero-title" className={styles.title}>
          <span className={styles.titleLine}>{translated.titleLine1}</span>
          <span className={styles.titleLine}>{translated.titleLine2}</span>
        </h1>

        <div className={styles.contentSection}>
          <p className={styles.subtitle}>{translated.subtitle}</p>
        </div>

        <div className={styles.actions}>
          <Link className={styles.primaryBtn} href={translated.ctaPlatformsHref}>
            {translated.ctaPlatforms}
          </Link>
          <Link className={styles.secondaryBtn} href={translated.ctaSmesHref}>
            {translated.ctaSmes}
          </Link>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={translated.image}
          alt=""
          width={1000}
          height={1000}
          className={styles.heroImage}
          priority
        />
      </div>
    </section>
  );
}
