import CaseStudyTestimonial from "./CaseStudyTestimonial";
import styles from "./caseStudyTimeline.module.css";

export default function CaseStudyTimeline({
  steps = [],
  metrics = [],
  testimonial,
}) {
  return (
    <section className={styles.section} aria-label="Case study">
      <div className={styles.inner}>
        <div className={styles.track}>
          <div className={styles.line} aria-hidden />
          <ul className={styles.list}>
            {steps.map((step) => (
              <li key={step.title} className={styles.row}>
                <div className={styles.markerCell} aria-hidden>
                  <span className={styles.marker}>{step.icon ?? null}</span>
                </div>
                <article className={styles.card}>
                  <span className={styles.mobileMarker} aria-hidden />
                  <h2 className={styles.cardTitle}>{step.title}</h2>
                  <p className={styles.cardBody}>{step.body}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {testimonial ? (
        <CaseStudyTestimonial content={testimonial} />
      ) : null}

      {metrics.length > 0 && (
        <div className={styles.pointersContainer}>
          <ul
            className={styles.metricsGrid}
            aria-label="Case study highlights"
          >
            {metrics.map((item, index) => (
              <li
                key={`${item.label}-${index}`}
                className={styles.metricCard} data-aos="zoom-in"
              >
                <span className={styles.metricIcon} aria-hidden >{index + 1}</span>
                <span className={styles.metricLabel}>{item.label}</span>
                <p className={styles.metricValue}>{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
