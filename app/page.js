"use client";

import Navbar from "./components/Navbar/Navbar";
import HomeHero from "./components/homeSection/HeroSection/HomeHero";
import Footer from "./components/Footer/Footer";
import styles from "./page.module.css";
import WhyFounderChoose from "./components/homeSection/WhyFounderChoose/WhyFounderChoose";
// import TrustedByBusinesses from "./components/homeSection/TrustedByBusinesses/TrustedByBusinesses";
import WhoIsPayLTRF from "./components/homeSection/WhoIsPayLTRF/WhoIsPayLTRF";
import ProcessOfHowIWorks from "./components/homeSection/ProcessOfHowIWorks/ProcessOfHowIWorks";
import HomeTestimonial from "./components/homeSection/HomeTestimonial/HomeTestimonial";
import HowItWorksFundingEcoSection from "./components/howItWorks/FundingEcoSection/HowItWorksFundingEcoSection";
import HowItWorksReadyToGetStarted from "./components/howItWorks/CtaSection/HowItWorksReadyToGetStarted";
import { complianceContent, ecosystemGridContent, getStartedContent, homefaq, homeTestimonialContent, howItWorksFundingEcoSectionContent, howWeDecideContent, openBankingContent, partnerBenefitsContent, problemContent } from "@/utils/home";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import { translateUtilContent } from "@/lib/translateUtilContent";
import BenifitsBusinesses from "./components/homeSection/BenifitsBusinesses/BenifitsBusinesses";
import FAQs from "./components/FAQs/FAQs";
import HomePartnerLogos from "./components/homeSection/HomePartnerLogos/HomePartnerLogos";
import WhyPayltrDifferent from "./components/homeSection/WhyPayltrDifferent/WhyPayltrDifferent";
import HowWeDecide from "./components/homeSection/HowWeDecide/HowWeDecide";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <HomeHero />
        
        {/* <TrustedByBusinesses content={translateUtilContent(trustedByBusinessesContent, t)} /> */}
        <BenifitsBusinesses content={translateUtilContent(problemContent, t)} />
        {/* <HomePartnerLogos /> */}
        {/* <HowItWorksFundingEcoSection content={translateUtilContent(howItWorksFundingEcoSectionContent, t)} /> */}
        {/* <WhyPayltrDifferent /> */}
        <WhyFounderChoose />
<HowWeDecide content={translateUtilContent(partnerBenefitsContent, t)} />
        <ProcessOfHowIWorks />
<HowWeDecide content={translateUtilContent(openBankingContent, t)} />
        {/* <HomeTestimonial content={homeTestimonialContent} /> */}
        {/* <WhoIsPayLTRF /> */}
        {/* <HowWeDecide content={translateUtilContent(howWeDecideContent, t)} /> */}
        {/* <FAQs details={homefaq} /> */}
        {/* <HowWeDecide content={translateUtilContent(complianceContent, t)} /> */}
        <HowItWorksReadyToGetStarted content={translateUtilContent(getStartedContent, t)} />
      </main>
      <Footer />
    </div>
  );
}