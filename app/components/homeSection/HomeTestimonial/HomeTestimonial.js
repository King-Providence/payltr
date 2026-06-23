import styles from "./homeTestimonial.module.css";
import { IoStar } from "react-icons/io5";

export default function HomeTestimonial({ content }) {
  const { quote, attribution } = content;

  return (
    <section
      className={styles.section}
      aria-label="Customer testimonial"
      data-aos="fade-up"
    >
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <div className={styles.accentBar} aria-hidden />
          <blockquote className={styles.body}>
            <p className={styles.quote}>{quote}</p>
            {attribution ? (
              <div className={`${styles.attributionWrapper} flex items-center justify-between gap-2 flex-wrap`}>
                <footer className={styles.attribution}>{attribution}</footer>
                <div className={`${styles.starWrapper} flex items-center justify-center gap-1`}>
                  {
                    Array.from({ length: 5 }).map((_, index) => (
                      <span className={styles.starIcon} key={index}><IoStar className="text-yellow-500" /></span>
                    ))
                  }
                </div>
              </div>
            ) : null}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
