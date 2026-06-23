import { LuLock } from "react-icons/lu";
import { TbShield } from "react-icons/tb";
import { LuZap } from "react-icons/lu";

export const getStartedContent={
    title:"Ready to improve your cashflow?",
    description:"Start your financing in minutes with our simple application process.",
    lists:[
       {icon:<LuLock />, text:"Read-only access"},
       {icon:<TbShield />, text:"No data stored"},
       {icon:<LuZap />, text:"Instant decisions"},
    ],
    buttonText:"Get Started Now",
    buttonLink:"/aanvragen"
}


export const AuditHeroSectionContent ={
  title:"See what our system sees about your business.",
  description:"Enter a few numbers and we'll show you your projected cashflow gap, how many days of runway you have, and how much financing would cover it. This is the same analysis we run when you apply — no obligation, no account needed.",
  label:"FREE CASHFLOW ANALYSIS",
  lists:[
    "Read-only bank data — we cannot move money",
    "No personal credit check",
    "Result in under 2 minutes",
    "No obligation to apply",
  ],
  image:"/assets/home/audit.svg",
}