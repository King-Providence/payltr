"use client";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../page.module.css";
import PartnersHero from "../components/partners/PartnersHero/PartnersHero";
import PartnersLiquidity from "../components/partners/PartnersLiquidity/PartnersLiquidity";
import PartnersArchitecture from "../components/partners/PartnersArchitecture/PartnersArchitecture";
import PartnersCta from "../components/partners/PartnersCta/PartnersCta";
import {
  partnersArchitectureContent,
  partnersCtaContent,
  partnersHeroContent,
  partnersLiquidityContent,
} from "@/utils/partners";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import { translateUtilContent } from "@/lib/translateUtilContent";

export default function PartnersPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <PartnersHero content={translateUtilContent(partnersHeroContent, t)} />
        <PartnersLiquidity content={translateUtilContent(partnersLiquidityContent, t)} />
        <PartnersArchitecture content={translateUtilContent(partnersArchitectureContent, t)} />
        <PartnersCta content={translateUtilContent(partnersCtaContent, t)} />
      </main>
      <Footer />
    </div>
  );
}
