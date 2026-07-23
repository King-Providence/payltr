"use client";

import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import styles from "./whyFounderChoose.module.css";

const FEATURES = [
  "Working capital up to €500,000",
  "120-day payment pause — the longest deferral window in the Dutch market",
  "Flexible 12 or 24-month repayment",
  "Open Banking-powered cashflow analysis",
  "Automated eligibility assessment",
  "Funding partner network",
  "End-to-end orchestration",
];

export default function WhyFounderChoose() {
  return (
    <section
      className={styles.section}
      aria-labelledby="solution-heading"
      data-aos="fade-up"
    >
      <div className={styles.inner} data-aos="fade-up">
        <div className={styles.leftWrap}>
          <div className={styles.leftSticky}>
            <p className={styles.kicker}>Our solution</p>
            <h2 id="solution-heading" className={styles.title}>
              Enable financing inside your own platform.
            </h2>
            <p className={styles.bodyText}>
              PayLTR allows banks, fintechs and software platforms to offer
              financing directly to their existing SME customers without
              building the lending infrastructure themselves. Through one
              integration, partners gain access to:
            </p>
            <p className={styles.closingLine}>
              Your customers stay inside your ecosystem while PayLTR manages
              the financing journey.
            </p>
            <Link className={styles.ctaBtn} href="/aanvragen">
              Apply For Funding
            </Link>
          </div>
        </div>

        <div className={styles.rightWrap}>
          <ul className={styles.featureList}>
            {FEATURES.map((feature) => (
              <li key={feature} className={styles.featureItem}>
                <span className={styles.featureIcon} aria-hidden="true">
                  <FiCheck />
                </span>
                <span className={styles.featureText}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}