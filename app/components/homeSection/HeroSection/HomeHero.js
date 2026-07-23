"use client";

import { useTranslation } from "react-i18next";
import styles from "./homeHero.module.css";
import Link from "next/link";
import Image from "next/image";
import "@/lib/i18n";

const HERO_DEFAULTS = {
  title: "Time to transform SME financing",
  subtitle:
    "Banks, fintechs and software platforms already have SME customers. What they often lack is the infrastructure to offer financing seamlessly inside their own ecosystem. PayLTR provides a single orchestration layer that enables partners to offer working capital of up to €500,000, including a 120-day payment pause and flexible 12 or 24-month repayment terms, powered by our funding partner network.",
  bullets: [
    "Working capital up to €500,000",
    "120-day payment pause",
    "Flexible 12 or 24-month repayment",
    "Powered by our funding partner network",
  ],
  ctaPartner: "Become a partner",
  ctaHowItWorks: "See how it works",
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
          {t("homeHero.titleV2", { defaultValue: HERO_DEFAULTS.title })}
        </h1>

        <div className={styles.contentSection}>
          <p className={styles.subtitle}>
            {t("homeHero.subtitleV2", { defaultValue: HERO_DEFAULTS.subtitle })}
          </p>
        </div>

        <div className={styles.actions}>
          <Link className={styles.primaryBtn} href="/partners">
            {t("homeHero.ctaPartnerV2", { defaultValue: HERO_DEFAULTS.ctaPartner })}
            <span className={styles.btnArrow} aria-hidden="true">↗</span>
          </Link>
          <Link className={styles.secondaryBtn} href="/how-it-works">
            {t("homeHero.ctaHowItWorksV2", { defaultValue: HERO_DEFAULTS.ctaHowItWorks })}
          </Link>
        </div>

        <p className={styles.socialProof}>
          {t("homeHero.socialProofV2", {
            defaultValue:
              "Trusted by accounting platforms, neobanks and PSPs across the Netherlands.",
          })}
        </p>
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