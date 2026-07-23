"use client";

import styles from "./partnersArchitecture.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";
import { ArrowUpRight } from "lucide-react";

export default function PartnersArchitecture({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section
      className={styles.section}
      aria-labelledby="partners-architecture-title"
    >
      <div className={styles.backgroundGlow}></div>

      <div className={styles.container}>

        <div className={styles.header}>

          <span className={styles.eyebrow}>
            {translated.eyebrow}
          </span>

          <h2
            id="partners-architecture-title"
            className={styles.title}
          >
            {translated.title}
          </h2>

        </div>

        <div className={styles.timeline}>

          {translated.steps.map((step, index) => (

            <div
              key={step.number}
              className={styles.step}
            >

              {/* Left Number */}
              <div className={styles.numberWrapper}>

                <div className={styles.number}>
                  {step.number}
                </div>

                {index !== translated.steps.length - 1 && (
                  <div className={styles.line}></div>
                )}

              </div>

              {/* Card */}
              <div className={styles.card}>

                <div className={styles.cardGlow}></div>

                <div className={styles.cardContent}>

                  <h3 className={styles.cardTitle}>
                    {step.title}
                  </h3>

                  <p className={styles.cardDescription}>
                    {step.description}
                  </p>

                </div>

                <div className={styles.arrow}>
                  <ArrowUpRight size={20} />
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}