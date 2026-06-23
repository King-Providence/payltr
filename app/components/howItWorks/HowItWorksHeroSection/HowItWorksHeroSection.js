"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./howItWorksHero.module.css";
import Link from "next/link";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";
import { TbTrendingUp } from "react-icons/tb";

export default function HowItWorksHeroSection({content}) {
  const translatedContent = useTranslatedContent(content);
  const sectionRef = useRef(null);
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

  return (
    <>
      <section
        ref={sectionRef}
        className={styles.hero}
        style={{ overflow: "hidden", isolation: "isolate" }}
        data-aos="fade-up"
      >
        <div className={styles.backgroundImage} ></div>

        <div className={styles.inner} style={{ zIndex: 12 }} data-aos="fade-up" data-aos-delay={100}>
          <div className={styles.left} style={{width: content.width}} data-aos="fade-right" data-aos-delay={200}>
            {content.subtitle && (<div className={styles.topLabel}>
                {content.icon && <span className="text-xl">{content.icon}</span> }
                <span>{translatedContent.subtitle}</span>
              </div>
            )}
            <div className={styles.labelWrapper}>
            {content.label && (<div className={styles.topLabel}>
               <span className="text-xl"><TbTrendingUp/></span> 
                <span>{translatedContent.label}</span>
              </div>
            )}
            <h1 className={styles.title}>{translatedContent.title}</h1>
            </div>
            {translatedContent.description && (<p className={styles.subtitle}>
              {translatedContent.description}
            </p>)}

            {content.boxList && <div className={styles.boxList}>
              {content.boxList.map((box, index) => (
                <div className={styles.box} key={index}>
                  <span className={styles.boxIcon}></span>
                  <span className={styles.boxText}>{box}</span>
                </div>
              ))}
            </div>}
    
            {translatedContent.lists && <div className={`${styles.lists} ${content.gridCol && styles.gridLists}`}>
              {translatedContent.lists.map((list, index) => (
                <div className={styles.list} key={index}>
                  <span className={styles.icon}></span>
                  <span className={styles.text}>{list}</span>
                </div>
              ))}
            </div>}

            {translatedContent.lastContent && <p className={styles.lastContent}>{translatedContent.lastContent}</p>}

            {translatedContent.buttonText && <Link href={content.buttonLink} className={styles.cta} style={{textTransform:"uppercase"}} type="button">
              {translatedContent.buttonText}
            </Link>}
          </div>

          <div className={styles.right} aria-hidden="true" style={{width: content.width && "500px"}} data-aos="fade-left" data-aos-delay={300}>
              <Image
                src={content.image}
                alt={translatedContent.title}
                width={560}
                height={410}
                loading="lazy"
                unoptimized={Boolean(content.image?.toLowerCase?.().endsWith(".svg"))}
              />
          </div>
        </div>
      </section>
    </>
  );
}

