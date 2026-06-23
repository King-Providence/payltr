"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./howItWorksPageHero.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function HowItWorksPageHero({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section
      className={styles.hero}
      aria-labelledby="how-it-works-hero-title"
      data-i18n-skip="true"
      translate="no"
    >
      <div className={styles.imageCol}>
        <Image
          src={translated.image}
          alt=""
          width={502}
          height={700}
          className={styles.heroImage}
          priority
        />
      </div>

      <div className={styles.contentCol}>
        <p className={styles.label}>{translated.label}</p>
        <h1 id="how-it-works-hero-title" className={styles.title}>
          {translated.title}
        </h1>
        <p className={styles.subtitle}>{translated.subtitle}</p>
        <p className={styles.description}>{translated.description}</p>
        <div className={styles.actions}>
          <Link href={translated.primaryCtaHref} className={styles.primaryBtn}>
            {translated.primaryCta}
          </Link>
          <Link href={translated.secondaryCtaHref} className={styles.secondaryBtn}>
            {translated.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
