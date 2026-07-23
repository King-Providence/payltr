export const FAQHeroSectionContent = {
  title: "Frequently Asked Questions",
  lastContent: `"During your 90 or 120-day payment pause, a monthly user fee is charged by our financing partner, Qeld. Once repayments begin, you pay in 24 equal monthly instalments — completely interest-free. If you want to pay off your balance early, you can do so at any time with no extra charge."`,
  image: "/assets/faqHero.png",
};

export const productfaq = {
  label: "Section 1",
  title: "About PayLTR",
  boxes: [
    {
      question: "What is PayLTR?",
      content:
        "PayLTR is an embedded working capital infrastructure platform that enables banks, fintechs and software platforms to offer financing to their own SME customers. We are not a lender — we are the orchestration layer between your platform and a regulated funding partner network. For SME customers: PayLTR gives you access to up to €500,000 in working capital with a 90 or 120-day payment pause before any repayment begins, followed by 24 months of repayment at 0% interest. Financing is provided by Qeld, a licensed Dutch credit provider.",
    },
    {
      question: "How much can I borrow?",
      content:
        "You can apply for financing between €3,000 and €500,000. The amount approved depends on your business cashflow, revenue history, and the results of our credit assessment. You will see your personalised offer before you commit to anything.",
    },
    {
      question: "Is this a loan?",
      content:
        "PayLTR provides business financing — not a traditional bank loan. There is no collateral required, no personal guarantee, and no personal credit check. The financing is assessed purely on your business's cashflow and financial health, provided by Qeld under a licensed credit arrangement.",
    },
    {
      question: "What is the payment pause?",
      content:
        "The payment pause is a period of 90 or 120 days after you receive your financing during which no repayments are due. You choose your preferred deferral period when you apply. 90-day pause: first repayment begins on day 91. 120-day pause: first repayment begins on day 121. This gives your business time to put the capital to work before repayments begin. During the pause, a monthly user fee set by Qeld applies. A one-time PayLTR platform service fee is also collected automatically at the midpoint of your chosen deferral period.",
    },
  ],
};

export const CostAndRepaymentfaq = {
  label: "Section 2",
  title: "Costs & Repayment",
  boxes: [
    {
      question: "Is the financing really interest-free?",
      content:
        "Yes — the repayment period (months 1–24 after your deferral period ends) carries 0% interest. However, two costs apply during the deferral period: 1. A monthly user fee charged by Qeld (our funding partner) — this varies between 0.95% and 3.5% per month of the financed amount, depending on your risk profile. The exact amount is always shown before you accept. 2. A one-time PayLTR platform service fee — collected automatically via SEPA Direct Debit at the midpoint of your deferral period (day 45 for 90-day / day 60 for 120-day). The amount depends on your loan size and is clearly displayed before you submit your application. There are no other hidden fees. Early repayment carries no penalty.",
    },
    {
      question: "What is the user fee during the payment pause?",
      content:
        "The user fee is charged monthly by Qeld during your 90 or 120-day payment pause. It ranges from 0.95% to 3.5% per month of your financed amount, depending on your business risk profile — determined by Qeld's AI-powered credit assessment across 140+ data points. The exact monthly amount is always displayed clearly before you accept your offer.",
    },
    {
      question: "What is the PayLTR platform service fee?",
      content:
        "PayLTR charges a one-time platform service fee for providing access to the orchestration layer, credit assessment, and funding partner network. This fee: is a fixed base amount plus a small percentage of your loan size, is collected automatically via SEPA Direct Debit at the midpoint of your deferral period (day 45 for 90-day / day 60 for 120-day), is shown clearly before you submit your application — no surprises, and applies only once per financing — not monthly. You provide your IBAN at the start of your application, and we collect the fee automatically on the due date. No manual action is required from you.",
    },
    {
      question: "Can I repay early?",
      content:
        "Yes. You can repay your full remaining balance at any time with no early repayment penalty and no additional fees. If you repay before the end of your term, all remaining costs cease immediately.",
    },
    {
      question: "What happens if I miss a repayment?",
      content:
        "If you are expecting a difficult month, contact us before your repayment date. We will do our best to find a solution. Late repayment terms are set by Qeld and are detailed in your financing agreement. We recommend reading your agreement carefully before signing.",
    },
  ],
};

export const applicationProcessfaq = {
  label: "Section 3",
  title: "The Application Process",
  boxes: [
    {
      question: "What do I need to apply?",
      content:
        "To apply you need: your company registration number (KvK for Dutch businesses), your IBAN (provided at the start of the application — used for SEPA mandate and fee collection), and access to your business bank account (for the PSD2 open banking connection via Ponto). The whole process takes approximately 5–10 minutes online. You can apply directly via payltr.eu or through any integrated partner platform.",
    },
    {
      question: "Will applying affect my personal credit score?",
      content:
        "No. PayLTR does not run personal credit checks. Our assessment is based entirely on your business's financial health — specifically your cashflow, revenue history, and business profile. Your personal credit score is not affected.",
    },
    {
      question: "Why do you need access to my bank account?",
      content:
        "We connect to your business bank account via Ponto, a licensed PSD2 open banking provider. This gives us a read-only view of your cashflow and transaction history — the fastest and most accurate way to assess your business without requiring paperwork. We cannot make payments or move money. Your bank credentials are never shared with PayLTR. You can revoke access at any time.",
    },
    {
      question: "How long does it take to receive the money?",
      content:
        "After your application is approved and your bank is verified, your financing is typically transferred within 24 hours. Exact timelines depend on your bank and our financing partner Qeld.",
    },
  ],
};

