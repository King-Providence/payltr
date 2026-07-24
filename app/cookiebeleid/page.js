"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";


const toc = [
  { id: "introduction", label: "1. Introduction" },
  { id: "what-are-cookies", label: "2. What Are Cookies?" },
  { id: "types-of-cookies-we-use", label: "3. Types of Cookies We Use" },
  { id: "third-party-cookies", label: "4. Third-Party Cookies" },
  { id: "cookie-retention-periods", label: "5. Cookie Retention Periods" },
  { id: "cookie-consent-withdrawal", label: "6. Cookie Consent & Withdrawal" },
  { id: "managing-cookies", label: "7. Managing Cookies in Your Browser" },
  { id: "contact-us", label: "8. Contact Us" },
];

export default function CookiesSettingsPage() {
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
          <h1 className={`${styles.heroTitle}`} data-aos="zoom-in">{tr("Cookie Policy")}</h1>
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

          <main className={styles.article} aria-label={tr("Cookie policy content")}>
            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("1. Introduction")}</h2>
              
              <p>
                {tr('This Cookie Policy explains how PayLTR ("we", "us", "our") uses cookies and similar tracking technologies on the PayLTR platform.')}
              </p>
              <p>
                {tr("By using our website, you agree that certain cookies may be stored on your device unless you disable them.")}
              </p>
              <p>
  {tr(
    "You may modify your cookie preferences at any time via the Cookie Settings link in the footer or by contacting us at support@payltr.eu."
  )}
</p>
            </section>

            <section id="what-are-cookies" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("2. What Are Cookies?")}</h2>
              <p>{tr("Cookies are small text files placed on your device when you visit a website.")}</p>
              <p>
                {tr("They allow the website to recognise your device and improve your experience.")}
              </p>
              <p>{tr("Cookies can be:")}</p>
              <ul className={styles.bullets}>
                <li>{tr("Session cookies (deleted when you close the browser)")}</li>
                <li>{tr("Persistent cookies (stored until they expire or are removed)")}</li>
                <li>{tr("First-party cookies (set by PayLTR)")}</li>
                <li>{tr("Third-party cookies (set by external providers)")}</li>
              </ul>
            </section>

            <section id="types-of-cookies-we-use" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("3. Types of Cookies We Use")}</h2>
              <div className="flex flex-col gap-1 mt-5">
                <p>
                  <b>{tr("A. Strictly Necessary Cookies")}</b>
                </p>
                <p>
                  {tr("These cookies are essential to operate our website and cannot be disabled. They include:")}
                </p>
                <ul className={styles.bullets}>
                  <li>{tr("Security & session management")}</li>
                  <li>{tr("Authentication tokens")}</li>
                  <li>{tr("Form submission tools")}</li>
                  <li>{tr("Load balancing and routing")}</li>
                </ul>
                <p>{tr("Without these cookies, the platform may not function correctly.")}</p>
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <p>
                  <b>{tr("B. Functional Cookies")}</b>
                </p>
                <p>
                  {tr("These cookies enhance usability and allow certain features to operate, such as:")}
                </p>
                <ul className={styles.bullets}>
                  <li>{tr("Saving language preferences")}</li>
                  <li>{tr("Remembering login state")}</li>
                  <li>{tr("Autocomplete fields")}</li>
                </ul>
                <p>
                  {tr("These cookies may be disabled, but some features may become unavailable.")}
                </p>
              </div>

              <div className="flex flex-col gap-1 mt-5">
                <p><b>{tr("C. Analytical & Performance Cookies")}</b></p>
                <p>
                  {tr("Used to understand how users interact with PayLTR so we can improve the platform.")}
                </p>
                <p>{tr("We use tools such as:")}</p>
                <ul className={styles.bullets}>
                  <li>{tr("Google Analytics (IP anonymised)")}</li>
                  <li>{tr("Built-in analytics from Replit hosting (if used)")}</li>
                  <li>{tr("Other GDPR-compliant analytics services")}</li>
                </ul>
                <p>{tr("We do not track personal behaviour outside our platform.")}</p>
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <p>
                  <b>{tr("D. Marketing & Tracking Cookies")}</b>
                </p>
                <p>{tr("Used only with explicit consent. These include:")}</p>
                <ul className={styles.bullets}>
                  <li>{tr("LinkedIn Insights Tag")}</li>
                  <li>{tr("Meta Pixel")}</li>
                  <li>{tr("Google Ads conversions")}</li>
                  <li>{tr("Email marketing tags (MailerLite or similar)")}</li>
                </ul>
                <p>
                  {tr("These cookies help us understand the performance of marketing campaigns. They are never activated without consent.")}
                </p>
              </div>
            </section>

            <section id="third-party-cookies" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("4. Third-Party Cookies")}</h2>
              <p>
  {tr(
    "Third-party services may store cookies on your device when used within the PayLTR platform, including:"
  )}
