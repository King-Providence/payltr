import { IoAlertCircle } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

export const exploreAllCaseStudiesContent = {
    title: "Explore All Case Studies",
    image: "/assets/caseStudy/caseStudyHero.svg",
  };

/** Listing-card art (3 tiles on /klantverhalen). Detail hero uses `heroSectionImage`. */
const defaultCardHeroImage1 = "/assets/caseStudy/cover1.svg";
const defaultCardHeroImage2 = "/assets/caseStudy/cover2.svg";
const defaultCardHeroImage3 = "/assets/caseStudy/cover3.svg";

/** Full case study records: listing + detail timeline steps. */
export const CASE_STUDIES = [
  {
    id: "supplier-payment-rotterdam",
    slug: "supplier-payment-rotterdam",
    title: "Supplier payment ahead of peak season",
    description:
      "A wholesale distribution business in Rotterdam secured a major contract to supply a regional retailer. Their supplier required 50% upfront — about €45,000 — before production could start.",
    /** Hero right column on /klantverhalen/[slug] */
    heroSectionImage: "/assets/caseStudy/caseStudy1.svg",
    /** Thumbnail on /klantverhalen card grid */
    heroImage: defaultCardHeroImage1,
    metrics: [
      { label: "Amount financed", value: "€45,000" },
      { label: "Application time", value: "8 minutes" },
      { label: "Time to receive funds", value: "Next business day" },
      { label: "Payment break used", value: "112 days" },
      { label: "Early repayment", value: "Month 14 of 24" },
      {
        label: "Result",
        value: "Contract secured, supplier paid on time",
      },
    ],
    boxList :[
      "Sector: Wholesale","Employees: 8","Use case: Supplier payment ahead of peak season"
    ],
    testimonial: {
      content:
        "The speed was the thing. I've applied for bank financing before — it took six weeks and they still said no. With PayLTR I had the money the next day. The payment break was exactly what I needed to close the gap between my cash going out and my invoices coming in.",
      author: "Rotterdam (anonymous)",
      authorRole: "Owner, Wholesale Distribution Business",
    },
    steps: [
      {
        title: "The situation",
        icon: <IoAlertCircle />,
        body: "A wholesale distribution business in Rotterdam had secured a major contract to supply a regional retailer ahead of the spring season. Their supplier required 60% upfront payment — approximately €45,000 — before production would begin. The business had strong annual revenue (€1.2M) but their cash was tied up in outstanding invoices that would not be settled for another 45–60 days. A traditional bank loan would have taken 4–6 weeks to process. The window to secure the contract was 5 business days.",
      },
      {
        title: "What they did",
        icon: <FaListUl />,
        body: "The business owner completed the PayLTR application in under 8 minutes. After connecting his business bank account via Ponto, the pre-scan confirmed strong, consistent monthly cashflow. His application was approved and he received €45,000 in his business account the following morning",
      },
      {
        title: "The outcome",
        icon: <BsCheckCircleFill />,
        body: "The supplier payment was made on time. The business secured the contract. During the 120-day payment break, the retailer invoices were settled — meaning by the time repayments began, the cash had already returned to the business. The owner chose to repay early after month 14.",
      },
    ],
  },
  {
    id: "case-study-2",
    slug: "vat-quarter-utrecht",
    title: "VAT bill without draining working capital",
    description:
      "A growing digital agency in Utrecht faced a large quarterly VAT payment while payroll and contractor costs peaked on client projects.",
    heroSectionImage: "/assets/caseStudy/caseStudy2.svg",
    heroImage: defaultCardHeroImage2,
    metrics: [
      { label: "Amount financed", value: "€22,400" },
      { label: "Application time", value: "11 minutes" },
      { label: "Time to receive funds", value: "Next business day" },
      { label: "Payment break used", value: "90 days" },
      { label: "Repayment term", value: "24 months" },
      {
        label: "Result",
        value: "VAT paid on time, payroll and subscriptions covered",
      },
    ],
    testimonial: {
      content:
        "We were staring at a VAT payment the same week payroll and subs hit. PayLTR let us pay the tax authority on time without freezing the studio.",
      author: "Utrecht (anonymous)",
      authorRole: "Operations lead, Digital agency",
    },
    steps: [
      {
        title: "The situation",
        icon: <IoAlertCircle />,
        body: "Client payment terms were 30–45 days, but the VAT deadline was fixed. Paying the tax in full would have left too little buffer for payroll and software subscriptions due the same week.",
      },
      {
        title: "What they did",
        icon: <FaListUl />,
        body: "They used PayLTR to cover the VAT amount, spreading repayment over a schedule that matched when their largest client invoices were expected to clear.",
      },
      {
        title: "The outcome",
        icon: <BsCheckCircleFill />,
        body: "The VAT return was filed and paid on time, teams were paid without stress, and the agency avoided late fees or emergency overdraft use.",
      },
    ],
  },
  {
    id: "case-study-3",
    slug: "inventory-restock-amsterdam",
    title: "Inventory restock before a busy quarter",
    description:
      "An Amsterdam retailer needed to place a bulk order with a manufacturer to unlock volume pricing before a high-traffic sales period.",
    heroSectionImage: "/assets/caseStudy/caseStudy3.svg",
    heroImage: defaultCardHeroImage3,
    metrics: [
      { label: "Amount financed", value: "€58,000" },
      { label: "Application time", value: "9 minutes" },
      { label: "Time to receive funds", value: "Within 24 hours" },
      { label: "Volume discount captured", value: "Yes" },
      { label: "Payment break used", value: "100 days" },
      {
        label: "Result",
        value: "Stock in place for peak weeks, margin protected",
      },
    ],
    testimonial: {
      content:
        "The discount window was ten days and our cash wasn’t there yet. PayLTR meant we could take the manufacturer’s price and still run the shops normally.",
      author: "Amsterdam (anonymous)",
      authorRole: "Owner, Multi-location retailer",
    },
    steps: [
      {
        title: "The situation",
        icon: <IoAlertCircle />,
        body: "The manufacturer offered a meaningful discount for payment within ten days. The retailer’s best margin weeks were still four weeks away, so paying early from cash would have squeezed day-to-day operations.",
      },
      {
        title: "What they did",
        icon: <FaListUl />,
        body: "They financed the stock purchase with PayLTR, paid the manufacturer within the discount window, and aligned repayments with the weeks they historically see the strongest in-store and online sales.",
      },
      {
        title: "The outcome",
        icon: <BsCheckCircleFill />,
        body: "They captured the discount, shelves were full for the rush, and cashflow stayed stable through the restock period.",
      },
    ],
  },
];

/** Listing page testimonial — same copy as the Rotterdam case study. */
export const caseStudyTestimonialContent = CASE_STUDIES[0].testimonial;

export const caseStudyCardList = CASE_STUDIES.map((c) => ({
  id: c.id,
  href: `/klantverhalen/${c.slug}`,
  title: c.title,
  description: c.description,
  image: c.heroImage ?? c.heroSectionImage ?? c.image,
  ctaLabel: "Read Full Case Study",
}));

export function getCaseStudyBySlug(slug) {
  return CASE_STUDIES.find((c) => c.slug === slug) ?? null;
}

export function getCaseStudySlugs() {
  return CASE_STUDIES.map((c) => c.slug);
}
