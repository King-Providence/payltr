"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import schemaData from "@/lib/seoSchemas.json";

const FAQ_ROUTES = new Set(["/", "/how-it-works"]);

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://payltr.eu";
}

function withAbsoluteUrl(path) {
  const base = getBaseUrl();
  return `${base}${path}`;
}

function getFinancialServiceSchema() {
  const base = getBaseUrl();
  return {
    ...schemaData.financialService,
    url: base,
    logo: withAbsoluteUrl("/assets/companyLogo.svg"),
  };
}

function getFaqSchema(pathname) {
  if (!FAQ_ROUTES.has(pathname)) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: schemaData.faq.shared.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function getBreadcrumbSchema(pathname) {
  const crumbs = schemaData.breadcrumbs[pathname];
  if (!crumbs || crumbs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: withAbsoluteUrl(item.path),
    })),
  };
}

export default function SeoJsonLd() {
  const pathname = usePathname() || "/";
  const financialServiceSchema = getFinancialServiceSchema();
  const faqSchema = getFaqSchema(pathname);
  const breadcrumbSchema = getBreadcrumbSchema(pathname);

  return (
    <>
      <Script
        id="schema-financial-service"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(financialServiceSchema)}
      </Script>

      {faqSchema && (
        <Script id="schema-faq" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqSchema)}
        </Script>
      )}

      {breadcrumbSchema && (
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(breadcrumbSchema)}
        </Script>
      )}
    </>
  );
}
