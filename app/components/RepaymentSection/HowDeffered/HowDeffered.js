"use client";

import Image from "next/image";
import styles from "./HowDeffered.module.css";

export default function HowDeffered({ content }) {
  return (
    <section className={styles.section} aria-label="Repayment terms">
      {
        content.map((item, index) => (
          <div className={styles.grid} key={index} style={{flexDirection: index % 2 === 0 ? "row-reverse" : "row"}}  data-aos="fade-up" data-aos-delay={index * 100}>
            <div className={styles.imageCard} data-aos={(index % 2 === 0)?"fade-left":"fade-right"} data-aos-delay={index * 100}>
              <div className={styles.imageInner}>
                <Image
                  src={item.image}
                  alt={item.title || "Repayment terms"}
                  className={styles.image}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 980px) 90vw, 540px"
                />
              </div>
            </div>

            <div className={styles.textCard} data-aos={(index % 2 === 0)?"fade-right":"fade-left"} data-aos-delay={index * 100}>
              <h2 className={styles.title}>{item?.title}</h2>
              {item?.subtitle && <div className={styles.subtitle}>{item?.subtitle}</div>}
              <p className={styles.body}>{item?.body}</p>
              {item?.list && (
                <div className={styles.listContainer}>
                {item?.list?.map((list, index) => (
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

              {
                item?.keypoints && (
                  <div className={styles.keypointsContainer}>
                    {item?.keypoints?.map((keypoint, index) => (
                      <div key={index} className={styles.keypointGroup}>
                        <h3 className={styles.keyPointsTitle}>{keypoint?.title}</h3>
                        <ul className={styles.keypoints}>
                          {keypoint?.points?.map((point, pointIndex) => (
                            <li key={pointIndex} className={styles.keypointItem}>
                              {point?.content}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )
              }
              {
                item?.newList && (
                  <div className={styles.newListContainer}>
                    {item?.newList?.map((newList, index) => (
                      <div key={index} className={styles.newListItem}>
                        <div className={styles.newListIcon}></div>
                        <div className={styles.newListContent}>{newList?.content}</div>
                      </div>
                    ))}
                  </div>
                )
              }

              {item?.lastContent && <div className={styles.lastContent}>{item?.lastContent}</div>}
            </div>
          </div>
        ))
      }
    </section>
  );
}

