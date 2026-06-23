import { FaRegCalendarAlt } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuRefreshCcw } from "react-icons/lu";

export const ProductHeroSectionContent ={
    // icon: <MdAccessTime/>,
    title:"Product",
    description:`"The pay later option is a lifesaver in project-based industries." - Construction supplier`,
    image:"/assets/product/productHero.png",
    width: "450px",
  }

export const getStartedContent={
    title:"Ready to get started?",
    description:"See how much capital is locked in your business. Get your free audit in minutes.",
    buttonText:"Start Audit Now",
    buttonLink:"/cashflow-analyse"
}

export const openBankingSectionContent = [
  {
    title: "Repay over 24 months, interest-free",
    body:"Your cash flow comes first. After your payment break period, repayments are spread over 24 months interest-free.",
    list: [
      {title:"Monthly payments", content:"Equal instalments over 24 months", icon:<FaRegCalendarAlt/>},
      {title:"Zero interest", content:"Always - no hidden fees", icon:<BsCurrencyDollar/>},
      {title:"Flexible timing", content:"Matches your revenue flow", icon:<LuRefreshCcw/>},
    ],
    image: "/assets/product/whyChoose1.png",
  },
  {
    title: "Open Banking",
    subtitle: "Secure PSD2 connection via Ponto.",
    body:"Connect your bank account in seconds with our PSD2-compliant integration. We analyze transaction patterns to offer fair, real-time credit limits.",
    image: "/assets/product/whyChoose2.png",
  },
  {
    title: "CoC Auto-fill",
    subtitle: "Instant company data lookup.",
    body:"No manual entry. Just type your company name, and we pull verified data directly from the Chamber of Commerce (KvK).",
    image: "/assets/product/whyChoose3.png",
  },
  {
    title: "Credit Insights",
    subtitle: "Powered by PayLTR analytics.",
    body:"Get a clear view of your financial health. Our PayLTR-powered engine highlights risks and opportunities in your cashflow.",
    image: "/assets/product/whyChoose4.png",
  },
  {
    title: "Instant Decision",
    subtitle: "Approval within minutes.",
    body:"Stop waiting for weeks. Our automated risk engine provides financing decisions in minutes, not days.",
    image: "/assets/product/whyChoose5.png",
  },
];