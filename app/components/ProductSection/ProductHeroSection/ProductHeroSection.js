import styles from "./ProductHeroSection.module.css";

export default function ProductHeroSection({content}) {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.backgroundImage} ></div>
        <div className={styles.inner} style={{ zIndex: 12 }}>
          <div className={styles.left} data-aos="fade-up">
            <h1 className={styles.title}>{content.title}</h1>
            <p className={styles.subtitle}>
            {content.description}
            </p>
            {
              content.lists && <div className={styles.lists}>
                {content.lists.map((list, index) => (
                  <div className={styles.list} key={index}>
                    <span className={styles.icon}></span>
                    <span className={styles.text}>{list}</span>
                  </div>
                ))}
              </div>
            }
            {
              content.lastLine && <p className={styles.lastLine}>{content.lastLine}</p>
            }
          </div>
        </div>
      </section>
    </>
  );
}

