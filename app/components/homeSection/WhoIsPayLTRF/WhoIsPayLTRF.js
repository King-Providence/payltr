"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./whoIsPayLTRF.module.css";

export default function WhoIsPayLTRF() {
  const content = ["Services","E-commerce","Construction","Wholesale"];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    if (!sectionNode) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionNode);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.animate : ""}`}
      aria-label="Embedded finance statement"
    >
      <div className={styles.inner}>
        <h3 className={styles.kicker}>Who is PayLTR for?</h3>
        <h3 className={styles.kicker}></h3>
        <h2 className={styles.title}>
          {content.map((item, index) => (
            <span
              className={styles.lineWrap}
              key={item}
              style={{
                perspective: "1200px",
                display: "inline-block",
                transformStyle: "preserve-3d",
              }}
            >
              <span
                className={styles.line}
                style={{
                  ...(isVisible
                    ? {}
                    : {
                        transform:
                          "translateY(125%) translateZ(-500px) rotateX(68deg) rotateY(-18deg) scale(0.82)",
                        opacity: 0,
                        filter: "blur(12px)",
                      }),
                  animationName: isVisible ? "liberisLineReveal" : "none",
                  animationDuration: "1280ms",
                  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  animationFillMode: "both",
                  animationDelay: `${0.1 + index * 0.12}s`,
                  transformOrigin: "50% 88%",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  willChange: "transform, opacity, filter",
                }}
              >
                {item}
                {index < content.length - 1 ? "." : null}
              </span>
            </span>
          ))}
        </h2>
        <p className={styles.description}>Purpose-built for European small businesses in high-volume sectors</p>
      </div>

      <style jsx>{`
        /* Liberis-style hero: lines rise from below, tilt on X, slight Y, depth on Z, blur clears */
        @keyframes liberisLineReveal {
          0% {
            transform: translateY(125%) translateZ(-500px) rotateX(68deg)
              rotateY(-18deg) scale(0.82);
            opacity: 0;
            filter: blur(12px);
          }
          38% {
            opacity: 1;
            filter: blur(2px);
          }
          70% {
            transform: translateY(-5%) translateZ(42px) rotateX(-9deg)
              rotateY(5deg) scale(1.02);
            opacity: 1;
            filter: blur(0);
          }
          100% {
            transform: translateY(0) translateZ(0) rotateX(0deg) rotateY(0deg)
              scale(1);
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}

