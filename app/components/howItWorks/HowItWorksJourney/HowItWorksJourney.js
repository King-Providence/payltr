"use client";

import Image from "next/image";
import styles from "./howItWorksJourney.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function HowItWorksJourney({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section
      className={styles.section}
      aria-labelledby="how-it-works-journey-title"
      data-i18n-skip="true"
      translate="no"
    >
      <div className={styles.header}>
        <h2 id="how-it-works-journey-title" className={styles.headerTitle}>
          {translated.title}
        </h2>
        <p className={styles.headerSubtitle}>{translated.subtitle}</p>
      </div>

      <div className={styles.steps}>
        {translated.steps.map((item) => {
          const imageBlock = (
            <div className={styles.visual} key={`img-${item.step}`}>
              <Image
                src={item.image}
                alt=""
                fill
                className={styles.visualImage}
                sizes="(max-width: 900px) 100vw, 520px"
              />
            </div>
          );

          const textBlock = (
            <div className={styles.content} key={`text-${item.step}`}>
              <p className={styles.stepLabel}>Step {item.step}</p>
              <p className={styles.kicker}>{item.kicker}</p>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <ul className={styles.bullets}>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          );

          return (
            <article
              className={`${styles.row} ${item.imageFirst ? styles.imageLeft : styles.imageRight}`}
              key={item.step}
            >
              {item.imageFirst ? (
                <>
                  {imageBlock}
                  {textBlock}
                </>
              ) : (
                <>
                  {textBlock}
                  {imageBlock}
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
