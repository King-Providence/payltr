"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./processOfHowIWorks.module.css";

const STEP_ICON = "/assets/home/howitwork.svg";

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
    title: "Integrate PayLTR",
    description: "Connect once using our API.",
  },
  {
    step: 2,
    title: "Offer Financing",
    description:
      "Embed financing inside your merchant portal, onboarding or dashboard.",
  },
  {
    step: 3,
    title: "Smart Eligibility",
    description:
      "PayLTR evaluates merchants and routes them to the most suitable funding partner.",
  },
  {
    step: 4,
    title: "Funding",
    description:
      "Approved merchants receive working capital with flexible repayment options.",
  },
  {
    step: 5,
    title: "Monitor Everything",
    description:
      "Track applications, approvals and performance through one partner dashboard.",
  },
];

function StepIcon() {
  return (
    <Image
      src={STEP_ICON}
      alt=""
      width={40}
      height={40}
      className={styles.stepIcon}
    />
  );
}

function StepCard({ step, column }) {
  return (
    <article className={`${styles.stepCard} ${styles[`stepCol${column}`]}`}>
      <StepIcon />
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
          {step.flow.map((item, index) => (
            <div key={item} className={styles.flowItem}>
              <p>{item}</p>
              {index < step.flow.length - 1 ? (
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

      <section className={styles.howSection} id="how-it-works" data-aos="fade-up">
        <div className={styles.howInner}>
          <div className={styles.howHeader}>
            <div className={styles.howHeaderText}>
              <h2 className={styles.howTitle}>How It Works</h2>
              <p className={styles.howSubtitle}>Get financed in 5 simple steps</p>
            </div>
            <Link href="/how-it-works" className={styles.howBtn}>
              See the full process
            </Link>
          </div>

          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <StepCard
                key={step.step}
                step={step}
                column={step.step % 2 === 1 ? 1 : 2}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
