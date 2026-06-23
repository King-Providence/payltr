import Image from "next/image";
import styles from "./RealWorldScenerio.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function RealWorldScenerio({content}) {
  const translatedContent = useTranslatedContent(content);
  return (
    <section className={styles.section} data-aos="fade-up">
      <div className={styles.backgroundImage}></div>
      <div className={styles.inner} data-aos="fade-up">
        <div className={styles.left} data-aos="fade-right">
          <h2 className={styles.title}>{translatedContent.title}</h2>
           {
            translatedContent.lists &&
            <ul className={styles.list} style={{listStyleType: "disc"}}>{translatedContent.lists.map((list) => (
              <li key={list}>{list}</li>
             ))}</ul>
           }
           
           {translatedContent.parah && <p className={styles.parah}>{translatedContent.parah}</p>}
           {translatedContent.lastContent && <p className={styles.lastContent}>{translatedContent.lastContent}</p>}
        </div>

        <div className={styles.imageWrapper} data-aos="fade-left">
          <Image
            className={styles.image}
            src={content.image}
            alt={translatedContent.title}
            width={400}
            height={300}
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}

