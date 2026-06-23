import Image from "next/image";
import styles from "./OpenBankingSection.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function OpenBankingSection({ content }) {
  const translatedContent = useTranslatedContent(content);
  return (
    <section className={styles.section} aria-label="Open Banking">
      {
        translatedContent.map((item, index) => (
          <div className={styles.grid} key={index} style={{flexDirection: index % 2 === 0 ? "row-reverse" : "row"}}  data-aos="fade-up" data-aos-delay={index * 100}>
            <div className={styles.imageCard} data-aos={(index % 2 === 0)?"fade-left":"fade-right"} data-aos-delay={index * 100}>
              <div className={styles.imageInner}>
                <Image
                  src={item.image}
                  alt={item.title || "Open Banking"}
                  className={styles.image}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 980px) 90vw, 520px"
                />
              </div>
            </div>

            <div className={styles.textCard} data-aos={(index % 2 === 0)?"fade-right":"fade-left"} data-aos-delay={index * 100}>
              <h2 className={styles.title}>{item.title}</h2>
              {item.subtitle && <div className={styles.subtitle}>{item.subtitle}</div>}
              <p className={styles.body}>{item.body}</p>
              {item.list && (
                <div className={styles.listContainer}>
                {item.list?.map((list, index) => (
                  <div key={index} className={styles.listItem}>
                    {list?.icon && <div className={styles.listIcon}>{list?.icon}</div>}
                    <div className={styles.listTextBlock}>
                      {list?.title && <div className={styles.listTitle}>{list?.title}</div>}
                      {list?.content != null && list?.content !== "" && (
                        <div className={styles.listBody}>{list.content}</div>
                      )}
                    </div>
                  </div>
                ))}
                </div>
              ) }
            </div>
          </div>
        ))
      }
    </section>
  );
}

