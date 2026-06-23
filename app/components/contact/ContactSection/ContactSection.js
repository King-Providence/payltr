import Link from "next/link";
import { FiMail } from "react-icons/fi";
import styles from "./ContactSection.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function ContactSection({ content }) {
  const translatedContent = useTranslatedContent(content);
  if (!translatedContent) return null;

  return (
    <section className={styles.section} aria-labelledby="contact-title">
      <div className={styles.inner}>
        <h1 id="contact-title" className={styles.title}>
          {translatedContent.title}
        </h1>
        <p className={styles.subtitle}>{translatedContent.subtitle}</p>

        <div className={styles.card}>
          <div className={styles.emailRow}>
            <span className={styles.iconWrap} aria-hidden="true">
              <FiMail size={22} strokeWidth={2} />
            </span>
            <div className={styles.emailBlock}>
              <h2 className={styles.emailHeading}>{translatedContent.emailSupportHeading}</h2>
              <a className={styles.emailLink} href={`mailto:${content.email}`}>
                {translatedContent.email}
              </a>
            </div>
          </div>

          <hr className={styles.divider} />

          <p className={styles.disclaimer}>
            <span className="pl-[3px]">{translatedContent.disclaimerBeforeLinks}</span>
            <Link className={styles.inlineLink} href={translatedContent.privacyHref}>
              {translatedContent.privacyLabel}
            </Link>
            <span className="pl-[3px]">{content.betweenLinks}</span>
            <Link className={styles.inlineLink} href={translatedContent.termsHref}>
              {translatedContent.termsLabel}
            </Link>
            <span className="pl-[3px]">{translatedContent.disclaimerAfterLinks}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
