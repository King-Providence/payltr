import Link from "next/link";
import { FiBriefcase } from "react-icons/fi";
import styles from "./CareersSection.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function CareersSection({ content }) {
  const translatedContent = useTranslatedContent(content);
  if (!translatedContent) return null;

  return (
    <section className={styles.section} aria-labelledby="careers-title">
      {/* <div className={styles.backgroundImage}></div> */}
      <div className={styles.inner}>
        <h1 id="careers-title" className={styles.title}>
          {translatedContent.title}
        </h1>
        <p className={styles.subtitle}>{translatedContent.subtitle}</p>

        <div className={styles.card}>
          <div className={styles.openRow}>
            <span className={styles.iconWrap} aria-hidden="true">
              <FiBriefcase size={22} strokeWidth={2} />
            </span>
            <div>
              <h2 className={styles.openHeading}>{translatedContent.openPositionsHeading}</h2>
              <p className={styles.statusText}>{translatedContent.openPositionsStatus}</p>
            </div>
          </div>

          <hr className={styles.divider} />

          <p className={styles.updateText}>{translatedContent.updateNote}</p>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaHeading}>{translatedContent.ctaHeading}</h3>
            <p className={styles.ctaBody}>
              {translatedContent.ctaBodyBeforeEmail}<a className={styles.emailLink} href={`mailto:${translatedContent.ctaEmail}`}>
                {translatedContent.ctaEmail}
              </a>
              .
            </p>
          </div>

          <hr className={styles.divider} />

          <p className={styles.privacy}>
            {translatedContent.privacyDisclaimerBeforePolicy}<Link className={styles.policyLink} href={translatedContent.privacyPolicyHref}>
              {translatedContent.privacyPolicyLabel}
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
