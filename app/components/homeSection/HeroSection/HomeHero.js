"use client";

import { useTranslation } from "react-i18next";
import styles from "./homeHero.module.css";
import Link from "next/link";
import Image from "next/image";
import "@/lib/i18n";

const HERO_DEFAULTS = {
  titleLine1: "Grow Now.",
  titleLine2: "Repay Later.",
  subtitle:
    "Operational liquidity infrastructure for SMEs and the platforms that serve them.",
  description:
    "Using Open Banking, cashflow intelligence and automated funding partner integrations, PayLTR transforms liquidity pressure into financing opportunities.",
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
          <span className={styles.titleLine}>
            {t("homeHero.titleLine1", { defaultValue: HERO_DEFAULTS.titleLine1 })}
          </span>
          <span className={styles.titleLine}>
            {t("homeHero.titleLine2", { defaultValue: HERO_DEFAULTS.titleLine2 })}
          </span>
        </h1>

        <div className={styles.contentSection}>
          <p className={styles.subtitle}>
            {t("homeHero.subtitle", { defaultValue: HERO_DEFAULTS.subtitle })}
          </p>
          <p className={styles.description}>
            {t("homeHero.description", { defaultValue: HERO_DEFAULTS.description })}
          </p>
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
