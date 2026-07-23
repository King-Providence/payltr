"use client";

import styles from "./partnersRequirements.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

import {
  Cable,
  Users,
  ShieldCheck,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

export default function PartnersRequirements({ content }) {
  const translated = useTranslatedContent(content);

  const iconMap = {
    api: Cable,
    users: Users,
    shield: ShieldCheck,
    rocket: Rocket,
  };

  return (
    <section
      className={styles.section}
      aria-labelledby="partners-requirements-title"
    >
      <div className={styles.container}>

        {/* LEFT COLUMN */}

        <div className={styles.leftColumn}>

          <span className={styles.eyebrow}>
            {translated.eyebrow}
          </span>

          <h2
            id="partners-requirements-title"
            className={styles.title}
          >
            {translated.title}
          </h2>

          <p className={styles.subtitle}>
            {translated.subtitle}
          </p>

          <div className={styles.verticalLine}></div>

        </div>

        {/* RIGHT COLUMN */}

        <div className={styles.rightColumn}>

          {translated.requirements.map((item) => {

            const Icon = iconMap[item.icon];

            return (

              <article
                key={item.number}
                className={styles.card}
              >

                <div className={styles.cardGlow}></div>

                <div className={styles.cardHeader}>

                  <div className={styles.iconWrapper}>

                    {Icon && (
                      <Icon
                        size={22}
                        strokeWidth={2.2}
                      />
                    )}

                  </div>

                  <span className={styles.number}>
                    {item.number}
                  </span>

                </div>

                <h3 className={styles.cardTitle}>
                  {item.title}
                </h3>

                <p className={styles.cardDescription}>
                  {item.description}
                </p>

                <div className={styles.arrow}>
                  <ArrowUpRight size={18} />
                </div>

              </article>

            );

          })}

        </div>

      </div>
    </section>
  );
}