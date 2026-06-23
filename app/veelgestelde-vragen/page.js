import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../page.module.css";
import HowItWorksHeroSection from "../components/howItWorks/HowItWorksHeroSection/HowItWorksHeroSection";
import { applicationProcessfaq, CostAndRepaymentfaq, FAQHeroSectionContent, productfaq } from "@/utils/faq";
import FAQs from "../components/FAQs/FAQs";

export default function FaqPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
      <HowItWorksHeroSection content={FAQHeroSectionContent} />
      <FAQs details={productfaq} />
      <FAQs details={CostAndRepaymentfaq} />
      <FAQs details={applicationProcessfaq} />
      </main>
      <Footer />
    </div>
  );
}
