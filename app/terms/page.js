"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";


const toc = [
  { id: "introduction", label: "1. Introduction" },
  { id: "services-provided", label: "2. Services Provided" },
  { id: "eligibility", label: "3. Eligibility" },
  { id: "user-responsibilities", label: "4. User Responsibilities" },
  { id: "platform-fees-costs", label: "5. Platform Fees & Costs" },
  { id: "data-processing", label: "6. Data Processing" },
  { id: "disclaimer", label: "7. Disclaimer" },
  { id: "limitation-of-liability", label: "8. Limitation of Liability" },
  { id: "termination", label: "9. Termination" },
  { id: "governing-law", label: "10. Governing Law" },
];

export default function TermsOfServicesPage() {
  const { t } = useTranslation();
  const tr = (value) => t(value, { defaultValue: value, keySeparator: false });
  const translatedToc = useMemo(
    () => toc.map((item) => ({ ...item, label: tr(item.label) })),
    [t]
  );
  const sectionIds = useMemo(() => translatedToc.map((item) => item.id), [translatedToc]);
  const [activeId, setActiveId] = useState(sectionIds[0] || null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));

        if (visible.length > 0) {
          const next = visible[0].target.id;
          setActiveId(next);
        }
      },
      {
        // Bias detection towards the area where the user reads.
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.01, 0.1, 0.25],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className={styles.page}>
      <Navbar />

      <header className={styles.heroBar} data-aos="fade-up">
        <div className={styles.backgroundImage}></div>
        <div className={styles.heroInner}>
          <h1 className={`${styles.heroTitle}`} data-aos="zoom-in">{tr("Terms of Service")}</h1>
        </div>
      </header>

      <div className={styles.contentArea}>
        <div className={styles.contentGrid}>
          <aside className={styles.sidebar} aria-label={tr("Privacy policy table of contents")}>
            {translatedToc.map((t) => (
              <a
                key={t.id}
                className={`${styles.sidebarLink} ${activeId === t.id ? styles.sidebarLinkActive : ""}`}
                href={`#${t.id}`}
              >
                {t.label}
              </a>
            ))}
          </aside>

          <main className={styles.article} aria-label={tr("Privacy policy content")}>
            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("1. Introduction")}</h2>
              <p>
                {tr('These Terms of Service ("Terms") govern your use of the PayLTR platform and services.')}
              </p>
              <p>
                {tr("By accessing or using PayLTR, you agree to be bound by these Terms.")}
              </p>
            </section>

            <section id="services-provided" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("2. Services Provided")}</h2>
              <p>{tr("PayLTR provides:")}</p>
              <ul className={styles.bullets}>
                <li>{tr("A pre-scan credit assessment tool")}</li>
                <li>{tr("Open banking-based financial data analysis")}</li>
                <li>{tr("Forwarding of loan applications to financing partners")}</li>
                <li>{tr("A platform service")}</li>
              </ul>
              <p>{tr("PayLTR does not provide loans itself.")}</p>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("3. Eligibility")}</h2>
              <p>{tr("To use PayLTR, you must:")}</p>
              <ul className={styles.bullets}>
                <li>{tr("Be a registered business within the EU")}</li>
                <li>{tr("Be authorised to act on behalf of your company")}</li>
                <li>{tr("Provide accurate information")}</li>
                <li>{tr("Not misuse or manipulate the platform")}</li>
              </ul>
            </section>

            <section id="user-responsibilities" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("4. User Responsibilities")}</h2>
              <p>{tr("You agree to:")}</p>
              <ul className={styles.bullets}>
                <li>{tr("Provide truthful information during the application")}</li>
                <li>{tr("Maintain account security")}</li>
                <li>{tr("Not use PayLTR for unlawful purposes")}</li>
                <li>{tr("Grant explicit consent for bank data retrieval when necessary (PSD2)")}</li>
              </ul>
            </section>

            <section id="platform-fees-costs" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("5. Platform Fees & Costs")}</h2>
              <p>{tr("PayLTR charges a platform fee for using the service.")}</p>
              <p>
                {tr("All financing costs are determined by our lending partner based on risk factors.")}
              </p>
              <p>
                {tr("PayLTR does not control or determine interest rates, eligibility outcomes, or final loan terms.")}
              </p>
            </section>

            <section id="data-processing" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("6. Data Processing")}</h2>
              <p>
                {tr("Use of PayLTR requires processing of personal and financial data as outlined in the")}{" "}
                <Link href="/privacybeleid">{tr("Privacy Policy")}</Link>.
              </p>
              <p>{tr("By using the platform, you consent to these data practices.")}</p>
            </section>

            <section id="disclaimer" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("7. Disclaimer")}</h2>
              <p>{tr("PayLTR cannot guarantee:")}</p>
              <ul className={styles.bullets}>
                <li>{tr("Approval of any loan")}</li>
                <li>{tr("Loan amount or terms")}</li>
                <li>{tr("Response times from third-party financing partners")}</li>
              </ul>
              <p>{tr("All financing decisions are made exclusively by the partner lender.")}</p>
            </section>

            <section id="limitation-of-liability" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("8. Limitation of Liability")}</h2>
              <p>{tr("PayLTR is not liable for:")}</p>
              <ul className={styles.bullets}>
                <li>{tr("Losses arising from denied loan applications")}</li>
                <li>{tr("Decisions made by third-party lenders")}</li>
                <li>{tr("Business losses or interruption")}</li>
                <li>{tr("Errors caused by inaccurate user data or external APIs")}</li>
              </ul>
              <p>{tr("Our liability is limited to the maximum permitted by Dutch law.")}</p>
            </section>

            <section id="termination" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("9. Termination")}</h2>
              <p>{tr("We may suspend or terminate accounts for:")}</p>
              <ul className={styles.bullets}>
                <li>{tr("Fraud")}</li>
                <li>{tr("Abuse")}</li>
                <li>{tr("Non-compliance with these Terms")}</li>
                <li>{tr("Security concerns")}</li>
              </ul>
              <p>
                {tr("Users may terminate their account at any time by contacting")}{" "}
                <Link href="mailto:support@payltr.eu">support@payltr.eu</Link>.
              </p>
            </section>

            <section id="governing-law" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("10. Governing Law")}</h2>
              <p>{tr("These Terms are governed by Dutch law.")}</p>
              <p>
                {tr("Any disputes are subject to the jurisdiction of the courts of the Netherlands.")}
              </p>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

