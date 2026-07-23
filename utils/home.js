import { GoPackage } from "react-icons/go";
import { FiCalendar } from "react-icons/fi";
import { RiLineChartLine } from "react-icons/ri";
import { LuShield } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiLock } from "react-icons/fi";
import { TbTargetArrow } from "react-icons/tb";
import { FiServer, FiClock, FiTrendingDown } from "react-icons/fi";
import { TbRoute } from "react-icons/tb";
import { FiUserCheck, FiZap, FiTrendingUp, FiRefreshCw } from "react-icons/fi";
import { FiActivity, FiShuffle, FiTarget } from "react-icons/fi";

export const openBankingContent = {
  title: "Powered by real business data.",
  subtitle:
    "Using Open Banking and transaction intelligence, PayLTR assesses business performance before applications are routed to the funding partner.",
  cards: [
    {
      icon: <FiActivity />,
      title: "Live cashflow insights",
      body: "Real-time business transaction analysis via PSD2 open banking.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Better affordability assessment",
      body: "Evaluate repayment capacity using operational data, not paperwork.",
    },
    {
      icon: <FiShuffle />,
      title: "Smarter routing",
      body: "Eligible applications are automatically routed to the appropriate funding partner.",
    },
    {
      icon: <FiTarget />,
      title: "120-day deferral design",
      body: "Our credit engine is calibrated specifically to assess repayment capacity after a 120-day gap — a capability no generic lender offers.",
    },
  ],
};

export const partnerBenefitsContent = {
  title: "Strengthen your existing customer relationships.",
  subtitle:
    "Your SME customers already trust your platform. Now they can also access financing exactly when they need it.",
  cards: [
    { icon: <FiUserCheck />, title: "Increase customer retention", body: "Keep customers inside your ecosystem instead of sending them to external lenders." },
    { icon: <FiZap />, title: "Increase platform engagement", body: "Offer financing at the moment business owners need working capital." },
    { icon: <FiTrendingUp />, title: "Create additional revenue", body: "Generate value from financing without becoming a lender." },
    { icon: <FiRefreshCw />, title: "Zero operational burden", body: "PayLTR manages the full process — application, assessment, funding, repayment. You refer, we orchestrate." },
  ],
};

export const ecosystemGridContent = {
  variant: "ecosystem",
  kicker: "Ecosystem Grid",
  title: "Built For Modern SME Ecosystems",
  cards: [
    { title: "Payment Providers", image: "/assets/home/sme.svg" },
    { title: "SaaS Platforms", image: "/assets/home/saas.svg" },
    { title: "ERP Providers", image: "/assets/home/erp.svg" },
    { title: "Accounting Software", image: "/assets/home/accounting.svg" },
    { title: "Marketplaces", image: "/assets/home/paymentproviders.svg" },
    { title: "B2B Platforms", image: "/assets/home/B2B.svg" },
  ],
};

export const problemContent = {
  title: "Offering SME financing is complex.",
  showCardNumbers: false,
  cards: [
    {
      icon: <FiServer />,
      title: "No lending infrastructure",
      body: "Building an embedded lending solution requires underwriting workflows, Open Banking connectivity, funding partners and compliance processes. Most platforms cannot build this alone.",
    },
    {
      icon: <TbRoute />,
      title: "Fragmented customer journey",
      body: "SMEs are forced to leave your platform to search for financing elsewhere, resulting in lower engagement and customer retention.",
    },
    {
      icon: <FiClock />,
      title: "Slow implementation",
      body: "Developing lending capabilities internally requires significant investment, technical resources and regulatory expertise.",
    },
    {
      icon: <FiTrendingDown />,
      title: "Missed revenue opportunity",
      body: "Every SME customer who finds financing elsewhere is value your platform could have captured.",
    },
  ],
};

