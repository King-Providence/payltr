"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./HowItWorksHeroMain.module.css";
import Link from "next/link";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function HowItWorksHeroMain({ content }) {
  const translatedContent = useTranslatedContent(content);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    if (isInView) {
      const play = video.play();
      if (play !== undefined) play.catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <>
      <section
        ref={sectionRef}
        className={styles.hero}
        style={{ overflow: "hidden", isolation: "isolate" }}
      >
        <div className={styles.inner} >          
          <div className={styles.right}>
            {content.video ? (
              <div className={styles.mediaFrame}>
                <video
                  ref={videoRef}
                  className={styles.heroVideo}
                  src={content.video}
                  poster={content.image}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={translatedContent.title}
                />
              </div>
            ) : (
              <div className={styles.mediaFrame}>
                <Image
                  src={content.image}
                  alt={translatedContent.title}
                  fill
                  className={styles.heroImage}
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
            )}
          </div>
          <div className={styles.left} data-aos="zoom-in" data-aos-delay={200}>
            {content.subtitle && (<div className={styles.topLabel}>
                {content.icon && <span className="text-xl">{content.icon}</span> }
                <span>{translatedContent.subtitle}</span>
              </div>
            )}

            <h1 className={styles.title}>{translatedContent.title}</h1>

            <p className={styles.subtitle}>
              {translatedContent.description}
            </p>

    
            {translatedContent.lists && <div className={styles.lists}>
              {translatedContent.lists.map((list, index) => (
                <div className={styles.list} key={index}>
                  <span className={styles.icon}></span>
                  <span className={styles.text}>{list}</span>
                </div>
              ))}
            </div>}

            {translatedContent.buttonText && <Link href={translatedContent.buttonLink} className={styles.cta} style={{textTransform:"uppercase"}} type="button">
              {translatedContent.buttonText}
            </Link>}
          </div>
        </div>
      </section>
    </>
  );
}

