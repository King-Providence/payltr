import Image from "next/image";
import Link from "next/link";
import styles from "./CaseStudyCardGrid.module.css";
import { caseStudyCardList } from "@/utils/caseStudies";

export default function CaseStudyCardGrid() {
  return (
    <section
      className={styles.section}
      aria-label="Case studies"
      data-aos="fade-up"
    >
      <ul className={styles.grid}>
        {caseStudyCardList.map((item, index) => (
          <li key={index} data-aos="flip-left">
            <article className={styles.card}>
              <Link href={item.href} className={styles.cardLink}>
                <div className={styles.imageWrap}>
                  <Image
                    className={styles.image}
                    src={item.image}
                    alt={`${item.title} `}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    unoptimized={item.image?.toLowerCase?.().endsWith(".svg")}
                  />
                </div>
                <div className={styles.body}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.description}>{item.description}</p>
                  <span className={styles.cta}>
                    {item.ctaLabel}
                    <span className={styles.arrow} aria-hidden>
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
