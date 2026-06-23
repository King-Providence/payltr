"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";
import styles from "./HowWeDecide.module.css";
import Image from "next/image";

const MOBILE_MQ = "(max-width: 680px)";

export default function HowWeDecide({ content }) {
  const translatedContent = useTranslatedContent(content);
  const [useSwiper, setUseSwiper] = useState(false);

  function Card({ card, minHeight }) {
    const cardStyle = {
      border: content.flag && "2px solid #04349b",
    };
    if (content.cardHeight && minHeight) {
      cardStyle.minHeight = `max(${minHeight}, ${content.cardHeight})`;
    } else if (content.cardHeight) {
      cardStyle.minHeight = content.cardHeight;
    } else if (minHeight) {
      cardStyle.minHeight = minHeight;
    }

    return (
      <article className={styles.card} style={cardStyle}>
        {card.icon ? (
          <div className={styles.icon} style={{backgroundColor: content.flag && "#04349b"}}>{card.icon}</div>
        ) :
        card.image?
        <div className={styles.icon}>
          <Image src={card.image} alt={card.title} width={100} height={100} className={styles.image} />
        </div>
        : (
          <div className={styles.badge}>{card.number}</div>
        )}
        {card.title ? (
          <h3
            className={styles.title}
            style={content.height ? { minHeight: content.height } : undefined}
          >
            {card.title}
          </h3>
        ) : null}
        {card.body ? <p className={styles.body}>{card.body}</p> : null}
      </article>
    );
  }

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const update = () => setUseSwiper(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const minHeight = content.minHeight;

  return (
    <section
      className={styles.section}
      aria-label={translatedContent.title}
      data-aos="fade-up"
    >
      <div className={styles.inner} data-aos="fade-up">
        <div className={styles.headerWrapper}>
          {translatedContent.label ? (
            <p className={`${styles.kicker} dot-gothic`}>
              {translatedContent.label}
            </p>
          ) : null}
          <h2 className={styles.title}>{translatedContent.title}</h2>
          {translatedContent.subtitle ? (
            <p className={styles.subtitle}>{translatedContent.subtitle}</p>
          ) : null}
        </div>
        {useSwiper ? (
          <div className={styles.swiperWrap} data-aos="fade-up">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={24}
              centeredSlides
              pagination={{ clickable: true }}
              className={styles.swiper}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={translatedContent.cards.length > 1}
            >
              {translatedContent.cards.map((card, index) => (
                <SwiperSlide
                  key={card.number ?? `slide-${index}`}
                  className={styles.slide}
                >
                  <Card card={card} minHeight={minHeight} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div
            className={styles.grid}
            data-aos="fade-up"
            data-cards={translatedContent.cards.length}
            style={{
              gridTemplateColumns: `repeat(${translatedContent.cards.length}, minmax(0, 1fr))`,
            }}
          >
            {translatedContent.cards.map((card, index) => (
              <Card key={index} card={card} minHeight={minHeight} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
