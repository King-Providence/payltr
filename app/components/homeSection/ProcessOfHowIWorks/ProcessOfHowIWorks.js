"use client";

import Link from "next/link";
import { FiGrid, FiGitBranch, FiShield, FiSend, FiArrowRight } from "react-icons/fi";
import styles from "./processOfHowIWorks.module.css";

const STEP_ICONS = [FiGrid, FiGitBranch, FiShield, FiSend];

const MERCHANT_BENEFITS = [
  "Up to 120 days before first repayment",
  "Repayment terms up to 24 months",
  "Fast digital application",
  "Working capital for inventory, growth and expansion",
];

const INFRASTRUCTURE = [
  "One integration.",
  "Multiple funding partners.",
  "Embedded finance orchestration.",
  "Compliance support.",
  "KYC/KYB.",
  "API-first.",
  "Scalable across Europe.",
];

const PARTNER_BENEFITS = [
  "No Lending License Required",
  "No Credit Infrastructure Required",
  "No Collections Operations",
  "Minimal Manual Underwriting",
  "Lightweight API Deployment",
  "Revenue Share Opportunities",
];

const STEPS = [
  {
    step: 1,
    title: "One integration",
    description:
      "Connect once to access our orchestration layer. Your platform surfaces the financing option; PayLTR handles everything else.",
  },
  {
    step: 2,
    title: "Automated workflows",
    description:
      "Application intake, Open Banking analysis, eligibility assessment and funding partner routing are fully orchestrated.",
  },
  {
    step: 3,
    title: "No lending licence required",
    description:
      "PayLTR connects your platform to regulated funding partners while you remain focused on your core business.",
  },
  {
    step: 4,
    title: "Faster go-live",
    description:
      "Launch embedded financing in weeks instead of building it from scratch.",
  },
];

function StepCard({ step, index }) {
  const Icon = STEP_ICONS[index];
  const badgeNumber = String(step.step).padStart(2, "0");

  return (
    <article className={styles.stepCard}>
      <div className={styles.cardTop}>
        <div className={styles.iconCircle}>
          <Icon className={styles.stepIconSvg} aria-hidden="true" />
        </div>
        <span className={styles.stepBadge}>{badgeNumber}</span>
        <FiArrowRight className={styles.stepArrow} aria-hidden="true" />
      </div>

      <p className={styles.stepLabel}>Step {step.step}</p>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDescription}>{step.description}</p>

      {step.bullets ? (
        <ul className={styles.stepList}>
          {step.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {step.flow ? (
        <div className={styles.stepFlow}>
          {step.flow.map((item, i) => (
            <div key={item} className={styles.flowItem}>
              <p>{item}</p>
              {i < step.flow.length - 1 ? (
                <span className={styles.flowArrow} aria-hidden>
                  ↓
                </span>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function ProcessOfHowIWorks() {
  return (
    <div className={styles.wrapper}>
      {/*
      <div className={styles.topBlocks}>
        <section className={styles.financingBanner} data-aos="fade-up">
          <div className={styles.bannerPattern} aria-hidden />
          <div className={styles.bannerInner}>
            <div className={styles.bannerCol}>
              <h2 className={styles.bannerTitle}>Why Merchants Love It</h2>
              <p className={styles.bannerSubheading}>
                PARTNER BENEFIT FIRST, MERCHANT BENEFIT LATER
              </p>
              <ul className={styles.bannerList}>
                {MERCHANT_BENEFITS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.bannerDivider} aria-hidden />

            <div className={styles.bannerCol}>
              <h3 className={styles.infraHeading}>INFRASTRUCTURE</h3>
              <ul className={styles.infraList}>
                {INFRASTRUCTURE.map((item) => (
                  <li key={item}>
                    <span className={styles.infraDot} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.partnerSection} data-aos="fade-up">
          <div className={styles.partnerInner}>
            <div className={styles.partnerLeft}>
              <h2 className={styles.partnerTitle}>
                Add Financing Without Becoming A Lender
              </h2>
              <p className={styles.partnerDescription}>
                Offer liquidity solutions to your customer base while PayLTR manages
                the orchestration layer.
              </p>
              <Link href="/partners" className={styles.partnerBtn}>
                Book Partner Demo
              </Link>
            </div>

            <div className={styles.partnerCardWrap}>
              <span className={styles.partnerStar} aria-hidden>
                ✦
              </span>
              <div className={styles.partnerCard}>
                <h3 className={styles.partnerCardTitle}>Benefits:</h3>
                <ul className={styles.partnerCardList}>
                  {PARTNER_BENEFITS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      */}

      <section className={styles.howSection} id="how-it-works" data-aos="fade-up">
        <div className={styles.howDots} aria-hidden="true" />
        <div className={styles.howCurve} aria-hidden="true" />

        <div className={styles.howInner}>
          <div className={styles.howHeader}>
            <span className={styles.howKicker}>How it works</span>
            <h2 className={styles.howTitle}>
              Deploy embedded lending without operational complexity.
            </h2>
          </div>

          <div className={styles.stepsGrid}>
            {STEPS.map((step, index) => (
              <StepCard key={step.step} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}