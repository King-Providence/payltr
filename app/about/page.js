"use client";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../page.module.css";
import TheTeam from "../components/about/TheTeam/TheTeam";
import { aboutHeroSectionContent, theTeamContent } from "@/utils/about";
import HowItWorksHeroSection from "../components/howItWorks/HowItWorksHeroSection/HowItWorksHeroSection";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import { translateUtilContent } from "@/lib/translateUtilContent";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <HowItWorksHeroSection content={translateUtilContent(aboutHeroSectionContent, t)} />
        <TheTeam content={translateUtilContent(theTeamContent, t)} />
      </main>
      <Footer />
    </div>
  );
}
