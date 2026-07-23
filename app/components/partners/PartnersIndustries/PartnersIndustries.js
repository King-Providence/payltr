"use client";

import styles from "./partnersIndustries.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

import {
  Building2,
  Landmark,
  CreditCard,
  HeartHandshake,
  ShoppingBag,
  Boxes,
  Truck,
  Monitor,
} from "lucide-react";

export default function PartnersIndustries({ content }) {
  const translated = useTranslatedContent(content);

  const iconMap = {
    building: Building2,
    creditCard: CreditCard,
    landmark: Landmark,
    users: HeartHandshake,
    store: ShoppingBag,
    package: Boxes,
    truck: Truck,
    monitor: Monitor,
  };

  return (
    <section
      className={styles.section}
      aria-labelledby="partners-industries-title"
    >
      <div className={styles.container}>
        {/* ---------- Header ---------- */}

        <div className={styles.header}>
          <span className={styles.eyebrow}>
            {translated.eyebrow}
          </span>

          <h2
            id="partners-industries-title"
            className={styles.title}
          >
            {translated.title}
          </h2>

          <p className={styles.subtitle}>
            {translated.subtitle}
          </p>
        </div>

        {/* ---------- Industries Grid ---------- */}

        <div className={styles.grid}>
          {translated.industries.map((industry) => {
            const Icon = iconMap[industry.icon];

            return (
              <article
                key={industry.title}
                className={styles.card}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconWrapper}>
                    {Icon && (
                      <Icon
                        size={26}
                        strokeWidth={2}
                      />
                    )}
                  </div>

                  <span className={styles.cardNumber}>
                    0
                  </span>
                </div>

                <h3 className={styles.cardTitle}>
                  {industry.title}
                </h3>

                <p className={styles.cardDescription}>
                  {industry.description}
                </p>

                <div className={styles.cardGlow}></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}