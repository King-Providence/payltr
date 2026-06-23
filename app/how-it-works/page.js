"use client";

import Navbar from "../components/Navbar/Navbar";
import styles from "../page.module.css";
import HowItWorksReadyToGetStarted from "../components/howItWorks/CtaSection/HowItWorksReadyToGetStarted";
import HowItWorksPartnershipCoCreation from "../components/howItWorks/PartnershipCoCreation/HowItWorksPartnershipCoCreation";
import Footer from "../components/Footer/Footer";
import { getStartedContent, HowItWorksHeroSectionContent, whyBusinessOwnerContent } from "@/utils/howItWorks";
import HowItWorksHeroMain from "../components/howItWorks/HowItWorksHeroMain/HowItWorksHeroMain";
import BenifitsBusinesses from "../components/homeSection/BenifitsBusinesses/BenifitsBusinesses";
import HowWeDecide from "../components/homeSection/HowWeDecide/HowWeDecide";
import { complianceContent } from "@/utils/home";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import { translateUtilContent } from "@/lib/translateUtilContent";

export default function HowItWorksPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <HowItWorksHeroMain content={HowItWorksHeroSectionContent} />
        <HowItWorksPartnershipCoCreation />
        <BenifitsBusinesses
          content={translateUtilContent(whyBusinessOwnerContent, t)}
        />
        <HowWeDecide content={translateUtilContent(complianceContent, t)} />
        <HowItWorksReadyToGetStarted content={getStartedContent} />
      </main>
      <Footer />
    </div>
  );
}

