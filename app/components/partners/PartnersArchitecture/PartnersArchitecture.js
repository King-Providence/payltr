"use client";

import { Fragment } from "react";
import styles from "./partnersArchitecture.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

function ArchBox({ children, size = "wide" }) {
  const sizeClass =
    size === "medium" ? styles.boxMedium : size === "narrow" ? styles.boxNarrow : styles.boxWide;

  return <div className={`${styles.box} ${sizeClass}`}>{children}</div>;
}

function Connector() {
  return <div className={styles.connector} aria-hidden="true" />;
}

export default function PartnersArchitecture({ content }) {
  const translated = useTranslatedContent(content);

  return (
    <section
      className={styles.section}
      aria-labelledby="partners-architecture-title"
    >
      <div className={styles.inner}>
        <h2 id="partners-architecture-title" className={styles.title}>
          {translated.title}
        </h2>

        <div className={styles.flow}>
          {translated.steps.map((step, index) => (
            <Fragment key={`${step.type}-${index}`}>
              {index > 0 && <Connector />}
              {step.type === "split" ? (
                <div className={styles.splitInner}>
                  <ArchBox size="medium">{step.items[0]}</ArchBox>
                  <span className={styles.plus} aria-hidden="true">
                    +
                  </span>
                  <ArchBox size="medium">{step.items[1]}</ArchBox>
                </div>
              ) : (
                <ArchBox size={index === 0 ? "medium" : "wide"}>{step.label}</ArchBox>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
