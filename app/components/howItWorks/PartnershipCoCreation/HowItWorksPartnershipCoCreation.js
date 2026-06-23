"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./howItWorksPartnershipCoCreation.module.css";
import { useTranslatedContent } from "@/src/hooks/useTranslatedContent";

export default function HowItWorksPartnershipCoCreation() {
  const { t } = useTranslation();

  const content = [
    {
      image:"/assets/how-it-works/image1.png",
      title: "You have a business cost today",
      description: "You need to pay for stock, marketing, VAT, tools, or a project expense, but paying it now would squeeze your cashflow.",
    },
    {
      image:"/assets/how-it-works/image2.png",
      title: "PayLTR gives you a payment break",
      description: "Instead of paying immediately, PayLTR lets you pay later. You choose your amount, and see a clear schedule upfront.",
    },
    {
      image:"/assets/how-it-works/image3.png",
      title: "Quick business check (no hassle)",
      description: "You enter your company details and confirm your request. We run a fast pre-scan to make sure the request fits your business profile.",
    },
    {
      image:"/assets/how-it-works/image4.png",
      title: "You get time before payments start",
      description: "If approved, you receive up to 120 days of payment break before any repayment begins. During this 120-day period, a user fee applies — charged by our financing partner.",
    },
    {
      image:"/assets/how-it-works/image5.png",
      title: "Repay over 24 months, interest-free",
      // description: "After the payment break period, you repay in monthly instalments spread over 24 months:",
      description: "After your payment break ends, you repay your financing in 24 equal monthly instalments — at 0% interest. Your monthly amount is fixed from day one, so you always know exactly what to budget for. You can also repay early at any time with no penalty.",
      // lists: ["Month 1-24", "Interest", "Flexibility"],
    },
    {
      image:"/assets/how-it-works/image6.png",
      title: "Keep your business moving",
      description: "You stay liquid, cover essential costs on time, and keep growing without taking on a complex long-term loan. Need to apply? The whole process takes less than 10 minutes online.",
    },
  ];
  const translatedContent = useTranslatedContent(content);

  return (
    <section className={styles.section} aria-label={t("howItWorksPartnership.ariaLabel")} data-aos="fade-up">
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>{t("howItWorksPartnership.journeyTitle")}</h2>
        <p className={styles.headerSubtitle}>{t("howItWorksPartnership.journeySubtitle")}</p>
      </div>
      <div className={styles.container} data-aos="fade-up">
        {
          translatedContent.map((item, index) => (
            <div className={styles.card} data-aos="fade-up" key={index}>
              <div className={styles.visual}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.visualImage}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 100vw, (max-width: 1100px) 300px, 360px"
                />
              </div>
              
              <div className={styles.content}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.kicker}>{item.description}</p>
                {item.lists && <div className={styles.lists}>
                  {item.lists.map((list, i) => (
                    <div className={styles.list} key={`${list}-${i}`}>
                      <span className={styles.icon}></span>
                      <span className={styles.text}>{list}</span>
                    </div>
                  ))}
                </div>}
              </div>
            </div>
          ))
        }
      </div>

    </section>
  );
}

