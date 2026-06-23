/** Short site name for Open Graph `siteName`, authors, etc. */
const brandName = "PayLTR";

/** Browser tab title for `/` and any route that does not define its own `title` */
const homeTitle =
  "Zakelijke Financiering met 120 Dagen Betalingspauze | PayLTR";

const defaultDescription =
  "PayLTR geeft MKB-bedrijven tot €500.000 zakelijke financiering met 120 dagen betalingspauze voor je eerste afbetaling. Geen persoonlijke garantie. Aanvragen in 10 minuten. payltr.eu";

const defaultKeywords = [
  "business financing Netherlands",
  "zakelijke lening Nederland",
  "SME financing NL",
  "PSD2 bank connection Netherlands",
];

const LANG_EN = "en";
const LANG_NL = "nl";
const LANG_FR = "fr";
const SUPPORTED_LANGS = new Set([LANG_EN, LANG_NL, LANG_FR]);

function normalizeLang(lang) {
  const short = String(lang || LANG_EN).toLowerCase().slice(0, 2);
  return SUPPORTED_LANGS.has(short) ? short : LANG_EN;
}

function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

/** Default Open Graph / Twitter image (see `app/opengraph-image.tsx`). */
const DEFAULT_OG_IMAGE = [
  {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "PayLTR — zakelijke financiering voor MKB",
  },
];

/** @param {import('next').Metadata} meta */
function withSocial(meta) {
  let titleStr = brandName;
  if (typeof meta.title === "string") {
    titleStr = meta.title;
  } else if (
    meta.title &&
    typeof meta.title === "object" &&
    "absolute" in meta.title &&
    typeof meta.title.absolute === "string"
  ) {
    titleStr = meta.title.absolute;
  }
  const desc = meta.description ?? "";
  const ogTitle = meta.openGraph?.title ?? titleStr;
  const ogFromMeta = meta.openGraph || {};
  const { images: ogImagesOverride, ...ogRest } = ogFromMeta;
  const twFromMeta = meta.twitter || {};
  const { images: twImagesOverride, ...twRest } = twFromMeta;
  const ogImages =
    ogImagesOverride == null
      ? DEFAULT_OG_IMAGE
      : Array.isArray(ogImagesOverride)
        ? ogImagesOverride.length > 0
          ? ogImagesOverride
          : DEFAULT_OG_IMAGE
        : [ogImagesOverride];
  const twImages =
    twImagesOverride == null
      ? DEFAULT_OG_IMAGE
      : Array.isArray(twImagesOverride)
        ? twImagesOverride.length > 0
          ? twImagesOverride
          : DEFAULT_OG_IMAGE
        : [twImagesOverride];
  return {
    ...meta,
    openGraph: {
      siteName: brandName,
      type: "website",
      ...ogRest,
      title: ogTitle,
      description: ogFromMeta.description ?? desc,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      ...twRest,
      title: twFromMeta.title ?? titleStr,
      description: twFromMeta.description ?? desc,
      images: twImages,
    },
  };
}

