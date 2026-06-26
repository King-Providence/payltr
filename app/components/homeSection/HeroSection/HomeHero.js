"use client";

import { useTranslation } from "react-i18next";
import styles from "./homeHero.module.css";
import Link from "next/link";
import Image from "next/image";
import "@/lib/i18n";

const HERO_DEFAULTS = {
  title: "Embedded Business Finance Infrastructure for Platforms & Payment Provider",
  subtitle:
    "Enable your merchants to access flexible working capital—without becoming a lender.",
  description:
    "Increase merchant retention. Unlock new revenue. Power business growth.",
  bullets: [
    "Up to 120 days before first repayment",
    "Repayment terms up to 24 months",
    "Multiple funding partners",
    "One API integration",
  ],
  ctaFunding: "Get Funding",
  ctaPartner: "Become a Partner",
};

export default function HomeHero() {
  const { t } = useTranslation();

  return (
    <section
      className={styles.hero}
      style={{ overflow: "hidden", isolation: "isolate" }}
      data-aos="fade-up"
      data-i18n-skip="true"
      translate="no"
    >
      <div className={styles.backgroundImage} />

      <div
        className={styles.contentWrapper}
        style={{ position: "relative" }}
        data-aos="fade-right"
      >
        <h1 className={styles.title}>
          {t("homeHero.title", { defaultValue: HERO_DEFAULTS.title })}
        </h1>

        <div className={styles.contentSection}>
          <p className={styles.subtitle}>
            {t("homeHero.subtitle", { defaultValue: HERO_DEFAULTS.subtitle })}
          </p>
          <p className={styles.description}>
            {t("homeHero.description", { defaultValue: HERO_DEFAULTS.description })}
          </p>
          <ul className={styles.bullets}>
            {HERO_DEFAULTS.bullets.map((bullet, index) => (
              <li key={index} className={styles.bulletItem}>
                {t(`homeHero.bullets.${index}`, { defaultValue: bullet })}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <Link className={styles.primaryBtn} href="/aanvragen">
            {t("homeHero.ctaFunding", { defaultValue: HERO_DEFAULTS.ctaFunding })}
          </Link>
          <Link className={styles.primaryBtn} href="/partners">
            {t("homeHero.ctaPartner", { defaultValue: HERO_DEFAULTS.ctaPartner })}
          </Link>
        </div>
      </div>

      <div className={styles.imageWrapper} data-aos="fade-left">
        <Image
          src="/assets/home/homeHeroImage.png"
          alt=""
          width={1000}
          height={1000}
          priority
        />
      </div>
    </section>
  );
}
