"use client";

import styles from "../../page.module.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import HowItWorksReadyToGetStarted from "@/app/components/howItWorks/CtaSection/HowItWorksReadyToGetStarted";
import { benefitsContent, getStartedContent, HelpComponentContent, HowItWorksHeroSectionContent, RealWorldScenerioContent, theChallengeContent, whyItsMattersContent } from "@/utils/usecase2";
import HowItWorksHeroMain from "@/app/components/howItWorks/HowItWorksHeroMain/HowItWorksHeroMain";
import TheChallanges from "@/app/components/UsecaseSection/TheChallanges/TheChallanges";
import TrustedByBusinesses from "@/app/components/homeSection/TrustedByBusinesses/TrustedByBusinesses";
import HelpComponent from "@/app/components/UsecaseSection/HelpComponent/HelpComponent";
import RealWorldScenerio from "@/app/components/UsecaseSection/RealWorldScenerio/RealWorldScenerio";
import BenifitsBusinesses from "@/app/components/homeSection/BenifitsBusinesses/BenifitsBusinesses";

export default function UseCaseMarketingPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main} >   
        <HowItWorksHeroMain content={HowItWorksHeroSectionContent} />
        <TheChallanges content={theChallengeContent} />
        <TrustedByBusinesses content={whyItsMattersContent} />
        <HelpComponent content={HelpComponentContent} />
       <BenifitsBusinesses content={benefitsContent} />
        <RealWorldScenerio content={RealWorldScenerioContent} />
        <HowItWorksReadyToGetStarted content={getStartedContent} />
      </main>
      <Footer />
    </div>
  );
}