export const trustedByBusinessesContent={
    // title: "Trusted by Businesses Using PayLTR to:",
    title: "Benefits for businesses:",
    showCardNumbers: false,
    cards: [
      {
        icon: <GoPackage />,
        title: "Pay suppliers today, pay us later",
        body: "Cover invoices, stock orders, and upfront costs without draining your working capital.",
        image: "/assets/home/home-benefits-1.svg",
      },
      {
        icon: <FiCalendar />,
        title: "Up to 120 days payment break",
        body: "No repayments for up to 4 months after funding. A user fee applies during this period.",
        image: "/assets/home/home-benefits-2.svg",
      },
      {
        icon: <RiLineChartLine />,
        title: "Repay at 0% interest over 24 months",
        body: "After your payment break, repayments are spread over 24 months with no interest charged.",
        image: "/assets/home/home-benefits-3.svg",
      },
      {
        icon: <LuShield />,
        title: "No personal risk",
        body: "No personal guarantees, no personal credit checks, and no hidden fees - ever.",
        image: "/assets/home/home-benefits-4.svg",
      },
    ],
    height: "40px"  
  }
export const complianceContent={
  // title: "Trusted by Businesses Using PayLTR to:",
  title: "Your data is safe. Your identity is protected.",
  cards: [
    {
      icon: <LuShield />,
      title: "Identity verified by Didit",
      body: "All applicants are verified using Didit — a certified KYC (Know Your Customer) provider. Your ID is checked securely and never shared.",
    },
    {
      icon: <IoDocumentTextOutline />,
      title: "Bank connection via Ponto (PSD2)",
      body: "We connect to your business bank account through Ponto, a licensed PSD2 open banking provider. We only request read-only access — we cannot make payments or move money.",
    },
    {
      icon: <FiLock />,
      title: "Financing provided by Qeld",
      body: "The financing you receive is provided by Qeld, a licensed Dutch credit provider. PayLTR acts as the onboarding and distribution layer.",
    },
    {
      image: "/assets/home/Flag_of_Europe.png",
      title: "GDPR compliant",
      body: "All data is processed in line with European GDPR regulations. You can request deletion of your data at any time.",
    },
  ],
  flag:true,
  height: "40px"  ,
  cardHeight: "320px"
}

export const howWeDecideContent={
  // title: "Trusted by Businesses Using PayLTR to:",
  title: "We don't guess. We analyse.",
  subtitle: "Most lenders look at last year’s paperwork and make a judgment call. We connect to your live business data and calculate exactly what you need — before you even feel the pressure.",
  label: "HOW WE DECIDE",
  cards: [
    {
      icon: <RiLineChartLine />,
      title: "We read your actual cashflow",
      body: "Through a secure bank connection, we see your real income, expenses, and payment patterns — not a credit score, not a form you filled in. Real numbers, from your real business.",
    },
    {
      icon: <FiCalendar />,
      title: "We calculate your gap before you feel it",
      body: "Our system analyses your last 90 days and projects your next 30, 60, and 90 days forward. We identify exactly when a cashflow gap is likely to appear — and how large it will be.",
    },
    {
      icon: <TbTargetArrow />,
      title: "Repay at 0% interest over 24 months",
      body: "You receive a financing offer sized to your actual gap — not a generic product pushed at everyone. The amount, the timing, and the payment break are all calculated around your specific business pattern.",
    },
  ],
}

export const howItWorksFundingEcoSectionContent={
    title:"Get paid before your clients pay you",
    lists:[
        "Start the project now",
        "Up to 120 days before repayment starts",
        "Repay over 24 months interest-free",
        "Fast approval. no personal credit checks",
        "Keeps your operations running smooth",
    ],
    lastContent:"Your next project shouldn't wait for cash to catch up.",
    image: "/assets/home/Get paid before your clients pay you.svg"
}

