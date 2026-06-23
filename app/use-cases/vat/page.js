"use client";

import Footer from "@/app/components/Footer/Footer";
import styles from "../../page.module.css";
import HowItWorksReadyToGetStarted from "@/app/components/howItWorks/CtaSection/HowItWorksReadyToGetStarted";
import { benefitsContent, getStartedContent, HelpComponentContent, HowItWorksHeroSectionContent, RealWorldScenerioContent, theChallengeContent, whyItsMattersContent } from "@/utils/usecase1";
import TrustedByBusinesses from "@/app/components/homeSection/TrustedByBusinesses/TrustedByBusinesses";
import Navbar from "@/app/components/Navbar/Navbar";
import TheChallanges from "@/app/components/UsecaseSection/TheChallanges/TheChallanges";
import HelpComponent from "@/app/components/UsecaseSection/HelpComponent/HelpComponent";
import RealWorldScenerio from "@/app/components/UsecaseSection/RealWorldScenerio/RealWorldScenerio";
import HowItWorksHeroMain from "@/app/components/howItWorks/HowItWorksHeroMain/HowItWorksHeroMain";
import BenifitsBusinesses from "@/app/components/homeSection/BenifitsBusinesses/BenifitsBusinesses";

export default function UseCaseVatPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main} >        
        <HowItWorksHeroMain content={(HowItWorksHeroSectionContent)} />
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

