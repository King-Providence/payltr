import { getCaseStudySlugs } from "@/utils/caseStudies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const staticRoutes = [
  "",
  "/over-ons",
  "/company",
  "/producten",
  "/hoe-het-werkt",
  "/cashflow-analyse",
  "/gebruik/voorraad-financiering",
  "/gebruik/marketing-financiering",
  "/gebruik/projectfinanciering",
  "/gebruik/btw-financiering",
  "/klantverhalen",
  "/kosten-en-tarieven",
  "/veelgestelde-vragen",
  "/contact",
  "/partners",
  "/vacatures",
  "/cookiebeleid",
  "/privacybeleid",
  "/algemene-voorwaarden",
  "/terugbetalingsvoorwaarden",
  "/aanvragen",
];

export default function sitemap() {
  const now = new Date();
  const caseStudyRoutes = getCaseStudySlugs().map((slug) => `/klantverhalen/${slug}`);
  const allRoutes = [...staticRoutes, ...caseStudyRoutes];
  return allRoutes.map((route) => {
    const url = `${siteUrl}${route}`;
    return {
      url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: {
          "nl-NL": url,
          "x-default": url,
        },
      },
    };
  });
}