</p>

<ul className={styles.bullets}>
  <li>
    <strong>{tr("Ponto (Isabel NV)")}</strong>{" "}
    {tr(
      "— PSD2 open banking authentication. Used during bank account verification in the application flow. Ponto is a regulated TPP under PSD2 and is GDPR compliant."
    )}
  </li>

  <li>
    <strong>{tr("Qeld")}</strong>{" "}
    {tr(
      "— Our licensed funding partner. Qeld may set session-level cookies during the credit assessment and application handover flow."
    )}
  </li>

  <li>
    <strong>{tr("Mollie")}</strong>{" "}
    {tr(
      "— Payment processor for SEPA Direct Debit mandate management and iDEAL disbursement. Mollie is PCI DSS compliant and GDPR compliant."
    )}
  </li>

  <li>
    <strong>{tr("Google Analytics")}</strong>{" "}
    {tr(
      "— Website analytics (IP anonymised). Used to understand platform usage patterns."
    )}
  </li>

  <li>
    <strong>{tr("LinkedIn Insights Tag")}</strong>{" "}
    {tr(
      "— Only activated with explicit marketing cookie consent. Used to measure B2B campaign performance."
    )}
  </li>

  <li>
    <strong>{tr("Meta Pixel")}</strong>{" "}
    {tr(
      "— Only activated with explicit marketing cookie consent."
    )}
  </li>
</ul>

<p>
  {tr(
    "We do not use Qred, Stripe, or any other payment processors not listed above. All third-party providers are contractually bound to GDPR compliance requirements."
  )}
</p>
            </section>

            <section id="cookie-retention-periods" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("5. Cookie Retention Periods")}</h2>
              <p>{tr("Retention depends on cookie type:")}</p>
              <ul className={styles.bullets}>
                <li>{tr("Strictly necessary: until session ends")}</li>
                <li>{tr("Functional: up to 12 months")}</li>
                <li>{tr("Analytics: 14 to 26 months")}</li>
                <li>{tr("Marketing: up to 12 months (only with consent)")}</li>
              </ul>
              <p>{tr("Users may delete cookies manually at any time.")}</p>
            </section>

            <section id="cookie-consent-withdrawal" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("6. Cookie Consent & Withdrawal")}</h2>
              <p>{tr("When you first visit our website:")}</p>
              <ul className={styles.bullets}>
                <li>{tr("A cookie banner will appear")}</li>
                <li>
                  {tr("You may accept all cookies, reject all cookies, or manage preferences")}
                </li>
                <li>{tr("Only strictly necessary cookies load by default")}</li>
              </ul>
              <p>{tr("You can withdraw consent at any time via the Cookie Settings link.")}</p>
            </section>

            <section id="managing-cookies" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("7. Managing Cookies in Your Browser")}</h2>
              <p>{tr("You may block or delete cookies through browser settings.")}</p>
              <p>{tr("Helpful links:")}</p>
              <ul className={styles.bullets}>
                <li>
                  {tr("Chrome: chrome://settings/cookies")}
                </li>
                <li>{tr("Safari: Preferences → Privacy")}</li>
                <li>
                  {tr("Firefox: about:preferences#privacy")}
                </li>
                <li>
                  {tr("Edge: edge://settings/content/cookies")}
                </li>
              </ul>
              <p>{tr("Disabling essential cookies may limit website functionality.")}</p>
            </section>

            <section id="contact-us" className={styles.section}>
              <h2 className={styles.sectionTitle}>{tr("8. Contact Us")}</h2>
              <p>
  {tr(
    "For questions regarding this Cookie Policy or your privacy rights, contact:"
  )}
</p>

<p>
  📧{" "}
  <Link href="mailto:support@payltr.eu">
    support@payltr.eu
  </Link>
</p>

<p>
  📧{" "}
  <Link href="mailto:info@payltr.eu">
    info@payltr.eu
  </Link>
</p>

<p>
  📞{" "}
  <Link href="tel:+31684925325">
    +31 6 84 92 53 25
  </Link>
</p>

<p>
  {tr(
    "PayLTR, 3081 JH Rotterdam, Zuid-Holland, Netherlands"
  )}
</p>

<p>
  {tr("KvK: 98830309")}
</p>

<p>
  {tr("This Cookie Policy was last updated: July 2026")}
</p>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

