import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FeePricingStructure from "../components/FeePricing/FeePricingStructure/FeePricingStructure";
import styles from "../page.module.css";
import HowItWorksHeroSection from "../components/howItWorks/HowItWorksHeroSection/HowItWorksHeroSection";
import { FeePricingHeroSectionContent } from "@/utils/feePricing";

export default function FeeAndPricingPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <HowItWorksHeroSection content={FeePricingHeroSectionContent} />
        <FeePricingStructure />
      </main>
      <Footer />
    </div>
  );
}
