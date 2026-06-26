"use client";

import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const FOOTER_COLUMNS = [
  [
    { label: "HOME", href: "/" },
    { label: "PARTNERS", href: "/partners" },
    { label: "COMPANY", href: "/company" },
  ],
  [
    { label: "CONTACT US", href: "/contact" },
    { label: "HOW IT WORKS", href: "/how-it-works" },
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

        <nav className={styles.columns} aria-label="Footer navigation">
          {FOOTER_COLUMNS.map((column, columnIndex) => (
            <div className={styles.column} key={columnIndex}>
              <div className={styles.pillStack}>
                {column.map((link) => (
                  <PillLink key={link.label} label={link.label} href={link.href} />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
