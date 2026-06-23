import styles from "./Products.module.css";

export default function Products() {
  return (
    <section className={styles.section} aria-label="Why offer embedded finance">
      <div className={styles.inner}>
        <div className={styles.leftWrap}>
          <div className={styles.leftSticky}>
            <p className={styles.kicker}>WHY OFFER EMBEDDED FINANCE</p>
            <h2 className={styles.title}>
              The future of funding is embedded.
              <br />
              Lead the way.
            </h2>
            <p className={styles.description}>
              58% of SMBs report that their funding needs go unmet. It&apos;s time to break
              the cycle. Fund them forwards with a friction-free funding experience, delivered
              through your own platform.
            </p>
          </div>
        </div>

        <div className={styles.rightWrap}>
          <article className={styles.pointCard}>
            <div className={styles.media} aria-hidden="true" />
            <div className={styles.cardBody}>
              <h3 className={styles.pointTitle}>01. SUPERCHARGE THEIR GROWTH</h3>
              <p className={styles.pointText}>
                Cut fear of rejection and open up real growth with pre-approved funding
                offers. As SMBs thrive, payments increase and transactions through your
                platform soar.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

