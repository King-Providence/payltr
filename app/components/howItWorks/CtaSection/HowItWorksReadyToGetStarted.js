"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./readyToGetStarted.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function HowItWorksReadyToGetStarted({ content, isAuditPage }) {
  const { t, i18n } = useTranslation();
  const translatedContent = useTranslatedContent(content);
  const applyNowLabel = t("Apply Now", { defaultValue: "Apply Now", keySeparator: false });
  const calculateCashflowLabel = t("cta.calculateCashflow", {
    defaultValue: "Start audit now",
  });
  const lang = (i18n.resolvedLanguage || i18n.language || "").slice(0, 2);
  const dutchLayout = lang === "nl";
  const isTalkToUs = translatedContent.variant === "talkToUs";

  if (isTalkToUs) {
    const ctaText =
      translatedContent.ctaText ||
      translatedContent.buttonText ||
      "Speak To Partnerships";
    const ctaHref = translatedContent.ctaHref || translatedContent.buttonLink || "/contact";

    return (
      <section className={styles.talkSection} data-aos="fade-up">
        <div className={styles.talkInner}>
          <div className={styles.talkContent}>
            <h2 className={styles.talkTitle}>{translatedContent.title}</h2>
            <p className={styles.talkSubtitle}>{translatedContent.description}</p>
            <Link href={ctaHref} className={styles.talkCta}>
              {ctaText}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} data-aos="fade-up">
      <div className={styles.sectionInner}>
        <h2 className={styles.title}>{translatedContent.title}</h2>
        <p className={styles.subtitle}>{translatedContent.description}</p>

        <div className={styles.buttonWrapper} data-aos="fade-up">
        {isAuditPage ? (
          <Link href="/aanvragen" className={styles.cta} type="button">
            {applyNowLabel}
          </Link>
        ) : dutchLayout ? (
          <>
            <Link href="/aanvragen" className={styles.cta} type="button">
              {applyNowLabel}
            </Link>
            <Link href="/cashflow-analyse" className={styles.secondaryCta} type="button">
              {calculateCashflowLabel}
            </Link>
          </>
        ) : (
          <>
            <Link href="/cashflow-analyse" className={styles.cta} type="button">
              {calculateCashflowLabel}
            </Link>
            <Link href="/aanvragen" className={styles.secondaryCta} type="button">
              {applyNowLabel}
            </Link>
          </>
        )}
      </div>

      {translatedContent.lists && (
        <div className={styles.lists}>
          {translatedContent.lists.map((list, index) => (
            <div className={styles.list} key={index} data-aos="fade-up">
              <span className={styles.icon}>{list.icon}</span>
              <span className={styles.text}>{list.text}</span>
            </div>
          ))}
        </div>
      )}
      </div>
    </section>
  );
}
