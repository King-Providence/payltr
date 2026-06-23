import Link from "next/link";
import styles from "./WhyPayltrDifferent.module.css";

const OLD_WAY = [
  "Looks at last year's filed accounts",
  "Runs a personal credit check",
  "Decision in days or weeks",
  "You apply when you're already in crisis",
  "Generic loan amount",
  "Fixed repayment from day one",
  "Interest charges from the start",
];

const PAYLTR = [
  "Reads your live bank transactions",
  "Analyses your business cashflow only",
  "Pre-scan result in minutes",
  "We identify the gap before it hits you",
  "Sized to your actual cashflow need",
  "Up to 120 days before repayment starts",
  "0% interest on all repayments",
];

export default function WhyPayltrDifferent() {
  return (
    <section
      className={styles.section}
      aria-labelledby="why-payltr-different-heading"
      data-aos="fade-up"
    >
      <div className={styles.inner}>
        <div className={styles.Header}>
          <p className={styles.kicker}>Why PayLTR is different</p>
          <h2 id="why-payltr-different-heading" className={styles.headline}>
            Built different. <br /> Because the old way doesn't work.
          </h2>
          <p className={styles.lead}>
            Traditional lenders were designed for a different era. PayLTR was built for how small
            businesses actually operate — with variable income, tight margins, and no time to waste.
          </p>
        </div>

        <div className={styles.compare} role="region" aria-label="Traditional lending vs PayLTR">
          <div className={styles.compareGrid}>
            <div className={styles.compareRow}>
              <div className={styles.columnHeaderOld}>The old way</div>
              <div className={styles.columnHeaderPayltr}>PayLTR</div>
            </div>
            {OLD_WAY.map((text, i) => (
              <div key={i} className={styles.compareRow}>
                <div className={styles.cellOld}>{text}</div>
                <div className={styles.cellPayltr}>{PAYLTR[i]}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.ctaWrapper}>
          <p className={styles.footnote}>
            No personal guarantees. No hidden fees. No surprises.
          </p>
          <Link href="/aanvragen" className={styles.cta}>See if you qualify — takes 2 minutes</Link>
        </div>
      </div>
    </section>
  );
}
