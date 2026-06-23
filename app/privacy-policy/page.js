"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";


const toc = [
  { id: "introduction", label: "Introduction" },
  { id: "data-controller-contact-information", label: "Data Controller & Contact Information" },
  { id: "categories-of-data-we-collect", label: "Categories of Data We Collect" },
  { id: "purpose-of-data-processing", label: "Purpose of Data Processing" },
  { id: "data-sharing", label: "Data Sharing" },
  { id: "international-transfers", label: "International Transfers" },
  { id: "data-retention", label: "Data Retention" },
  { id: "user-rights-under-gdpr", label: "User Rights under GDPR" },
  { id: "security-measures", label: "Security Measures" },
  { id: "updates-to-this-policy", label: "Updates to This Policy" },
];

export default function PrivacyPolicyPage() {
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
          <h1 className={`${styles.heroTitle}`} data-aos="zoom-in">{tr("Privacy Policy")}</h1>
        </div>
      </header>

      <div className={styles.contentArea}>
        <div className={styles.contentGrid}>
          <aside className={styles.sidebar} aria-label="Privacy policy table of contents">
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

          <main className={styles.article} aria-label="Privacy policy content">
            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("Introduction")}</h2>
              <p>
              {tr('PayLTR ("we", "us", "our") is a financial technology service that provides cashflow financing solutions for small and medium-sized enterprises.')}
              </p>
              <p>
              {tr("We are committed to protecting the privacy and security of the personal and business data we process. This Privacy Policy explains how we collect, use, store, and safeguard information in compliance with the General Data Protection Regulation (GDPR).")}
              </p>
              <p>
              {tr("By using the PayLTR platform, you acknowledge that you have read and understood this Privacy Policy.")}
              </p>
            </section>

            <section id="data-controller-contact-information" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("Data Controller & Contact Information")}</h2>
              <div className="flex gap-2 mt-2">
              📧 <Link href="mailto:support@payltr.com">support@payltr.com</Link>
              </div>
              <div className="flex gap-2 mt-2">
              📞 <Link href="tel:+31684925325">+31 6 84925325</Link>
              </div>
            </section>

            <section id="categories-of-data-we-collect" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("Categories of Data We Collect")}</h2>
              <div className="flex flex-col gap-0 mt-5">
                <p><b>{tr("A. Personal Data")}</b></p>
                <ul className={styles.bullets}>
                  <li>{tr("Name of contact person")}</li>
                  <li>{tr("Email address")}</li>
                  <li>{tr("Phone number")}</li>
                  <li>{tr("KvK number & company details")}</li>
                </ul>
              </div>
              <div className="flex flex-col gap-0 mt-5">
                <p><b>{tr("B. Financial Data")}</b></p>
                <ul className={styles.bullets}>
                  <li>{tr("Bank transactions")}</li>
                  <li>{tr("Account balances")}</li>
                  <li>{tr("Account identifiers")}</li>
                  <li>{tr("Payment behavior")}</li>
                </ul>
              </div>
              <div className="flex flex-col gap-0 mt-5">
                <p><b>{tr("C. Application Data")}</b></p>
                <ul className={styles.bullets}>
                  <li>{tr("Requested loan amount")}</li>
                  <li>{tr("Cashflow information")}</li>
                  <li>{tr("Purpose of financing")}</li>
                </ul>
              </div>
              <div className="flex flex-col gap-0 mt-5">
                <p><b>{tr("D. Technical Data")}</b></p>
                <ul className={styles.bullets}>
                  <li>{tr("IP address")}</li>
                  <li>{tr("Browser agent")}</li>
                  <li>{tr("Device usage data")}</li>
                  <li>{tr("Cookies")}</li>
                </ul>
              </div>
            </section>

            <section id="purpose-of-data-processing" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("Purpose of Data Processing")}</h2>
              <p>
              {tr("We process information for the following lawful purposes:")}
              </p>
              <ul className={styles.bullets}>
               <li>{tr("Creditworthiness assessment")}</li>
                <li>{tr("Performing a pre-scan prior to loan forwarding")}</li>
                <li>{tr("Facilitating financial data retrieval via Ponto (PSD2)")}</li>
                <li>{tr("Transferring applications to our financing partner")}</li>
                <li>{tr("Providing customer support")}</li>
                <li>{tr("Platform security and fraud prevention")}</li>
                <li>{tr("Compliance with legal obligations")}</li>
              </ul>
              <p>{tr("All processing is based on Article 6 GDPR:")}</p>
              <ul className={styles.bullets}>
                <li>{tr("6(1)(b): performance of a contract")}</li>
                <li>{tr("6(1)(c): legal obligation")}</li>
                <li>{tr("6(1)(f): legitimate interest")}</li>
                <li>{tr("6(1)(a): explicit consent (PSD2 bank access)")}</li>
              </ul>
            </section>

            <section id="data-sharing" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("Data Sharing")}</h2>
              <p>{tr("We share data exclusively with:")}</p>

              <div className="flex flex-col gap-1 mt-2">
                <p><b>{tr("A. Ponto (Open Banking provider)")}</b></p>
                <p>{tr("For secure financial data retrieval.")}</p>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <p><b>{tr("B. Financing Partner (Qred)")}</b></p>
                <p>{tr("Only after completion of the pre-scan and with user consent.")}</p>
              </div>

              <div className="flex flex-col gap-1 mt-2">
                <p><b>{tr("C. Technical infrastructure providers")}</b></p>
                <p>{tr("(e.g., hosting, CRM, analytics) and all GDPR-compliant and bound by strict processing agreements.")}</p>
              </div>

              <p>{tr("We never sell or rent data.")}</p>
            </section>

            <section id="international-transfers" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("International Transfers")}</h2>
              <p>{tr("Where data is transferred outside the EEA, PayLTR ensures full GDPR compliance via:")}</p>
              <ul className={styles.bullets}>
                <li>{tr("Standard Contractual Clauses (SCCs)")}</li>
                <li>{tr("Adequacy decisions")}</li>
                <li>{tr("Additional safeguards")}</li>
              </ul>
            </section>

            <section id="data-retention" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("Data Retention")}</h2>
              <p>{tr("We retain data only as long as strictly necessary:")}</p>
              <ul className={styles.bullets}>
                <li>{tr("Application data: Up to 12 months")}</li>
                <li>{tr("Financial/PSD2 data: Up to 120 days unless required for compliance")}</li>
                <li>{tr("Contractual records: Up to 7 years (legal obligation)")}</li>
              </ul>
              <p>{tr("Users may request deletion at any time.")}</p>
            </section>

            <section id="user-rights-under-gdpr" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("User Rights under GDPR")}</h2>
              <p>{tr("You have the right to:")}</p>
              <ul className={styles.bullets}>
                <li>{tr("Access your data")}</li>
                <li>{tr("Correct inaccuracies")}</li>
                <li>{tr("Request deletion")}</li>
                <li>{tr("Restrict processing")}</li>
                <li>{tr("Object to processing")}</li>
                <li>{tr("Request data portability")}</li>
                <li>{tr("Withdraw consent")}</li>
              </ul>
              <p>{tr("Requests can be sent to support@payltr.eu.")}</p>
            </section>

            <section id="security-measures" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("Security Measures")}</h2>
              <p>{tr("PayLTR applies:")}</p>
              <ul className={styles.bullets}>
                <li>{tr("TLS 1.3 encryption")}</li>
                <li>{tr("Multi-layer access controls")}</li>
                <li>{tr("Encrypted secrets storage")}</li>
                <li>{tr("Pseudonymisation")}</li>
                <li>{tr("Strict role-based access")}</li>
              </ul>
            </section>

            <section id="updates-to-this-policy" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("Updates to This Policy")}</h2>
              <p>{tr("We may update this Privacy Policy from time to time. The most recent version will always be available on our website.")}
              </p>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

