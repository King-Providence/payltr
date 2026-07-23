"use client";

import styles from "./faqs.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";

export default function FAQs({ details, defaultActiveIndex = null, centered = false }) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className={`${styles.FAQsContainer} ${centered ? styles.centered : ""}`}
      data-aos="fade-up"
    >
      <h2 data-aos="fade-up">
        {details.title}
      </h2>

      <div
        className={`${styles.FAQsBoxesContainer} ${centered ? styles.centeredBoxesContainer : ""}`}
        data-aos="fade-up"
      >
        <div className={`${styles.FAQsBoxes} ${centered ? styles.centeredBoxes : ""}`}>
          {details.boxes.map((box, index) => {
            const isActive = activeIndex === index;
            const panelId = `faq-panel-${details.title}-${index}`;
            const buttonId = `faq-button-${details.title}-${index}`;

            return (
              <div
                className={`${styles.FAQsBox} ${isActive ? styles.active : ""}`}
                key={index}
              >
                <button
                  type="button"
                  id={buttonId}
                  className={styles.FAQsBoxHeading}
                  onClick={() => handleClick(index)}
                  aria-expanded={isActive}
                  aria-controls={panelId}
                >
                  <span className={styles.indexBadge}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h6 className={isActive ? styles.activeQuestion : styles.question}>
                    {box.question}
                  </h6>

                  <span className={styles.faqIcon} aria-hidden="true">
                    {isActive ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`${styles.FAQsBoxAnswer} ${isActive ? styles.open : ""}`}
                >
                  <p>{box.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}