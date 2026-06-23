"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./processOfHowIWorks.module.css";

const STEP_ICON = "/assets/home/howitwork.svg";

const FINANCING_BULLETS = [
  "support growth",
  "bridge VAT obligations",
  "cover supplier payments",
  "maintain business continuity",
];

const KEY_BENEFITS = [
  {
    title: "Instant Cashflow Bridge",
    body: "PayLTR identifies liquidity pressure and orchestrates the financing journey.",
  },
  {
    title: "120-Day Payment Pause",
    body: "Businesses receive a full 120-day grace period before repayment begins.",
  },
  {
    title: "Predictable Repayment",
    body: "Following the payment pause, repayment is structured over up to 24 months.",
  },
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
    title: "Secure Data Connection",
    description:
      "With customer consent, Open Banking enables access to relevant financial information.",
  },
  {
    step: 2,
    title: "Liquidity Diagnostics",
    description: "PayLTR analyzes:",
    bullets: [
      "cashflow trends",
      "upcoming obligations",
      "liquidity pressure",
      "funding opportunities",
    ],
  },
  {
    step: 3,
    title: "Eligibility Assessment",
    description:
      "The Risk Orchestration Engine determines financing eligibility.",
  },
  {
    step: 4,
    title: "Funding Partner Routing",
    description: "Applications are routed through the Funding Partner Network.",
  },
  {
    step: 5,
    title: "Funding Activation",
    description: "The merchant receives access to capital.",
    flow: [
      "120-Day Payment Pause",
      "Repayment begins after the grace period.",
      "Repayment term up to 24 months",
    ],
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
              <h2 className={styles.bannerTitle}>
                Offer Flexible Financing Up To €500,000
              </h2>
              <p className={styles.bannerSubheading}>WITH A 120-DAY PAYMENT PAUSE</p>
              <p className={styles.bannerIntro}>
                Through our Funding Partner Network, SMEs can access operational
                financing designed to:
              </p>
              <ul className={styles.bannerList}>
                {FINANCING_BULLETS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.bannerDivider} aria-hidden />

            <div className={styles.bannerCol}>
              <h3 className={styles.benefitsHeading}>KEY BENEFITS</h3>
              <div className={styles.benefitsList}>
                {KEY_BENEFITS.map((benefit) => (
                  <div key={benefit.title} className={styles.benefitItem}>
                    <p className={styles.benefitTitle}>{benefit.title}</p>
                    <p className={styles.benefitBody}>{benefit.body}</p>
                  </div>
                ))}
              </div>
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
            <Link href="/hoe-het-werkt" className={styles.howBtn}>
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
