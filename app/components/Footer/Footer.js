"use client";

import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const FOOTER_COLUMNS = [
  [
    { label: "HOME", href: "/" },
    { label: "PARTNERS", href: "/partners" },
    { label: "COMPANY", href: "/company" },
    { label: "HOW IT WORKS", href: "/how-it-works" },
    { label: "CONTACT US", href: "/contact" },
  ],

  [
    { label: "FAQ", href: "/faq" },
    { label: "COOKIE POLICY", href: "/cookiebeleid" },
    { label: "PRIVACY POLICY", href: "/privacy-policy" },
    { label: "TERMS OF SERVICE", href: "/terms" },
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
        <div className={styles.brandCol}>
          <div className={styles.logoMark} aria-hidden="true">
            <Image
              src="/assets/footerLogo.svg"
              alt="PayLTR"
              width={1400}
              height={320}
              className={styles.logoImage}
              priority={false}
            />
          </div>

          <div className={styles.legalBlock}>
            <p className={styles.slogan}>Grow now, repay later.</p>

            <p className={styles.businessInfo}>
              PayLTR — Gevestigd in Rotterdam, Nederland
              <br />
              KvK-nummer: 98830309
              <br />
              E-mail:{" "}
              <a className={styles.legalLink} href="mailto:info@payltr.eu">
                info@payltr.eu
              </a>{" "}
              | Tel:{" "}
              <a className={styles.legalLink} href="tel:+31684925325">
                +31 684 925 325
              </a>
            </p>
          </div>
        </div>

        <nav className={styles.columns} aria-label="Footer navigation">
          {FOOTER_COLUMNS.map((column, columnIndex) => (
            <div className={styles.column} key={columnIndex}>
              <div className={styles.pillStack}>
                {column.map((link) => (
                  <PillLink
                    key={link.label}
                    label={link.label}
                    href={link.href}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}