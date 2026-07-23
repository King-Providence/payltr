"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";
import styles from "./BenifitsBusinesses.module.css";

const MOBILE_MQ = "(max-width: 680px)";

function EcosystemCard({ card }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article className={styles.ecosystemCard}>
      <div className={styles.ecosystemIconWrap}>
        {card.image && !imgFailed ? (
          <Image
            src={card.image}
            alt=""
            width={48}
            height={48}
            className={styles.ecosystemIcon}
            onError={() => setImgFailed(true)}
          />
        ) : null}
      </div>
      <p className={styles.ecosystemLabel}>{card.title}</p>
    </article>
  );
}

function Card({ card, index, minHeight, showCardNumbers }) {
  const [imgFailed, setImgFailed] = useState(false);
  const stepNumber = card.number ?? String(index + 1).padStart(2, "0");
  const showImage = Boolean(card.image && !imgFailed);
  const usePhotoCover = Boolean(card.title && showImage);
  const showBadge = showCardNumbers !== false;

  return (
    <article
      className={styles.card}
      style={minHeight ? { minHeight } : undefined}
    >
      {showBadge ? (
        <span className={styles.cardBadge} aria-hidden="true">
          {stepNumber}
        </span>
      ) : null}

      {showImage ? (
        <div
          className={`${styles.graphicBox} ${usePhotoCover ? styles.graphicBoxCover : styles.graphicBoxContain}`}
        >
          <div
            className={`${styles.graphicImageWrap} ${usePhotoCover ? styles.graphicImageWrapFill : styles.graphicImageWrapPad}`}
          >
            <Image
              src={card.image}
              alt=""
              fill
              className={`${styles.graphicImage} ${usePhotoCover ? styles.graphicImageCover : styles.graphicImageContain}`}
              sizes="(max-width: 680px) 100vw, (max-width: 1140px) 50vw, 25vw"
              onError={() => setImgFailed(true)}
            />
          </div>
        </div>
      ) : (
        <>
          <div className={styles.iconWrap}>
            {card.icon ? (
              <span className={styles.icon}>{card.icon}</span>
            ) : (
              <span className={styles.iconFallback} aria-hidden>
                {stepNumber}
              </span>
            )}
          </div>
          <span className={styles.iconUnderline} aria-hidden="true" />
        </>
      )}

      <div className={styles.cardText}>
        {card.title ? <p className={styles.cardTitle}>{card.title}</p> : null}
        {card.body ? <p className={styles.cardBody}>{card.body}</p> : null}
      </div>
    </article>
  );
}

function EcosystemGrid({ translatedContent }) {
  return (
    <section
      className={styles.ecosystemSection}
      aria-labelledby="ecosystem-grid-heading"
      data-aos="fade-up"
    >
      <div className={styles.ecosystemInner}>
        <header className={styles.ecosystemHeader} data-aos="fade-up">
          <p className={styles.ecosystemKicker}>{translatedContent.kicker}</p>
          <h2 id="ecosystem-grid-heading" className={styles.ecosystemTitle}>
            {translatedContent.title}
          </h2>
        </header>

        <div className={styles.ecosystemGrid} data-aos="fade-up">
          {translatedContent.cards.map((card, index) => (
            <EcosystemCard key={card.title ?? `ecosystem-${index}`} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BenifitsBusinesses({ content }) {
  const translatedContent = useTranslatedContent(content);
  const [useSwiper, setUseSwiper] = useState(false);
  const isEcosystem = content?.variant === "ecosystem";

  useEffect(() => {
    if (isEcosystem) return undefined;

    const mq = window.matchMedia(MOBILE_MQ);
    const update = () => setUseSwiper(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [isEcosystem]);

  if (isEcosystem) {
    return <EcosystemGrid translatedContent={translatedContent} />;
  }

  const minHeight = content.minHeight;
  const showCardNumbers = translatedContent.showCardNumbers;

  return (
    <section
      className={styles.section}
      aria-label={translatedContent.title}
      data-aos="fade-up"
    >
      <div className={styles.inner} data-aos="fade-up">
        <div className={styles.sectionHeading}>
          <span className={styles.sectionBadge}>The problem</span>

          <h2 className={styles.sectionTitle}>{translatedContent.title}</h2>

          {translatedContent.lastContent && (
            <p className={styles.sectionSubtitle}>
              {translatedContent.lastContent}
            </p>
          )}
        </div>

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
                  <Card
                    card={card}
                    index={index}
                    minHeight={minHeight}
                    showCardNumbers={showCardNumbers}
                  />
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
                showCardNumbers={showCardNumbers}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}