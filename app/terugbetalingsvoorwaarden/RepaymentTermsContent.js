"use client";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import { translateUtilContent } from "@/lib/translateUtilContent";
import HowItWorksHeroSection from "../components/howItWorks/HowItWorksHeroSection/HowItWorksHeroSection";
import HowDeffered from "../components/RepaymentSection/HowDeffered/HowDeffered";
import { openBankingSectionContent, RepaymentHeroSectionContent } from "@/utils/repayment";

export default function RepaymentTermsContent() {
  const { t } = useTranslation();

  const heroContent = useMemo(
    () => translateUtilContent(RepaymentHeroSectionContent, t),
    [t]
  );

  const deferredContent = useMemo(() => {
    return translateUtilContent(openBankingSectionContent, t);
  }, [t]);

  return (
    <>
      <HowItWorksHeroSection content={heroContent} />
      <HowDeffered content={deferredContent} />
      <div className="flex items-center justify-center pb-[2rem] md:pb-[3rem] md:px-28 px-4 font-semibold w-full mx-auto text-left text-xs md:text-sm text-black">
        PayLTR financing consists of two phases. Phase 1 is the payment break: you have up to 120 days before any repayment is required. During this period, a user fee is charged by Qeld, our licensed financing partner. Phase 2 is the repayment period: starting after day 120, you repay your financing in 24 equal monthly instalments at 0% interest. There are no penalties for early repayment — you can pay off your balance in full at any time, and no additional fees will be charged.
        </div>
    </>
  );
}
