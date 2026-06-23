"use client";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../page.module.css";
import CompanyHero from "../components/company/CompanyHero/CompanyHero";
import CompanyStats from "../components/company/CompanyStats/CompanyStats";
import CompanyMission from "../components/company/CompanyMission/CompanyMission";
import CompanyValues from "../components/company/CompanyValues/CompanyValues";
import CompanyFocus from "../components/company/CompanyFocus/CompanyFocus";
import CompanyCta from "../components/company/CompanyCta/CompanyCta";
import {
  companyCtaContent,
  companyFocusContent,
  companyHeroContent,
  companyMissionContent,
  companyStatsContent,
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
        <CompanyStats content={translateUtilContent(companyStatsContent, t)} />
        <CompanyMission content={translateUtilContent(companyMissionContent, t)} />
        <CompanyValues content={translateUtilContent(companyValuesContent, t)} />
        <CompanyFocus content={translateUtilContent(companyFocusContent, t)} />
        <CompanyCta content={translateUtilContent(companyCtaContent, t)} />
      </main>
      <Footer />
    </div>
  );
}
