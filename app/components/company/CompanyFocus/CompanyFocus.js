"use client";

import styles from "./companyFocus.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";
import {
  FiUsers,
  FiActivity,
  FiFileText,
  FiShare2,
  FiCalendar,
  FiRefreshCw,
} from "react-icons/fi";

const ICON_MAP = {
  FiUsers: FiUsers,
  FiActivity: FiActivity,
  FiFileText: FiFileText,
  FiShare2: FiShare2,
  FiCalendar: FiCalendar,
  FiRefreshCw: FiRefreshCw,
};

export default function CompanyFocus({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section className={styles.section} aria-labelledby="company-focus-title">
      {/* Ambient background — matches the Hero's blue liquid-glass language */}
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>
      <div className={styles.grid}></div>

      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.label}>{translated.label}</span>
          <h2 id="company-focus-title" className={styles.title}>
            {translated.title}
          </h2>
        </header>

        <div className={styles.cardGrid}>
          {translated.items.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || FiActivity;

            return (
              <article
                className={styles.card}
                key={item.title}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={styles.iconWrap}>
                  <IconComponent className={styles.icon} aria-hidden="true" />
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}