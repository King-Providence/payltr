"use client"
import styles from "./faqs.module.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

export default function FAQs({ details, defaultActiveIndex = null, centered = false }) {
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

    const handleClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return(
        <>
            <div className={`${styles.FAQsContainer} ${centered ? styles.centered : ""}`} data-aos="fade-up">
                <h2 data-aos="fade-up"><span>{details.span}</span> {details.title}</h2>
                <div className={`${styles.FAQsBoxesContainer}`}  data-aos="fade-up">
                    <div className={`${styles.FAQsBoxes}`}>
                        {details.boxes.map((box, index) => (
                        <div 
                            className={`${styles.FAQsBox} ${activeIndex === index ? styles.active : ''}`} 
                            onClick={() => handleClick(index)}
                            key={index}
                        >
                            <div className={`${styles.FAQsBoxContent}`}>
                                <div className={`${styles.FAQsBoxHeading}`}>
                                    <h6 style={{color:activeIndex === index ? "#4263EB" : "#000000"}}>{box.question}</h6>
                                    <div className={styles.faqIcon}>
                                        {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                    </div>
                                </div>
                                <div className={`${styles.FAQsBoxAnswer} ${activeIndex === index ? styles.open : ''}`}>
                                    <p>{box.content}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}