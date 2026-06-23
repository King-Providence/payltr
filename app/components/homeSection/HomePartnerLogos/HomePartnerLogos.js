import styles from "./HomePartnerLogos.module.css";

export default function HomePartnerLogos() {
  return (
    <section className={styles.section} aria-labelledby="partner-banners-heading" data-aos="fade-up">
      <div className={styles.inner} data-aos="fade-up">
        <div className={styles.content} data-aos="fade-up">
          <h2 id="partner-banners-heading" className={styles.title}>
            Trusted With Our Partners
          </h2>
          <p className={styles.subcopy}>
            Registered in the Netherlands and powered by trusted financial partners.
          </p>
        </div>
        <div className={styles.logosRow} data-aos="fade-up">
          <img src="/assets/1.png" alt="Partner logo 1" className={styles.logo} />
          <img src="/assets/2.png" alt="Partner logo 2" className={styles.logo} />
          <img src="/assets/3.png" alt="Partner logo 3" className={styles.logo} />
        </div>
      </div>
    </section>
  );
}
