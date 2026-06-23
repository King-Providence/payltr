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
        <h1 id="partners-hero-title" className={styles.title}>
          {translated.title}
        </h1>
        <p className={styles.subtitle}>{translated.subtitle}</p>
        <Link href={translated.ctaHref} className={styles.cta}>
          {translated.ctaText}
        </Link>
      </div>
    </section>
  );
}