/** @type {Record<string, import('next').Metadata>} */
const raw = {
  about: {
    title: "Over PayLTR: Zakelijke Financiering voor Nederlands MKB | PayLTR",
    description:
      "PayLTR is een Nederlandse fintech gevestigd in Rotterdam. Wij geven MKB-bedrijven 120 dagen betalingspauze op zakelijke financiering van €3.000 tot €500.000. Geen banken. Geen gedoe.",
    alternates: { canonical: "/company" },
  },
  company: {
    title: "Company | PayLTR — Liquidity Infrastructure for SMEs",
    description:
      "We're not a lender — we're the infrastructure behind the lender. Learn how PayLTR transforms liquidity pressure into financing opportunities for platforms and SMEs.",
    alternates: { canonical: "/company" },
  },
  audit: {
    title:
      "Gratis Cashflow Analyse voor MKB | Bereken Jouw Financieringskloof | PayLTR",
    description:
      "Bereken in 2 minuten hoeveel cashflow jouw bedrijf tekortkomt en hoeveel financiering je nodig hebt. Gratis tool. Geen verplichtingen. Geen persoonlijke gegevens nodig.",
    alternates: { canonical: "/cashflow-analyse" },
  },
  auth: {
    title: "Sign in | PayLTR",
    description: "Access your PayLTR account.",
    robots: { index: false, follow: false },
    alternates: { canonical: "/auth" },
  },
  careers: {
    title: "Vacatures bij PayLTR | Werken bij een Nederlandse Fintech",
    description:
      "Werk mee aan de toekomst van MKB-financiering in Nederland. Bekijk openstaande vacatures bij PayLTR, een fintech gevestigd in Rotterdam.",
    alternates: { canonical: "/vacatures" },
  },
  caseStudies: {
    title: "Klantverhalen: Hoe MKB-bedrijven PayLTR Gebruiken | PayLTR",
    description:
      "Lees hoe Nederlandse MKB-bedrijven in bouw, groothandel en e-commerce hun cashflow verbeteren met PayLTR’s 120 dagen betalingspauze.",
    alternates: { canonical: "/klantverhalen" },
  },
  contact: {
    title: "Contact PayLTR | Vragen over Zakelijke Financiering",
    description:
      "Neem contact op met PayLTR voor vragen over zakelijke financiering, jouw aanvraag of onze betalingspauze. Bereikbaar via email en telefoon. Gevestigd in Rotterdam.",
    alternates: { canonical: "/contact" },
  },
  partners: {
    title: "Partner with PayLTR | Embed Liquidity in Your Platform",
    description:
      "Offer liquidity to your customers directly inside your ecosystem. Partner with PayLTR to increase revenue, improve retention, and support SME growth.",
    alternates: { canonical: "/partners" },
  },
  cookies: {
    title: "Cookiebeleid | Hoe PayLTR Cookies Gebruikt | PayLTR",
    description:
      "Lees hoe PayLTR cookies gebruikt, waarvoor ze dienen en hoe je je voorkeuren beheert. Volledig in lijn met AVG en Nederlandse telecomwet.",
    alternates: { canonical: "/cookiebeleid" },
  },
  earlyAccess: {
    title: "Zakelijke Financiering Aanvragen | €3.000 tot €500.000 | PayLTR",
    description:
      "Vraag vandaag zakelijke financiering aan bij PayLTR. Bedragen van €3.000 tot €500.000. 120 dagen voor je eerste terugbetaling. 0% rente. Aanvragen duurt 10 minuten.",
    alternates: { canonical: "/aanvragen" },
  },
  feeAndPricing: {
    title: "Kosten en Tarieven: MKB-financiering Uitgelegd | PayLTR",
    description:
      "Transparante PayLTR-tarieven: gebruiksvergoeding plus succesfee op basis van financieringsbedrag. Geen verborgen kosten. 0% rente op terugbetaling.",
    alternates: { canonical: "/kosten-en-tarieven" },
  },
  faq: {
    title: "Veelgestelde Vragen over MKB-financiering | PayLTR",
    description:
      "Bekijk antwoorden over PayLTR-financiering: bedragen, terugbetaling, kosten, aanvraagproces, PSD2-bankkoppeling en betalingspauze.",
    alternates: { canonical: "/veelgestelde-vragen" },
  },
  thankyou: {
    title: "Application received | PayLTR",
    description:
      "Your PayLTR application has been received. Confirmation details, reference number, and next steps.",
    robots: { index: false, follow: true },
    alternates: { canonical: "/thankyou" },
  },
  howItWorks: {
    title: "Hoe Werkt PayLTR? Zakelijke Financiering in 6 Stappen | PayLTR",
    description:
      "Zo werkt PayLTR: aanvragen in 10 minuten, identiteitscheck via Didit, bankverbinding via Ponto, beslissing dezelfde dag. Geld op je rekening binnen 24 uur.",
    alternates: { canonical: "/how-it-works" },
  },
  privacyPolicy: {
    title: "Privacybeleid | PayLTR Zakelijke Financiering",
    description:
      "Lees het privacybeleid van PayLTR. Hoe wij omgaan met jouw persoonsgegevens conform de AVG. PayLTR is een Nederlandse fintech gevestigd in Rotterdam.",
    alternates: { canonical: "/privacybeleid" },
  },
  product: {
    title: "Onze Producten: Betalingspauze Financiering voor MKB | PayLTR",
    description:
      "Ontdek PayLTR's zakelijke financieringsproducten. 120-dagen betalingspauze, 0% rente op terugbetaling, geen persoonlijke garantie. Gebouwd voor Nederlands MKB.",
    alternates: { canonical: "/producten" },
  },
  repaymentTerms: {
    title: "Terugbetalingsvoorwaarden: Zo Werkt de 24-Maandenstructuur",
    description:
      "Begrijp de terugbetalingsstructuur van PayLTR: tot 120 dagen betalingspauze gevolgd door 24 vaste maandtermijnen. 0% rente op terugbetaling.",
    alternates: { canonical: "/terugbetalingsvoorwaarden" },
  },
  terms: {
    title: "Algemene Voorwaarden | PayLTR Zakelijke Financiering",
    description:
      "Lees de algemene voorwaarden van PayLTR voor zakelijke financiering. Van toepassing op alle overeenkomsten tussen PayLTR en zakelijke klanten in Nederland.",
    alternates: { canonical: "/algemene-voorwaarden" },
  },
  useCaseInventory: {
    title: "Voorraad Financiering MKB: Betaal Leveranciers Vandaag | PayLTR",
    description:
      "Leverancier wil vooruitbetaling maar jouw klanten betalen je pas over 30-60 dagen? PayLTR overbrugt dat gat. 120 dagen betalingspauze. Aanvragen duurt 10 minuten.",
    alternates: { canonical: "/gebruik/voorraad-financiering" },
  },
  useCaseMarketing: {
    title: "Marketingcampagne Financieren voor MKB | PayLTR",
    description:
      "Wil je investeren in marketing maar heb je het geld er nu niet voor? PayLTR financiert jouw campagnebudget met 120 dagen uitstel. 0% rente. Zakelijk, geen persoonlijke check.",
    alternates: { canonical: "/gebruik/marketing-financiering" },
  },
  useCaseProjects: {
    title:
      "Projectfinanciering MKB: Materialen en Kosten Voorfinancieren | PayLTR",
    description:
      "Projectkosten betalen voordat jouw klant betaalt? PayLTR geeft aannemers en dienstverleners 120 dagen voor hun eerste terugbetaling. Geen persoonlijke garantie.",
    alternates: { canonical: "/gebruik/projectfinanciering" },
  },
  useCaseVat: {
    title: "BTW Financiering voor MKB: Belastingaangifte Overbruggen | PayLTR",
    description:
      "Geen geld om BTW op tijd te betalen? PayLTR financiert jouw belastingaangifte met 120 dagen uitstel van betaling. Geen boetes. Geen rente op terugbetaling. Aanvragen in 10 minuten.",
    alternates: { canonical: "/gebruik/btw-financiering" },
  },
};