export const homefaq = {
  title: "Frequently Asked Questions",
  boxes: [
    {
      question: "What is PayLTR?",
      content:
        "PayLTR is a business financing platform for European SMBs. We let you cover business costs today — inventory, suppliers, VAT, equipment, project expenses — and start paying back later. You get up to 120 days before any repayment begins, then repay over 24 months at 0% interest. Financing is provided by Qeld, a licensed Dutch credit provider.",
    },
    {
      question: "How much can I borrow?",
      content:
        "You can apply for financing between €3,000 and €500,000. The amount you are approved for depends on your business cashflow, revenue, and the results of our pre-scan. You will see your personalised offer before you commit to anything.",
    },
    {
      question: "Is this a loan?",
      content:
        "PayLTR provides business financing — not a traditional bank loan. There is no collateral required, no personal guarantee, and no personal credit check. The financing is assessed purely on your business's cashflow and financial health, provided by Qeld under a licensed credit arrangement.",
    },
    {
      question: "What is the 120-day payment break?",
      content:
        "The payment break is a period of up to 120 days (approximately 4 months) after you receive your financing during which no repayments are due. This gives your business time to put the capital to work before the repayments begin. A user fee, set by Qeld, applies during this period.",
    },
    {
      question: "Is the financing really interest-free?",
      content:
        "Yes — the repayment period (months 1–24) carries 0% interest. However, during the 120-day payment break period, a user fee applies. This fee is set by Qeld, our financing partner, and will be shown clearly to you before you accept any offer. There are no other hidden fees.",
    },
    {
      question: "What is the user fee during the payment break?",
      content:
        "The user fee is charged by Qeld during the 120-day payment break period. The exact amount depends on the size of your financing and will be displayed clearly before you accept your offer. You will always see the full cost upfront — no surprises.",
    },
    {
      question: "Can I repay early?",
      content:
        "Yes. You can repay your full remaining balance at any time, with no early repayment penalty and no additional fees. If your business has a strong month and you want to close out the financing early, you are free to do so.",
    },
    {
      question: "What happens if I miss a repayment?",
      content:
        "If you are expecting a difficult month, contact us before your repayment date. We will do our best to find a solution. Late repayment terms are set by Qeld and will be detailed in your financing agreement. We recommend reading your agreement carefully before signing.",
    },
    {
      question: "What do I need to apply?",
      content:
        "To apply you need: your company registration number (KVK for Dutch businesses), your business bank account (for the PSD2 connection via Ponto), and a valid identity document for KYC verification via payLTR. The whole process takes 5–10 minutes online.",
    },
    {
      question: "Will applying affect my personal credit score?",
      content:
        "No. PayLTR does not run personal credit checks. Our assessment is based entirely on your business's financial health — specifically your cashflow, revenue history, and business profile. Your personal credit score is not affected.",
    },
    {
      question: "Why do you need access to my bank account?",
      content:
        "We connect to your business bank account via Ponto, a licensed PSD2 open banking provider. This gives us a read-only view of your cashflow and transaction history — the fastest and most accurate way to assess your business without requiring mountains of paperwork. We cannot make payments or move money. Your bank credentials are never shared with PayLTR. You can revoke access at any time.",
    },
    {
      question: "How long does it take to receive the money?",
      content:
        "After your application is approved and your identity and bank are verified, your financing is typically transferred within 24 hours. Exact timelines depend on your bank and our financing partner Qeld.",
    },
  ],
};

export const getStartedContent={
    variant: "talkToUs",
    title: "Ready to offer financing to your SME customers?",
    description:
      "One integration. Zero credit risk. Revenue from every funded deal.",
    ctaText: "Become a partner",
    ctaHref: "/partners",
}

export const homeTestimonialContent = {
  quote:
    "I needed €28,000 to pay a supplier before they'd ship my stock. The banks wanted three months of paperwork and still weren't sure. PayLTR approved me in a day. The 120-day break meant I could sell the stock and have the cash ready before I even started repaying. It's the first time financing actually worked the way my business works.",
  attribution: "Owner, E-commerce Business, Amsterdam (anonymous)",
};