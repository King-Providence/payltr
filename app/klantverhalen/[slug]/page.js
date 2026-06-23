import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import CaseStudyTimeline from "@/app/components/CaseStudy/CaseStudyTimeline";
import pageStyles from "@/app/page.module.css";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/utils/caseStudies";
import HowItWorksHeroSection from "@/app/components/howItWorks/HowItWorksHeroSection/HowItWorksHeroSection";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case study" };
  return {
    title: `${study.title} | PayLTR`,
    description: study.description,
    alternates: {
      canonical: `/klantverhalen/${slug}`,
    },
  };
}

export default async function KlantverhaalDetailPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <div className={pageStyles.page}>
      <Navbar />
      <main className={pageStyles.main}>
        <HowItWorksHeroSection
          content={{
            title: study.title,
            image: study.heroSectionImage ?? study.image,
            boxList: study.boxList,
          }}
        />
        <CaseStudyTimeline
          steps={study.steps}
          metrics={study.metrics}
          testimonial={study.testimonial}
        />
      </main>
      <Footer />
    </div>
  );
}
