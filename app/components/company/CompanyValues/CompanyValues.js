"use client";

import styles from "./companyValues.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";
import { FiUsers, FiShield, FiRefreshCw } from "react-icons/fi";

const ICON_MAP = {
  FiUsers: FiUsers,
  FiShield: FiShield,
  FiRefreshCw: FiRefreshCw,
};

export default function CompanyValues({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section className={styles.section} aria-labelledby="company-values-title">
      {/* Ambient background — same blue liquid-glass language as the rest of the page */}
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>
      <div className={styles.grid}></div>

      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.label}>{translated.label}</span>
          <h2 id="company-values-title" className={styles.title}>
            {translated.title}
          </h2>
          <p className={styles.intro}>{translated.intro}</p>
        </header>

        <div className={styles.list}>
          {translated.differentiators.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || FiShield;

            return (
              <div
                className={styles.listItem}
                key={item.text}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={styles.iconWrap}>
                  <IconComponent className={styles.icon} aria-hidden="true" />
                </div>

                <p className={styles.listText}>{item.text}</p>

                {index < translated.differentiators.length - 1 && (
                  <div className={styles.connector} aria-hidden="true"></div>
                )}
              </div>
            );
          })}
        </div>

        <p className={styles.closing}>{translated.closing}</p>
      </div>
    </section>
  );
}