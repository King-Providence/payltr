"use client";

import Navbar from "../components/Navbar/Navbar";
import styles from "../page.module.css";
import HowItWorksReadyToGetStarted from "../components/howItWorks/CtaSection/HowItWorksReadyToGetStarted";
import Footer from "../components/Footer/Footer";
import {
  getStartedContent,
  howItWorksBusinessRealityContent,
  howItWorksFaqContent,
  howItWorksJourneyContent,
  howItWorksPageHeroContent,
  howItWorksTimelineContent,
} from "@/utils/howItWorks";
import HowItWorksPageHero from "../components/howItWorks/HowItWorksPageHero/HowItWorksPageHero";
import HowItWorksTimeline from "../components/howItWorks/HowItWorksTimeline/HowItWorksTimeline";
import HowItWorksJourney from "../components/howItWorks/HowItWorksJourney/HowItWorksJourney";
import HowItWorksBusinessReality from "../components/howItWorks/HowItWorksBusinessReality/HowItWorksBusinessReality";
import FAQs from "../components/FAQs/FAQs";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import { translateUtilContent } from "@/lib/translateUtilContent";

export default function HowItWorksPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <HowItWorksPageHero content={translateUtilContent(howItWorksPageHeroContent, t)} />
        <HowItWorksTimeline content={translateUtilContent(howItWorksTimelineContent, t)} />
        <HowItWorksJourney content={translateUtilContent(howItWorksJourneyContent, t)} />
        <HowItWorksBusinessReality content={translateUtilContent(howItWorksBusinessRealityContent, t)} />
        <FAQs
          details={translateUtilContent(howItWorksFaqContent, t)}
          defaultActiveIndex={0}
          centered
        />
        <HowItWorksReadyToGetStarted content={translateUtilContent(getStartedContent, t)} />
      </main>
      <Footer />
    </div>
  );
}
