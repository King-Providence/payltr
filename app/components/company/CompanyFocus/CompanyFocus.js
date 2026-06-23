"use client";

import Image from "next/image";
import styles from "./companyFocus.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function CompanyFocus({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section className={styles.section} aria-labelledby="company-focus-title" data-i18n-skip="true" translate="no">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>{translated.label}</p>
          <h2 id="company-focus-title" className={styles.title}>
            {translated.title}
          </h2>
        </header>

        <div className={styles.grid}>
          {translated.items.map((item, index) => (
            <article
              className={`${styles.card} ${index === 0 ? styles.cardFeatured : ""}`}
              key={item.title}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className={styles.image}
                  sizes="(max-width: 720px) 100vw, 280px"
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardSubtitle}>{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
