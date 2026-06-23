"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";
import styles from "./trustedByBusinesses.module.css";

const MOBILE_MQ = "(max-width: 680px)";

/** Why-it-matters: padded gray mockup panel + caption below (no outer card border). */
function Card({ card, index, minHeight }) {
  const [imgFailed, setImgFailed] = useState(false);
  const stepNumber = card.number ?? String(index + 1);
  const showImage = Boolean(card.image && !imgFailed);

  return (
    <article
      className={styles.cardWhy}
      style={minHeight ? { minHeight } : undefined}
    >
      <div
        className={`${styles.graphicPanel} ${showImage ? styles.graphicPanelMockup : styles.graphicPanelStub}`}
      >
        {showImage ? (
          <div
            className={`${styles.graphicImageWrap} ${styles.graphicImageWrapPad}`}
          >
            <Image
              src={card.image}
              alt=""
              fill
              className={`${styles.graphicImage} ${styles.graphicImageContain}`}
              sizes="(max-width: 680px) 100vw, (max-width: 1140px) 50vw, 25vw"
              onError={() => setImgFailed(true)}
            />
          </div>
        ) : card.icon ? (
          <div className={styles.graphicIcon}>{card.icon}</div>
        ) : (
          <span className={styles.graphicFallback} aria-hidden>
            {stepNumber}
          </span>
        )}
      </div>

      <div className={styles.cardText}>
        {card.title ? (
          <>
            <p className={styles.cardTitle}>
              <span className={styles.captionNumber}>{stepNumber}.</span>{" "}
              {card.title}
            </p>
            {card.body ? <p className={styles.cardBody}>{card.body}</p> : null}
          </>
        ) : card.body ? (
          <p className={styles.cardTitle}>
            <span className={styles.captionNumber}>{stepNumber}.</span>{" "}
            {card.body}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export default function TrustedByBusinesses({ content }) {
  const translatedContent = useTranslatedContent(content);
  const [useSwiper, setUseSwiper] = useState(false);

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
        {translatedContent.titleParts ? (
          <p
            className={`${styles.kicker} ${styles.kickerWhy} dot-gothic`}
            aria-label={translatedContent.title}
          >
            <span className={styles.kickerEmphasis}>
              {translatedContent.titleParts.emphasis}
            </span>
            {translatedContent.titleParts.rest}
          </p>
        ) : (
          <p className={`${styles.kicker} dot-gothic`}>
            {translatedContent.title}
          </p>
        )}

        {useSwiper ? (
          <div className={styles.swiperWrap} data-aos="fade-up">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={24}
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
                  key={card.number ?? `card-${index}`}
                  className={styles.slide}
                >
                  <Card card={card} index={index} minHeight={minHeight} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className={styles.grid} data-aos="fade-up">
            {translatedContent.cards.map((card, index) => (
              <Card
                key={card.number ?? `card-${index}`}
                card={card}
                index={index}
                minHeight={minHeight}
              />
            ))}
          </div>
        )}

        {translatedContent.lastContent && (
          <p className={styles.lastContent}>{translatedContent.lastContent}</p>
        )}
      </div>
    </section>
  );
}
