"use client";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../page.module.css";
import CompanyHero from "../components/company/CompanyHero/CompanyHero";
import CompanyMission from "../components/company/CompanyMission/CompanyMission";
import CompanyStats from "../components/company/CompanyStats/CompanyStats";
import CompanyValues from "../components/company/CompanyValues/CompanyValues";
import CompanyFocus from "../components/company/CompanyFocus/CompanyFocus";
import CompanyFounder from "../components/company/CompanyFounder/CompanyFounder";
import CompanyTeam from "../components/company/CompanyTeam/CompanyTeam";
import CompanyStory from "../components/company/CompanyStory/CompanyStory";
import CompanyPartners from "../components/company/CompanyPartners/CompanyPartners";
import CompanyCta from "../components/company/CompanyCta/CompanyCta";
import {
  companyCtaContent,
  companyFocusContent,
  companyFounderContent,
  companyHeroContent,
  companyMissionContent,
  companyStatsContent,
  companyTeamContent,
  companyStoryContent,
  companyPartnersContent,
  companyValuesContent,
} from "@/utils/company";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import { translateUtilContent } from "@/lib/translateUtilContent";

export default function CompanyPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <CompanyHero content={translateUtilContent(companyHeroContent, t)} />
        <CompanyMission content={translateUtilContent(companyMissionContent, t)} />
        <CompanyStats content={translateUtilContent(companyStatsContent, t)} />
        <CompanyValues content={translateUtilContent(companyValuesContent, t)} />
        <CompanyFocus content={translateUtilContent(companyFocusContent, t)} />
        <CompanyFounder content={translateUtilContent(companyFounderContent, t)} />
        <CompanyTeam content={translateUtilContent(companyTeamContent, t)} />
        <CompanyStory content={translateUtilContent(companyStoryContent, t)} />
        <CompanyPartners content={translateUtilContent(companyPartnersContent, t)} />
        <CompanyCta content={translateUtilContent(companyCtaContent, t)} />
      </main>
      <Footer />
    </div>
  );
}