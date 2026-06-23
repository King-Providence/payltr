"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./whyFounderChoose.module.css";

const POINTS = [
  {
    title: "VAT Obligations",
    body: "Bridge quarterly tax obligations without disrupting operations.",
    image: "/assets/whyChoose1.png",
  },
  {
    title: "Supplier Payments",
    body: "Pay suppliers on time while preserving liquidity.",
    image: "/assets/whyChoose2.png",
  },
  {
    title: "Payroll Protection",
    body: "Maintain payroll continuity during temporary cash flow pressure.",
    image: "/assets/whyChoose3.png",
  },
  {
    title: "Growth Opportunities",
    body: "Access capital when opportunities arise.",
    image: "/assets/whyChoose4.png",
  },
  {
    title: "Working-Capital Gaps",
    body: "Bridge timing mismatches between expenses and incoming revenue.",
    image: "/assets/whyChoose5.png",
  },
];

export default function WhyFounderChoose() {
  return (
    <section
      className={styles.section}
      aria-labelledby="liquidity-needs-heading"
      data-aos="fade-up"
    >
      <div className={styles.inner} data-aos="fade-up">
        <div className={styles.leftWrap}>
          <div className={styles.leftSticky}>
            <p className={styles.kicker}>For Businesses</p>
            <h2 id="liquidity-needs-heading" className={styles.title}>
              When Does Your Business Need Liquidity?
            </h2>
            <Link className={styles.ctaBtn} href="/aanvragen">
              Apply For Funding
            </Link>
          </div>
        </div>

        <div className={styles.rightWrap}>
          {POINTS.map((point) => (
            <article key={point.title} className={styles.pointCard}>
              <div className={styles.media} aria-hidden="true">
                <Image
                  src={point.image}
                  alt=""
                  width={640}
                  height={360}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.pointTitle}>{point.title}</h3>
                <p className={styles.pointText}>{point.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
