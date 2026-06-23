export const HowItWorksHeroSectionContent = {
  title: "How PayLTR Works",
  subtitle: "From the Business Owner Perspective",
  description:
    "Get the payment break you need to grow your business — in 6 simple steps",
  buttonText: "Get Started",
  buttonLink: "/aanvragen",
  image: "/assets/Rectangle 861.png",
  video:
    "https://res.cloudinary.com/dmmcsjsso/video/upload/f_mp4,q_auto,w_1280,c_limit/v1775489040/How%20PayLTR%20Works.mp4",
};

export const howItWorksPageHeroContent = {
  label: "Process",
  title: "How PayLTR Works",
  subtitle: "Get financed in 5 simple steps",
  description:
    "From Open Banking consent to funded capital – PayLTR's end-to-end process is designed for speed, transparency and minimal friction.",
  primaryCta: "Apply for funding",
  primaryCtaHref: "/aanvragen",
  secondaryCta: "Partner with us",
  secondaryCtaHref: "/partners",
  image: "/assets/partner/partnerherosection.svg",
};

export const howItWorksTimelineContent = {
  steps: [
    { step: 1, label: "Secure Data Connection" },
    { step: 2, label: "Liquidity Diagnostics" },
    { step: 3, label: "Eligibility Assessment" },
    { step: 4, label: "Funding Partner Routing" },
    { step: 5, label: "Funding Activation" },
  ],
};

export const howItWorksJourneyContent = {
  title: "Your Journey to Better Cashflow",
  subtitle: "Follow these 5 simple steps to start working with PayLTR",
  steps: [
    {
      step: 1,
      kicker: "Open Banking consent & data access",
      title: "SECURE DATA CONNECTION",
      description:
        "With customer consent, Open Banking enables access to relevant financial information. PayLTR uses PSD2-compliant APIs to securely connect to business bank accounts. No credentials are ever stored — access is granted via tokenised consent that can be revoked at any time.",
      bullets: [
        "Customer initiates consent flow",
        "PSD2-compliant bank connection",
        "Transaction history retrieved",
        "Ongoing data refresh enabled",
      ],
      image: "/assets/how-it-works/step1.svg",
      imageFirst: true,
    },
    {
      step: 2,
      kicker: "Cashflow intelligence & pressure mapping",
      title: "LIQUIDITY DIAGNOSTICS",
      description:
        "PayLTR analyses the full picture: cashflow trends over time, upcoming obligations (VAT, payroll, supplier invoices), liquidity pressure scores, and funding opportunities. This is not a credit check — it is a real-time financial health assessment.",
      bullets: [
        "Cashflow trend analysis",
        "Upcoming obligation detection",
        "Liquidity pressure scoring",
        "Funding opportunity identification",
      ],
      image: "/assets/how-it-works/step2.svg",
      imageFirst: false,
    },
    {
      step: 3,
      kicker: "Automated risk orchestration",
      title: "ELIGIBILITY ASSESSMENT",
      description:
        "The Risk Orchestration Engine determines financing eligibility based entirely on cashflow signals. Decisions are made algorithmically, without manual underwriting or credit bureau queries. Eligible businesses are matched to the most suitable funding product.",
      bullets: [
        "Cashflow-based eligibility model",
        "No credit bureau queries",
        "Algorithmic product matching",
        "Instant eligibility decision",
      ],
      image: "/assets/how-it-works/step3.svg",
      imageFirst: true,
    },
    {
      step: 4,
      kicker: "Automated partner selection & submission",
      title: "FUNDING PARTNER ROUTING",
      description:
        "Once eligibility is confirmed, the application is routed through the funding partner network. PayLTR selects the optimal funding partner based on the merchant's profile and product requirements. No third-party brand names are exposed during this process.",
      bullets: [
        "Multi-partner routing logic",
        "Optimal partner selection",
        "Application auto-submission",
        "Zero third-party brand exposure",
      ],
      image: "/assets/how-it-works/step4.svg",
      imageFirst: false,
    },
    {
      step: 5,
      kicker: "Capital deployment with structured repayment",
      title: "FUNDING ACTIVATION",
      description:
        "The merchant receives access to capital, following a 120-day payment pause — a full grace period with zero repayment obligations — repayment is structured over up to 24 months in fixed, predictable instalments.",
      bullets: [
        "Capital deployed to merchant account",
        "120-day payment pause begins",
        "Zero repayment during pause period",
        "Structured 24-month repayment follows",
      ],
      image: "/assets/how-it-works/step5.svg",
      imageFirst: true,
    },
  ],
};

export const howItWorksBusinessRealityContent = {
  label: "Repayment Structure",
  title: "Designed For Business Reality",
  steps: [
    { step: 1, label: "Day 0", note: "Funding activation" },
    { step: 2, label: "Day 1–120", note: "120-day payment pause — zero repayment" },
    { step: 3, label: "Day 121", note: "Repayment begins" },
    { step: 4, label: "Month 1–24", note: "Structured monthly repayment" },
  ],
};

export const howItWorksFaqContent = {
  span: "FAQ",
  title: "Common Questions",
  boxes: [
    {
      question: "What data does PayLTR access?",
      content:
        "PayLTR accesses business transaction data via Open Banking with explicit merchant consent. No personal data, no passwords, and no credential storage.",
    },
    {
      question: "How long does the process take?",
      content:
        "From consent to capital, the process typically completes within the same business day. Eligibility assessment is instant. Funding activation follows partner approval.",
    },
    {
      question: "What is the 120-day payment pause?",
      content:
        "The 120-day payment pause is a grace period after funding activation during which no repayment is required. Repayment begins only after this period ends.",
    },
    {
      question: "Is there a minimum or maximum funding amount?",
      content:
        "Funding through the Funding Partner Network is available up to €500,000. Minimum amounts vary by partner and are assessed during eligibility.",
    },
    {
      question: "Can a business apply multiple times?",
      content:
        "Yes. Businesses can access the PayLTR platform as part of their ongoing liquidity management, subject to eligibility at each application.",
    },
  ],
};

export const whyBusinessOwnerContent = {
  title: "Why Business Owners Choose PayLTR",
  cards: [
    {
      number: "1",
      title: "Interest-free repayments",
      image: "/assets/how-it-works/howItWorks-1.svg",
    },
    {
      number: "2",
      title: "Up to 120 days payment break",
      image: "/assets/how-it-works/howItWorks-2.svg",
    },
    {
      number: "3",
      title: "No complex paperwork",
      image: "/assets/how-it-works/howItWorks-3.svg",
    },
    {
      number: "4",
      title: "Keep growing your business",
      image: "/assets/how-it-works/howItWorks-4.svg",
    },
  ],
  lastContent:
    "A user fee applies during the 120-day payment break. Repayments are 0% interest. Early repayment is always permitted at no extra cost.",
};

export const getStartedContent = {
  variant: "talkToUs",
  title: "Ready to get started?",
  description:
    "Apply for funding in minutes using Open Banking. No paperwork. No bureaucracy.",
  ctaText: "Apply for Funding",
  ctaHref: "/aanvragen",
};