/** @type {Record<string, import('next').Metadata>} */
export const PAGE_METADATA = Object.fromEntries(
  Object.entries(raw).map(([k, v]) => [k, withSocial(v)])
);

/**
 * @param {keyof typeof raw} key
 * @returns {import('next').Metadata}
 */
export function pageMetadata(key) {
  const m = PAGE_METADATA[key];
  if (!m) {
    throw new Error(`pageMetadata: unknown key "${key}"`);
  }
  return m;
}

/** Site-wide defaults and home page meta (/) */
export const rootMetadata = {
  metadataBase: new URL(siteUrl()),
  /**
   * No `template`: child routes use their own `title` string as-is.
   * Routes without a `title` inherit `default` (same as home).
   */
  title: {
    default: homeTitle,
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  authors: [{ name: brandName }],
  creator: brandName,
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
    languages: {
      "nl-NL": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    siteName: brandName,
    type: "website",
    url: siteUrl(),
    title: homeTitle,
    description: defaultDescription,
    locale: "nl_NL",
    images: DEFAULT_OG_IMAGE,
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: defaultDescription,
    images: DEFAULT_OG_IMAGE,
  },
};

const LOCALIZED_ROUTE_META = {
  "/": {
    nl: {
      title: "Zakelijke Financiering met 120 Dagen Betalingspauze | PayLTR",
      description:
        "PayLTR geeft MKB-bedrijven tot €500.000 zakelijke financiering met 120 dagen betalingspauze voor je eerste afbetaling. Geen persoonlijke garantie. Aanvragen in 10 minuten. payltr.eu",
    },
    en: {
      title: "Zakelijke Financiering met 120 Dagen Betalingspauze | PayLTR",
      description:
        "PayLTR geeft MKB-bedrijven tot €500.000 zakelijke financiering met 120 dagen betalingspauze voor je eerste afbetaling. Geen persoonlijke garantie. Aanvragen in 10 minuten. payltr.eu",
    },
    fr: {
      title: "Zakelijke Financiering met 120 Dagen Betalingspauze | PayLTR",
      description:
        "PayLTR geeft MKB-bedrijven tot €500.000 zakelijke financiering met 120 dagen betalingspauze voor je eerste afbetaling. Geen persoonlijke garantie. Aanvragen in 10 minuten. payltr.eu",
    },
  },
  "/how-it-works": {
    nl: {
      title: "Hoe Werkt PayLTR? Zakelijke Financiering in 6 Stappen | PayLTR",
      description:
        "Zo werkt PayLTR: aanvragen in 10 minuten, identiteitscheck via Didit, bankverbinding via Ponto, beslissing dezelfde dag. Geld op je rekening binnen 24 uur.",
    },
    en: {
      title: "Hoe Werkt PayLTR? Zakelijke Financiering in 6 Stappen | PayLTR",
      description:
        "Zo werkt PayLTR: aanvragen in 10 minuten, identiteitscheck via Didit, bankverbinding via Ponto, beslissing dezelfde dag. Geld op je rekening binnen 24 uur.",
    },
    fr: {
      title: "Hoe Werkt PayLTR? Zakelijke Financiering in 6 Stappen | PayLTR",
      description:
        "Zo werkt PayLTR: aanvragen in 10 minuten, identiteitscheck via Didit, bankverbinding via Ponto, beslissing dezelfde dag. Geld op je rekening binnen 24 uur.",
    },
  },
  "/cashflow-analyse": {
    nl: {
      title:
        "Gratis Cashflow Analyse voor MKB | Bereken Jouw Financieringskloof | PayLTR",
      description:
        "Bereken in 2 minuten hoeveel cashflow jouw bedrijf tekortkomt en hoeveel financiering je nodig hebt. Gratis tool. Geen verplichtingen. Geen persoonlijke gegevens nodig.",
    },
    en: {
      title:
        "Gratis Cashflow Analyse voor MKB | Bereken Jouw Financieringskloof | PayLTR",
      description:
        "Bereken in 2 minuten hoeveel cashflow jouw bedrijf tekortkomt en hoeveel financiering je nodig hebt. Gratis tool. Geen verplichtingen. Geen persoonlijke gegevens nodig.",
    },
    fr: {
      title:
        "Gratis Cashflow Analyse voor MKB | Bereken Jouw Financieringskloof | PayLTR",
      description:
        "Bereken in 2 minuten hoeveel cashflow jouw bedrijf tekortkomt en hoeveel financiering je nodig hebt. Gratis tool. Geen verplichtingen. Geen persoonlijke gegevens nodig.",
    },
  },
  "/aanvragen": {
    nl: {
      title: "Zakelijke Financiering Aanvragen | €3.000 tot €500.000 | PayLTR",
      description:
        "Vraag vandaag zakelijke financiering aan bij PayLTR. Bedragen van €3.000 tot €500.000. 120 dagen voor je eerste terugbetaling. 0% rente. Aanvragen duurt 10 minuten.",
    },
    en: {
      title: "Zakelijke Financiering Aanvragen | €3.000 tot €500.000 | PayLTR",
      description:
        "Vraag vandaag zakelijke financiering aan bij PayLTR. Bedragen van €3.000 tot €500.000. 120 dagen voor je eerste terugbetaling. 0% rente. Aanvragen duurt 10 minuten.",
    },
    fr: {
      title: "Zakelijke Financiering Aanvragen | €3.000 tot €500.000 | PayLTR",
      description:
        "Vraag vandaag zakelijke financiering aan bij PayLTR. Bedragen van €3.000 tot €500.000. 120 dagen voor je eerste terugbetaling. 0% rente. Aanvragen duurt 10 minuten.",
    },
  },
  "/producten": {
    nl: {
      title: "Onze Producten: Betalingspauze Financiering voor MKB | PayLTR",
      description:
        "Ontdek PayLTR's zakelijke financieringsproducten. 120-dagen betalingspauze, 0% rente op terugbetaling, geen persoonlijke garantie. Gebouwd voor Nederlands MKB.",
    },
    en: {
      title: "Onze Producten: Betalingspauze Financiering voor MKB | PayLTR",
      description:
        "Ontdek PayLTR's zakelijke financieringsproducten. 120-dagen betalingspauze, 0% rente op terugbetaling, geen persoonlijke garantie. Gebouwd voor Nederlands MKB.",
    },
    fr: {
      title: "Onze Producten: Betalingspauze Financiering voor MKB | PayLTR",
      description:
        "Ontdek PayLTR's zakelijke financieringsproducten. 120-dagen betalingspauze, 0% rente op terugbetaling, geen persoonlijke garantie. Gebouwd voor Nederlands MKB.",
    },
  },
  "/gebruik/btw-financiering": {
    nl: {
      title:
        "BTW Financiering voor MKB: Belastingaangifte Overbruggen | PayLTR",
      description:
        "Geen geld om BTW op tijd te betalen? PayLTR financiert jouw belastingaangifte met 120 dagen uitstel van betaling. Geen boetes. Geen rente op terugbetaling. Aanvragen in 10 minuten.",
    },
    en: {
      title:
        "BTW Financiering voor MKB: Belastingaangifte Overbruggen | PayLTR",
      description:
        "Geen geld om BTW op tijd te betalen? PayLTR financiert jouw belastingaangifte met 120 dagen uitstel van betaling. Geen boetes. Geen rente op terugbetaling. Aanvragen in 10 minuten.",
    },
    fr: {
      title:
        "BTW Financiering voor MKB: Belastingaangifte Overbruggen | PayLTR",
      description:
        "Geen geld om BTW op tijd te betalen? PayLTR financiert jouw belastingaangifte met 120 dagen uitstel van betaling. Geen boetes. Geen rente op terugbetaling. Aanvragen in 10 minuten.",
    },
  },
  "/gebruik/voorraad-financiering": {
    nl: {
      title: "Voorraad Financiering MKB: Betaal Leveranciers Vandaag | PayLTR",
      description:
        "Leverancier wil vooruitbetaling maar jouw klanten betalen je pas over 30-60 dagen? PayLTR overbrugt dat gat. 120 dagen betalingspauze. Aanvragen duurt 10 minuten.",
    },
    en: {
      title: "Voorraad Financiering MKB: Betaal Leveranciers Vandaag | PayLTR",
      description:
        "Leverancier wil vooruitbetaling maar jouw klanten betalen je pas over 30-60 dagen? PayLTR overbrugt dat gat. 120 dagen betalingspauze. Aanvragen duurt 10 minuten.",
    },
    fr: {
      title: "Voorraad Financiering MKB: Betaal Leveranciers Vandaag | PayLTR",
      description:
        "Leverancier wil vooruitbetaling maar jouw klanten betalen je pas over 30-60 dagen? PayLTR overbrugt dat gat. 120 dagen betalingspauze. Aanvragen duurt 10 minuten.",
    },
  },
  "/gebruik/marketing-financiering": {
    nl: {
      title: "Marketingcampagne Financieren voor MKB | PayLTR",
      description:
        "Wil je investeren in marketing maar heb je het geld er nu niet voor? PayLTR financiert jouw campagnebudget met 120 dagen uitstel. 0% rente. Zakelijk, geen persoonlijke check.",
    },
    en: {
      title: "Marketingcampagne Financieren voor MKB | PayLTR",
      description:
        "Wil je investeren in marketing maar heb je het geld er nu niet voor? PayLTR financiert jouw campagnebudget met 120 dagen uitstel. 0% rente. Zakelijk, geen persoonlijke check.",
    },
    fr: {
      title: "Marketingcampagne Financieren voor MKB | PayLTR",
      description:
        "Wil je investeren in marketing maar heb je het geld er nu niet voor? PayLTR financiert jouw campagnebudget met 120 dagen uitstel. 0% rente. Zakelijk, geen persoonlijke check.",
    },
  },
  "/gebruik/projectfinanciering": {
    nl: {
      title:
        "Projectfinanciering MKB: Materialen en Kosten Voorfinancieren | PayLTR",
      description:
        "Projectkosten betalen voordat jouw klant betaalt? PayLTR geeft aannemers en dienstverleners 120 dagen voor hun eerste terugbetaling. Geen persoonlijke garantie.",
    },
    en: {
      title:
        "Projectfinanciering MKB: Materialen en Kosten Voorfinancieren | PayLTR",
      description:
        "Projectkosten betalen voordat jouw klant betaalt? PayLTR geeft aannemers en dienstverleners 120 dagen voor hun eerste terugbetaling. Geen persoonlijke garantie.",
    },
    fr: {
      title:
        "Projectfinanciering MKB: Materialen en Kosten Voorfinancieren | PayLTR",
      description:
        "Projectkosten betalen voordat jouw klant betaalt? PayLTR geeft aannemers en dienstverleners 120 dagen voor hun eerste terugbetaling. Geen persoonlijke garantie.",
    },
  },
  "/over-ons": {
    nl: {
      title: "Over PayLTR: Zakelijke Financiering voor Nederlands MKB | PayLTR",
      description:
        "PayLTR is een Nederlandse fintech gevestigd in Rotterdam. Wij geven MKB-bedrijven 120 dagen betalingspauze op zakelijke financiering van €3.000 tot €500.000. Geen banken. Geen gedoe.",
    },
    en: {
      title: "Over PayLTR: Zakelijke Financiering voor Nederlands MKB | PayLTR",
      description:
        "PayLTR is een Nederlandse fintech gevestigd in Rotterdam. Wij geven MKB-bedrijven 120 dagen betalingspauze op zakelijke financiering van €3.000 tot €500.000. Geen banken. Geen gedoe.",
    },
    fr: {
      title: "Over PayLTR: Zakelijke Financiering voor Nederlands MKB | PayLTR",
      description:
        "PayLTR is een Nederlandse fintech gevestigd in Rotterdam. Wij geven MKB-bedrijven 120 dagen betalingspauze op zakelijke financiering van €3.000 tot €500.000. Geen banken. Geen gedoe.",
    },
  },
  "/contact": {
    nl: {
      title: "Contact PayLTR | Vragen over Zakelijke Financiering",
      description:
        "Neem contact op met PayLTR voor vragen over zakelijke financiering, jouw aanvraag of onze betalingspauze. Bereikbaar via email en telefoon. Gevestigd in Rotterdam.",
    },
    en: {
      title: "Contact PayLTR | Vragen over Zakelijke Financiering",
      description:
        "Neem contact op met PayLTR voor vragen over zakelijke financiering, jouw aanvraag of onze betalingspauze. Bereikbaar via email en telefoon. Gevestigd in Rotterdam.",
    },
    fr: {
      title: "Contact PayLTR | Vragen over Zakelijke Financiering",
      description:
        "Neem contact op met PayLTR voor vragen over zakelijke financiering, jouw aanvraag of onze betalingspauze. Bereikbaar via email en telefoon. Gevestigd in Rotterdam.",
    },
  },
  "/privacybeleid": {
    nl: {
      title: "Privacybeleid | PayLTR Zakelijke Financiering",
      description:
        "Lees het privacybeleid van PayLTR. Hoe wij omgaan met jouw persoonsgegevens conform de AVG. PayLTR is een Nederlandse fintech gevestigd in Rotterdam.",
    },
    en: {
      title: "Privacybeleid | PayLTR Zakelijke Financiering",
      description:
        "Lees het privacybeleid van PayLTR. Hoe wij omgaan met jouw persoonsgegevens conform de AVG. PayLTR is een Nederlandse fintech gevestigd in Rotterdam.",
    },
    fr: {
      title: "Privacybeleid | PayLTR Zakelijke Financiering",
      description:
        "Lees het privacybeleid van PayLTR. Hoe wij omgaan met jouw persoonsgegevens conform de AVG. PayLTR is een Nederlandse fintech gevestigd in Rotterdam.",
    },
  },
  "/algemene-voorwaarden": {
    nl: {
      title: "Algemene Voorwaarden | PayLTR Zakelijke Financiering",
      description:
        "Lees de algemene voorwaarden van PayLTR voor zakelijke financiering. Van toepassing op alle overeenkomsten tussen PayLTR en zakelijke klanten in Nederland.",
    },
    en: {
      title: "Algemene Voorwaarden | PayLTR Zakelijke Financiering",
      description:
        "Lees de algemene voorwaarden van PayLTR voor zakelijke financiering. Van toepassing op alle overeenkomsten tussen PayLTR en zakelijke klanten in Nederland.",
    },
    fr: {
      title: "Algemene Voorwaarden | PayLTR Zakelijke Financiering",
      description:
        "Lees de algemene voorwaarden van PayLTR voor zakelijke financiering. Van toepassing op alle overeenkomsten tussen PayLTR en zakelijke klanten in Nederland.",
    },
  },
  "/klantverhalen": {
    nl: {
      title: "Klantverhalen: Hoe MKB-bedrijven PayLTR Gebruiken | PayLTR",
      description:
        "Lees hoe Nederlandse MKB-bedrijven in bouw, groothandel en e-commerce hun cashflow verbeteren met PayLTR’s 120 dagen betalingspauze.",
    },
    en: {
      title: "Customer Stories: How SMEs Use PayLTR | PayLTR",
      description:
        "Read how Dutch SMEs in construction, wholesale, and e-commerce improve cashflow using PayLTR's 120-day payment pause. Real businesses, real results.",
    },
  },
  "/terugbetalingsvoorwaarden": {
    nl: {
      title: "Terugbetalingsvoorwaarden: Zo Werkt de 24-Maandenstructuur",
      description:
        "Begrijp de terugbetalingsstructuur van PayLTR: tot 120 dagen betalingspauze gevolgd door 24 vaste maandtermijnen. 0% rente op terugbetaling.",
    },
    en: {
      title: "Repayment Terms: How the 24-Month Structure Works | PayLTR",
      description:
        "Understand PayLTR's repayment structure: up to 120 days payment pause followed by 24 fixed monthly installments. 0% interest on repayments. Early repayment allowed.",
    },
  },
  "/vacatures": {
    nl: {
      title: "Vacatures bij PayLTR | Werken bij een Nederlandse Fintech",
      description:
        "Werk mee aan de toekomst van MKB-financiering in Nederland. Bekijk openstaande vacatures bij PayLTR, een fintech gevestigd in Rotterdam.",
    },
    en: {
      title: "Careers at PayLTR | Join a Dutch Fintech | PayLTR",
      description:
        "Join PayLTR and help shape the future of SME financing in the Netherlands. Explore open roles at our Rotterdam-based fintech company.",
    },
  },
  "/veelgestelde-vragen": {
    nl: {
      title: "Veelgestelde Vragen over MKB-financiering | PayLTR",
      description:
        "Bekijk antwoorden over PayLTR-financiering: bedragen, terugbetaling, kosten, aanvraagproces, PSD2-bankkoppeling en betalingspauze.",
    },
    en: {
      title: "Frequently Asked Questions About SME Financing | PayLTR",
      description:
        "Find answers about PayLTR financing: loan amounts, repayment, fees, application process, PSD2 bank connection, and payment pause.",
    },
  },
  "/kosten-en-tarieven": {
    nl: {
      title: "Kosten en Tarieven: MKB-financiering Uitgelegd | PayLTR",
      description:
        "Transparante PayLTR-tarieven: gebruiksvergoeding plus succesfee op basis van financieringsbedrag. Geen verborgen kosten. 0% rente op terugbetaling.",
    },
    en: {
      title: "Fees & Pricing: SME Financing Costs Explained | PayLTR",
      description:
        "Transparent PayLTR pricing: service fee + success fee based on financing amount. No hidden costs. 0% interest on repayment. Full overview available.",
    },
  },
  "/cookiebeleid": {
    nl: {
      title: "Cookiebeleid | Hoe PayLTR Cookies Gebruikt | PayLTR",
      description:
        "Lees hoe PayLTR cookies gebruikt, waarvoor ze dienen en hoe je je voorkeuren beheert. Volledig in lijn met AVG en Nederlandse telecomwet.",
    },
    en: {
      title: "Cookie Policy | How PayLTR Uses Cookies | PayLTR",
      description:
        "Learn how PayLTR uses cookies, for what purpose, and how you can manage your preferences. Fully compliant with GDPR and Dutch telecom law.",
    },
  },
};

/**
 * @param {Record<string, { title?: string; description?: string }> | null | undefined} routeMeta
 * @returns {{ title?: string; description?: string; sourceLang: string } | null}
 */
export function pickRouteMetaSource(routeMeta) {
  if (!routeMeta) return null;
  if (routeMeta.nl?.title || routeMeta.nl?.description) {
    return {
      title: routeMeta.nl.title,
      description: routeMeta.nl.description,
      sourceLang: LANG_NL,
    };
  }
  if (routeMeta.en?.title || routeMeta.en?.description) {
    return {
      title: routeMeta.en.title,
      description: routeMeta.en.description,
      sourceLang: LANG_EN,
    };
  }
  if (routeMeta.fr?.title || routeMeta.fr?.description) {
    return {
      title: routeMeta.fr.title,
      description: routeMeta.fr.description,
      sourceLang: LANG_FR,
    };
  }
  return null;
}

export function getLocalizedRouteMeta(pathname, lang) {
  const route = LOCALIZED_ROUTE_META[pathname];
  if (!route) return null;
  const resolvedLang = normalizeLang(lang);
  return route[resolvedLang] || route[LANG_EN] || null;
}

export function getRouteMetaByPath(pathname) {
  return LOCALIZED_ROUTE_META[pathname] || null;
}