export const howPayltrWorksFaq = {
  label: "Section 4",
  title: "How PayLTR Works — The Orchestration Layer",
  boxes: [
    {
      question: 'What does "orchestration layer" mean?',
      content:
        "PayLTR acts as the infrastructure layer between you (the SME) and the regulated funding partner (Qeld) that actually provides the capital. When you apply through PayLTR or a partner platform: 1. PayLTR collects your application and bank data via Open Banking (Ponto PSD2). 2. PayLTR runs a full in-house credit assessment using our own credit engine. 3. PayLTR routes the assessed application to Qeld for the final lending decision. 4. Qeld approves and disburses the funds directly. 5. PayLTR manages fee collection and coordinates repayment tracking. PayLTR does not lend money directly and carries zero credit risk on its balance sheet.",
    },
    {
      question: "Why is PayLTR embedded in partner platforms?",
      content:
        "PayLTR is designed to reach SMEs at the exact moment they need working capital — inside the accounting software, neobank, or payment platform they already use every day. Rather than requiring you to search for financing separately, PayLTR surfaces a tailored 90 or 120-day deferral offer automatically when your platform detects an upcoming VAT deadline, supplier payment, or cashflow gap. You can also apply directly through payltr.eu — the same orchestration layer applies regardless of entry point.",
    },
    {
      question: "Who actually lends me the money?",
      content:
        "The financing is provided by Qeld, a licensed Dutch credit provider regulated under Dutch law. Qeld makes the final credit decision and disburses the funds directly to your business bank account. Qeld also absorbs all credit and default risk. PayLTR manages the origination, assessment, and orchestration — but the lending relationship is between you and Qeld.",
    },
    {
      question: "Is PayLTR a regulated financial institution?",
      content:
        "PayLTR operates as a credit intermediary and platform infrastructure provider. Under Dutch law (Wft), no AFM lending licence is required for B2B SME credit intermediation at entity level. Qeld holds the relevant lending licence and regulatory authorisation. PayLTR is GDPR-compliant and operates within the applicable Dutch and EU regulatory frameworks.",
    },
  ],
};

export const partnerPlatformsFaq = {
  label: "Section 5",
  title: "For Partner Platforms",
  boxes: [
    {
      question: "What does it mean to be a PayLTR partner?",
      content:
        "As a PayLTR partner, you embed our orchestration layer inside your platform via API. This enables you to offer 90 or 120-day payment deferral financing of up to €500,000 to your own SME customers — without building lending infrastructure, taking on credit risk, or requiring a lending licence. You refer, we orchestrate, Qeld funds. You earn a revenue share per funded deal.",
    },
    {
      question: "What types of platforms can integrate PayLTR?",
      content:
        "PayLTR is designed for any platform that serves SME customers, including: accounting and ERP platforms (e.g. Visma, Exact Online, AFAS), neobanks and digital business banks (e.g. bunq, Qonto, Revolut Business), payment service providers / PSPs (e.g. Mollie, Adyen, Buckaroo), B2B marketplaces and wholesale platforms, payroll and HR platforms, and SaaS providers with business customers. If your platform serves Dutch SMEs, there is likely a fit. Contact us to discuss.",
    },
    {
      question: "Do I need a lending licence to offer PayLTR financing to my customers?",
      content:
        "No. PayLTR connects your platform to Qeld, a licensed credit provider who holds the relevant regulatory authorisation. You act as a distribution channel — not a lender. You do not need a lending licence, you do not take on credit risk, and you do not need to build compliance or underwriting infrastructure.",
    },
    {
      question: "How does the partner revenue share work?",
      content:
        "Partners receive a revenue share per successfully funded 90 or 120-day deferral originated through their platform. The exact share is agreed in the partnership agreement. Payments are settled automatically via our internal ledger on the same timeline as PayLTR's platform fee collection. Contact us at info@payltr.eu to discuss partnership terms.",
    },
    {
      question: "How long does integration take?",
      content:
        "Standard API integration is designed to go live within weeks, not months. PayLTR provides full API documentation, onboarding support, and a sandbox environment for testing. More complex or custom integrations are supported on a tailored timeline.",
    },
  ],
};

export const dataSecurityFaq = {
  label: "Section 6",
  title: "Data & Security",
  boxes: [
    {
      question: "How is my bank data used?",
      content:
        "Your bank data is accessed via Ponto (Isabel NV), a regulated PSD2 open banking provider. We use it solely to assess your business cashflow and eligibility for financing. Your data is never sold, shared with third parties outside the assessment process, or used for marketing. You can revoke access at any time.",
    },
    {
      question: "What is a SEPA Direct Debit mandate and why do I need to provide one?",
      content:
        "At the start of your application, you provide your IBAN and authorise PayLTR to collect the one-time platform service fee via SEPA Direct Debit on the due date (midpoint of your deferral period). This mandate: is legally valid under EU SEPA regulations, requires no separate signed agreement — your acceptance of PayLTR's Terms & Conditions at application is sufficient, is used only for the one-time platform service fee — not for loan repayments (which are managed by Qeld), and can be disputed through your bank if incorrectly applied. We collect only what is agreed and shown to you before you submit.",
    },
    {
      question: "Is my data GDPR compliant?",
      content:
        "Yes. PayLTR operates under Dutch and EU GDPR regulations. All data is encrypted in transit (TLS 1.3) and at rest (AES-256) on AWS infrastructure. We apply privacy-by-design principles and role-based access controls. For full details, see our Privacy Policy at payltr.eu/privacy-policy.",
    },
  ],
};