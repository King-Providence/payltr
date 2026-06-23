"use client";

import Image from "next/image";
import styles from "./companyValues.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function CompanyValues({ content }) {
  const translated = useTranslatedContent(content);
  const iconSrc = translated.icon || "/assets/values.svg";

  return (
    <section className={styles.section} aria-labelledby="company-values-title" data-i18n-skip="true" translate="no">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>{translated.label}</p>
          <h2 id="company-values-title" className={styles.title}>
            {translated.title}
          </h2>
        </header>

        <div className={styles.grid}>
          {translated.values.map((value) => (
            <article className={styles.card} key={value.title}>
              <div className={styles.iconWrap}>
                <Image
                  src={iconSrc}
                  alt=""
                  width={32}
                  height={32}
                  className={styles.icon}
                />
              </div>
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardText}>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
