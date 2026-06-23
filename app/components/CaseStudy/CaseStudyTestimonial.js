import styles from "./caseStudyTestimonial.module.css";
import Image from "next/image";
import { IoStar } from "react-icons/io5";


export default function CaseStudyTestimonial({content}) {
  return (
    <section className={styles.section} aria-label="Customer testimonial" data-aos="fade-up">
      <div className={styles.inner} data-aos="fade-up">
        <div className={styles.card} data-aos="zoom-in">
          <div className={styles.header}>
            <div 
            className={styles.iconBox}
             aria-hidden>
              <Image src="/assets/case-icon.png" alt="quote" width={50} height={50} />
            </div>
          </div>

          <div className={styles.quoteBlock}>
            <blockquote className={styles.quote}>
              {content.content}
            </blockquote>
          </div>

          <div className={styles.footer}>
            <div className={styles.author}>
              <p className={styles.authorRole}>{content.authorRole}</p>
              <p className={styles.authorMeta}>{content.author}</p>
            </div>
            <div className={styles.stars}>
              {Array.from({ length: 5 }, (_, i) => (
                <IoStar key={i} className={styles.star} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
