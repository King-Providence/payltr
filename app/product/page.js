"use client";

import { getStartedContent, ProductHeroSectionContent } from "@/utils/product";
import Footer from "../components/Footer/Footer";
import HowItWorksReadyToGetStarted from "../components/howItWorks/CtaSection/HowItWorksReadyToGetStarted";
import Navbar from "../components/Navbar/Navbar";
import styles from "../page.module.css";
import HowItWorksHeroSection from "../components/howItWorks/HowItWorksHeroSection/HowItWorksHeroSection";
import OpenBankingSection from "../components/ProductSection/OpenBanking/OpenBankingSection";
import { openBankingSectionContent } from "@/utils/product";

export default function ProductPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main} >
        <HowItWorksHeroSection content={ProductHeroSectionContent} />
        <OpenBankingSection content={openBankingSectionContent} />
        <HowItWorksReadyToGetStarted content={getStartedContent} />
      </main>
      <Footer />
    </div>
  );
}

