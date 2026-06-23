import { FaRegCalendarAlt } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuRefreshCcw } from "react-icons/lu";

export const RepaymentHeroSectionContent ={
    // icon: <MdAccessTime/>,
    title:"How Deferred Payment & Repayment Works",
    description:`Understanding the structure and transparency of our financing solutions.`,
    image:"/assets/repaymentHero.svg",
    width: "600px",
  }

export const openBankingSectionContent = [
  {
    title: `What "Deferred Payment" Means`,
    body:"Deferred payment gives your business time before principal repayment starts.",
    list: [
      { content:"You receive funding immediately", icon:" 1"},
      { content:"Principal repayment starts later", icon:"2"},
      { content:"The deferred period is policy-based and determined per business", icon:"3"},
      { content:"Deferred payment does not mean free financing. During the deferred period, usage costs set by the lender may still apply."},
    ],
    image: "/assets/repayment/image1.png",
  },
  {
    title: `The Deferred (Amortization-Free) Period`,
    body:"Deferred payment gives your business time before principal repayment starts.",
    keypoints: [
      {
        title: `During the deferred period:`,
        points: [
          { content: "No repayment of the loan principal" },
          { content: "No manual actions required from the customer" },
          { content: "The duration is determined upfront based on business cashflow signals" },
        ],
      },
      {
        title: `Key characteristics:`,
        points: [
          { content: "Fixed at onboarding" },
          { content: "Cannot be extended or renegotiated later" },
          { content: "Designed to give businesses operational breathing room" },
        ],
      },
    ],
    image: "/assets/repayment/image2.png",
  },
  
  {
    title: "The Repayment Phase (Predictable & Fixed)",
    body: "After the deferred period ends:",
    list: [
      { content:"Repayment starts automatically", icon:" 1"},
      { content:"The total loan amount is repaid over 24 fixed monthly installments", icon:"2"},
      { content:"No renegotiation is required at this stage", icon:"3"},
    ],
    newList: [
      { content:"Predictability" },
      { content:"Clear cashflow planning" },
      { content:"No surprises" },
    ],
    lastContent: "Early repayment is handled directly by the lender, under their terms.",
    image: "/assets/repayment/image3.png",
  },
  {
    title: "How PayLTR Supports Repayment (Without Holding Funds)",
    body: "PayLTR does not lend money and does not collect repayments.",
    list: [
      { content:"Instead, PayLTR:"},
      { content:"Monitors business cashflow signals", icon:" 1"},
      { content:"Identifies early risk indicators", icon:"2"},
      { content:"Shares insights with the lender", icon:"3"},
    ],
    lastContent: "All actual payments are collected by the licensed lender.",
    image: "/assets/repayment/image4.jpg",
  },
  {
    title: "Transparency & Responsibility",
    body:"PayLTR is designed for responsible business financing:",
    list: [
      { content:"No personal guarantees", icon:" 1"},
      { content:"No personal credit checks", icon:"2"},
      { content:"No hidden mechanics", icon:"3"},
      { content:"Clear separation of roles", icon:"4"},
    ],
    image: "/assets/repayment/image5.png",
  },
  {
    title: "Important Boundaries",
    keypoints: [
      {
        title: `PayLTR:`,
        points: [
          { content: "Does not set interest or usage costs" },
          { content: "Does not renegotiate loan terms" },
          { content: "Does not hold or move customer funds" },
        ],
      },
      {
        title: `The Lender:`,
        points: [
          { content: "Sets pricing and fees" },
          { content: "Executes collections" },
          { content: "Manages the loan under its license" },
        ],
      },
    ],
    image: "/assets/repayment/image6.jpg",
  },
];