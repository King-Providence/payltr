"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css";
import { AuditHeroSectionContent } from "@/utils/audit";
import HowItWorksHeroSection from "../components/howItWorks/HowItWorksHeroSection/HowItWorksHeroSection";
import Navbar from "../components/Navbar/Navbar";
import "@/lib/i18n";
import { translateUtilContent } from "@/lib/translateUtilContent";
import HowWeDecide from "../components/homeSection/HowWeDecide/HowWeDecide";
import { complianceContent } from "@/utils/home";
import Link from "next/link";

const formatEUR0 = (value) => {
  const n = Number(value);
  if (!Number.isFinite(n)) return "€0";
  return n.toLocaleString("en-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
};

const formatEUR2 = (value) => {
  const n = Number(value);
  if (!Number.isFinite(n)) return "€0.00";
  return n.toLocaleString("en-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

function WarningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M10 2.25C10.6366 2.25 11.223 2.59706 11.5311 3.15393L18.2339 15.2036C18.5421 15.7605 18.5421 16.4395 18.2339 16.9964C17.9258 17.5533 17.3394 17.9003 16.7028 17.9003H3.29722C2.6606 17.9003 2.0742 17.5533 1.76606 16.9964C1.45793 16.4395 1.45793 15.7605 1.76606 15.2036L8.46892 3.15393C8.77699 2.59706 9.36339 2.25 10 2.25Z"
        stroke="#F97316"
        strokeWidth="1.6"
      />
      <path d="M10 7.1V11.2" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 14.5H10.01" stroke="#F97316" strokeWidth="3.0" strokeLinecap="round" />
    </svg>
  );
}

export default function AuditPage() {
  const { t } = useTranslation();
  const [monthlySupplierPurchases, setMonthlySupplierPurchases] = useState(8000);
  const [paymentTermsDays, setPaymentTermsDays] = useState(45);
  const [largestInvoice, setLargestInvoice] = useState(5000);
  const [monthlyInvoices, setMonthlyInvoices] = useState(3);
  const [seasonalPercent, setSeasonalPercent] = useState(0.15);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [snapshot, setSnapshot] = useState(null);

  const seasonalOptions = [
    { labelKey: "audit.seasonalLow", percent: 0.05 },
    { labelKey: "audit.seasonalMedium", percent: 0.15 },
    { labelKey: "audit.seasonalHigh", percent: 0.25 },
  ];

  const selectedSeasonal = seasonalOptions.find((o) => o.percent === seasonalPercent) || seasonalOptions[1];

  const paymentTermsOptions = [30, 45, 60, 75, 90];
  const monthlyInvoiceOptions = [1, 2, 3, 4, 5];

  const seasonalFillPercent = (() => {
    const min = 0.05;
    const max = 0.25;
    const ratio = (seasonalPercent - min) / (max - min);
    const pct = Math.round(Math.min(1, Math.max(0, ratio)) * 100);
    return pct;
  })();

  const results = useMemo(() => {
    if (!snapshot) return null;
    const purchases = Math.max(0, snapshot.monthlySupplierPurchases);
    const terms = Math.max(0, snapshot.paymentTermsDays);
    const invoice = Math.max(0, snapshot.largestInvoice);
    const invoicesCount = Math.max(1, snapshot.monthlyInvoices);
    const seasonal = snapshot.seasonalPercent;

    // Base values are calibrated to match the provided screenshot defaults
    // (8000 purchases, 45 terms, 5000 invoice, 3 invoices, 15% seasonal).
    const baseDip = purchases * (terms / 30) - invoice - purchases * 0.3;

    // Apply seasonal + invoice concentration adjustments while keeping defaults unchanged.
    const seasonalMultiplier = 1 + ((seasonal / 0.15) - 1) * 0.25;
    const concentrationMultiplier = 1 + (3 - invoicesCount) * 0.04;

    const cashflowDip = Math.max(0, baseDip * seasonalMultiplier * concentrationMultiplier);

    const day = Math.max(
      1,
      Math.round(terms * 0.49 + (seasonal - 0.15) * 20 + (3 - invoicesCount) * 1.5)
    );

    const pressureTight = cashflowDip >= purchases * 0.4;
    const pressureLabelKey = pressureTight ? "audit.pressureTight" : "audit.pressureModerate";

    // Plan & metrics
    const planTitleKey = invoice <= 10000 ? "audit.planTitle35" : "audit.planTitle6";
    const breathingRoomKey = invoice <= 10000 ? "audit.breathing35" : "audit.breathing57";
    const repaymentTermsKey = breathingRoomKey;

    const monthlyDenominatorBase = invoice <= 10000 ? 3 : 4;
    const monthlyDenominator = Math.max(1, monthlyDenominatorBase + (3 - invoicesCount) * 0.1);
    const monthlyPayment = invoice / monthlyDenominator;

    const cashflowImprovement = purchases * 0.75 * seasonalMultiplier;
    const runwayDays = Math.round(
      terms * 0.51 + (seasonal - 0.15) * 10 + (invoicesCount - 3) * 0.5
    );
    const stabilizedPct = Math.round((terms / 60) * 100 + (seasonal - 0.15) * 50);

    return {
      cashflowDip,
      day,
      pressureLabelKey,
      planTitleKey,
      breathingRoomKey,
      repaymentTermsKey,
      monthlyPayment,
      cashflowImprovement,
      runwayDays,
      stabilizedPct,
    };
  }, [snapshot]);

  const sliderLabel = t(selectedSeasonal.labelKey);
  const dynamicSubheadline = useMemo(() => {
    if (hasCalculated && results) {
      return t("audit.subheadlineCalculated", {
        runwayDays: results.runwayDays,
        gap: formatEUR0(results.cashflowDip),
        day: results.day,
      });
    }
    return t("audit.subheadlinePlaceholder");
  }, [hasCalculated, results, t]);

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main} data-aos="fade-up">
        <HowItWorksHeroSection content={translateUtilContent(AuditHeroSectionContent, t)} />
        <HowWeDecide content={translateUtilContent(complianceContent, t)} />

        <section className={styles.auditGrid} aria-label={t("audit.ariaAuditTool")} id="calculation" data-aos="fade-up">
          <div className={styles.leftCol}>
            <h2 className={styles.heading}>{t("audit.calculateHeading")}</h2>
            <p className={styles.subheading}>{t("audit.calculateSubheading")}</p>

            <div className={styles.formCard}>
              <div className={styles.field}>
                <div className={styles.label}>{t("audit.fieldSupplierPurchases")}</div>
                <input
                  className={styles.input}
                  type="number"
                  min={0}
                  step={100}
                  value={monthlySupplierPurchases}
                  onChange={(e) => setMonthlySupplierPurchases(Number(e.target.value) || 0)}
                />
                <div className={styles.helper}>{t("audit.helperSupplierPurchases")}</div>
              </div>

              <div className={styles.field}>
                <div className={styles.label}>{t("audit.fieldPaymentTerms")}</div>
                <select
                  className={styles.select}
                  value={paymentTermsDays}
                  onChange={(e) => setPaymentTermsDays(Number(e.target.value))}
                >
                  {paymentTermsOptions.map((d) => (
                    <option key={d} value={d}>
                      {t("audit.paymentDays", { count: d })}
                    </option>
                  ))}
                </select>
                <div className={styles.helper}>{t("audit.helperPaymentTerms")}</div>
              </div>

              <div className={styles.field}>
                <div className={styles.label}>{t("audit.fieldLargestInvoice")}</div>
                <input
                  className={styles.input}
                  type="number"
                  min={0}
                  step={100}
                  value={largestInvoice}
                  onChange={(e) => setLargestInvoice(Number(e.target.value) || 0)}
                />
                <div className={styles.helper}>{t("audit.helperLargestInvoice")}</div>
              </div>

              <div className={styles.field}>
                <div className={styles.label}>{t("audit.fieldMonthlyInvoices")}</div>
                <select
                  className={styles.select}
                  value={monthlyInvoices}
                  onChange={(e) => setMonthlyInvoices(Number(e.target.value))}
                >
                  {monthlyInvoiceOptions.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.sliderField}>
                <div className={styles.sliderHeader}>
                  <div className={styles.label}>{t("audit.fieldSeasonalFluctuation")}</div>
                  <div className={styles.sliderValue}>
                    {sliderLabel}
                  </div>
                </div>
                <input
                  className={styles.range}
                  type="range"
                  min={0.05}
                  max={0.25}
                  step={0.05}
                  value={seasonalPercent}
                  onChange={(e) => setSeasonalPercent(Number(e.target.value))}
                  aria-label={t("audit.fieldSeasonalFluctuation")}
                  style={{ "--fillPercent": `${seasonalFillPercent}%` }}
                />
              </div>

              <button
                className={styles.calcBtn}
                type="button"
                onClick={() => {
                  setSnapshot({
                    monthlySupplierPurchases,
                    paymentTermsDays,
                    largestInvoice,
                    monthlyInvoices,
                    seasonalPercent,
                  });
                  setHasCalculated(true);
                }}
              >
                {t("audit.calcButton")}
              </button>
            </div>
          </div>

          <div className={styles.rightCol}>
            <h2 className={styles.heading}>{t("audit.yourResults")}</h2>
            <p className={styles.resultsIntro}>{t("audit.resultsIntro")}</p>

            {hasCalculated && results ? (
              <>
                <div className={styles.indicatorCard}>
                  <div className={styles.indicatorTitle}>
                    <WarningIcon />
                    <span>{t("audit.cashflowPressureIndicator")}</span>
                  </div>
                  <div className={styles.pressureLabel}>{t(results.pressureLabelKey)}</div>
                  <div className={styles.indicatorText}>
                    {t("audit.indicatorDip", {
                      gap: formatEUR0(results.cashflowDip),
                      day: results.day,
                    })}
                  </div>
                </div>

                <div className={styles.payLaterTitle}>{t("audit.payLaterTitle")}</div>

                <div className={styles.planCard}>
                  <div className={styles.planTitle}>{t(results.planTitleKey)}</div>
                  <div className={styles.planSubtitle}>{t("audit.planSubtitle")}</div>

                  <div className={styles.planRow}>
                    <div className={styles.planRowLabel}>{t("audit.planRowBreathingRoom")}</div>
                    <div className={styles.planRowValue}>{t(results.breathingRoomKey)}</div>
                  </div>
                  <div className={styles.planRow}>
                    <div className={styles.planRowLabel}>{t("audit.planRowRepaymentTerms")}</div>
                    <div className={styles.planRowValue}>{t(results.repaymentTermsKey)}</div>
                  </div>
                  <div className={styles.planRow}>
                    <div className={styles.planRowLabel}>{t("audit.planRowMonthlyPayment")}</div>
                    <div className={styles.planRowValue}>{formatEUR2(results.monthlyPayment)}</div>
                  </div>
                </div>

                <div className={styles.metricsRow}>
                  <div className={styles.metricBlue}>
                    <div className={styles.metricBig}>{formatEUR0(results.cashflowImprovement)}</div>
                    <div className={styles.metricSmall}>{t("audit.metricCashflowImprovement")}</div>
                  </div>
                  <div className={styles.metricGreen}>
                    <div className={styles.metricBigGreen}>+{results.runwayDays}d</div>
                    <div className={styles.metricSmallGreen}>{t("audit.metricEstimatedRunway")}</div>
                  </div>
                  <div className={styles.metricPurple}>
                    <div className={styles.metricBigPurple}>+{results.stabilizedPct}%</div>
                    <div className={styles.metricSmallPurple}>{t("audit.metricStabilizedCapital")}</div>
                  </div>
                </div>

                <div className={styles.noteBox}>{t("audit.noteBox")}</div>

                <div className={styles.resultsCtaWrap}>
                  <Link href="/aanvragen" className={styles.cta} type="button">
                    {t("Audit results apply now", { defaultValue: "Apply Now", keySeparator: false })}
                  </Link>
                </div>
              </>
            ) : null}
          </div>
        </section>

        {hasCalculated && results ? (
          <section className={styles.section} data-aos="fade-up">
            <h2 className={styles.title}>{t("audit.analysisReady")}</h2>
            <p className={styles.subtitle}>{dynamicSubheadline}</p>
            <div className={styles.buttonWrapper} data-aos="fade-up">
              <Link href={"/aanvragen"} className={styles.cta} type="button">
                {t("audit.applyForAmount", { amount: formatEUR0(results.cashflowDip) })}
              </Link>
              <Link href={"/cashflow-analyse/#calculation"} className={styles.secondaryCta} type="button">
                {t("audit.howCalculationWorks")}
              </Link>
            </div>
            <p data-aos="fade-up" className="text-black md:text-base pt-1 md:pt-3 font-semibold md:w-[90%] text-sm w-full text-center">
              {t("audit.estimateDisclaimer")}
            </p>
          </section>
        ) : null}
        {/* <HowItWorksReadyToGetStarted isAuditPage={true} content={translateUtilContent(getStartedContent, t)} /> */}
      </main>

      <Footer />
    </div>
  );
}

