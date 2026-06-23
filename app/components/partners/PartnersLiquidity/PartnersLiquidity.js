"use client";

import Image from "next/image";
import styles from "./partnersLiquidity.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function PartnersLiquidity({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section
      className={styles.section}
      aria-labelledby="partners-liquidity-title"
      data-i18n-skip="true"
      translate="no"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="partners-liquidity-title" className={styles.title}>
            {translated.title}
          </h2>
          <p className={styles.subtitle}>{translated.subtitle}</p>
        </header>

        <div className={styles.cards}>
          {translated.benefits.map((benefit) => (
            <article className={styles.card} key={benefit.title}>
              <div className={styles.cardVisual}>
                <Image
                  src={benefit.image}
                  alt=""
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 720px) 100vw, 40vw"
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{benefit.title}</h3>
                <p className={styles.cardText}>{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
