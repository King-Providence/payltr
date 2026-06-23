"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import CookieBanner from "./CookieBanner";

const CONSENT_KEY = "cookie_consent_choice";

export default function CookieConsentManager() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    if (saved === "accepted" || saved === "rejected") {
      setConsent(saved);
      return;
    }
    setConsent("pending");
  }, []);

  function setChoice(choice) {
    window.localStorage.setItem(CONSENT_KEY, choice);
    setConsent(choice);
  }

  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const canRunAnalytics = consent === "accepted" && Boolean(gaId);

  return (
    <>
      {consent === "pending" && (
        <CookieBanner onAccept={() => setChoice("accepted")} onReject={() => setChoice("rejected")} />
      )}

      {canRunAnalytics && (
        <>
          <Script
            id="ga-script"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}
    </>
  );
}
