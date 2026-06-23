import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../page.module.css";
import HowItWorksHeroSection from "../components/howItWorks/HowItWorksHeroSection/HowItWorksHeroSection";
import { caseStudyTestimonialContent, exploreAllCaseStudiesContent } from "@/utils/caseStudies";
import CaseStudyTestimonial from "../components/CaseStudy/CaseStudyTestimonial";
import CaseStudyCardGrid from "../components/CaseStudy/CaseStudyCardGrid";

export default function KlantverhalenPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <HowItWorksHeroSection content={exploreAllCaseStudiesContent} />
        <CaseStudyCardGrid />
        <CaseStudyTestimonial content={caseStudyTestimonialContent} />
      </main>
      <Footer />
    </div>
  );
}
