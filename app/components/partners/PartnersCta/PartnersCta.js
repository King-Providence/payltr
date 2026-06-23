"use client";

import Link from "next/link";
import styles from "./partnersCta.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function PartnersCta({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section className={styles.section} data-aos="fade-up" aria-labelledby="partners-cta-title">
      <div className={styles.inner}>
        <h2 id="partners-cta-title" className={styles.title}>
          {translated.title}
        </h2>
        <p className={styles.subtitle}>{translated.description}</p>
        <Link href={translated.ctaHref} className={styles.cta}>
          {translated.ctaText}
        </Link>
      </div>
    </section>
  );
}
