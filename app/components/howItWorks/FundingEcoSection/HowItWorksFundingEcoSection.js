import Image from "next/image";
import styles from "./fundingEcoSection.module.css";

export default function HowItWorksFundingEcoSection({content}) {
  return (
    <section className={styles.section} data-aos="fade-up">
      <div className={styles.inner} data-aos="fade-up">
        <div className={styles.left} data-aos="fade-right">
          <h2 className={styles.title}>{content.title}</h2>
           {
            content.lists &&
            <ul className={styles.list} style={{listStyleType: "disc"}}>{content.lists.map((list) => (
              <li key={list}>{list}</li>
             ))}</ul>
           }
           
           {content.parah && <p className={styles.parah}>{content.parah}</p>}
           {content.lastContent && <p className={styles.lastContent}>{content.lastContent}</p>}
        </div>

        <div className={styles.imageWrapper} data-aos="fade-left">
          <Image
            className={styles.image}
            src={content.image}
            alt={content.title}
            width={400}
            height={300}
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}

