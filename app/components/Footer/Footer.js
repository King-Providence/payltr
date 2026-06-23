"use client";

import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const FOOTER_COLUMNS = [
  [
    { label: "CONTACT US", href: "/contact" },
    { label: "ABOUT US", href: "/company" },
    { label: "CAREERS", href: "/vacatures" },
    { label: "IN THE NEWS", href: "/klantverhalen" },
    { label: "SIGN UP TO NEWSLETTER", href: "/contact" },
  ],
  [
    { label: "PARTNER CASE STUDIES", href: "/klantverhalen" },
    { label: "MERCHANT CASE STUDIES", href: "/klantverhalen" },
    { label: "BLOGS", href: "/veelgestelde-vragen" },
  ],
  [
    { label: "PRIVACY POLICY", href: "/privacybeleid" },
    { label: "COOKIES POLICY", href: "/cookiebeleid" },
    { label: "CUSTOMER FEEDBACK POLICY", href: "/contact" },
    { label: "LEGAL", href: "/terms" },
    { label: "REPRESENTATIVE APR", href: "/kosten-en-tarieven" },
    { label: "MARKETING SUBSTANTIATION", href: "/algemene-voorwaarden" },
  ],
];

function PillLink({ label, href }) {
  return (
    <Link className={styles.pillLink} href={href}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.footerInner}>
        <div className={styles.columns}>
          {FOOTER_COLUMNS.map((column, columnIndex) => (
            <div className={styles.column} key={columnIndex}>
              <div className={styles.pillStack}>
                {column.map((link) => (
                  <PillLink key={link.label} label={link.label} href={link.href} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.logoMark} aria-hidden="true">
          <Image
            src="/assets/footerLogo.svg"
            alt=""
            width={1400}
            height={320}
            className={styles.logoImage}
            priority={false}
          />
        </div>
      </div>
    </footer>
  );
}
