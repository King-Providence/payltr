/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/company", permanent: true },
      { source: "/over-ons", destination: "/company", permanent: true },
      { source: "/product", destination: "/producten", permanent: true },
      { source: "/how-it-works", destination: "/hoe-het-werkt", permanent: true },
      { source: "/audit", destination: "/cashflow-analyse", permanent: true },
      { source: "/early-access", destination: "/aanvragen", permanent: true },
      {
        source: "/use-cases/vat",
        destination: "/gebruik/btw-financiering",
        permanent: true,
      },
      {
        source: "/use-cases/inventory",
        destination: "/gebruik/voorraad-financiering",
        permanent: true,
      },
      {
        source: "/use-cases/marketing",
        destination: "/gebruik/marketing-financiering",
        permanent: true,
      },
      {
        source: "/use-cases/projects",
        destination: "/gebruik/projectfinanciering",
        permanent: true,
      },
      { source: "/privacy-policy", destination: "/privacybeleid", permanent: true },
      { source: "/terms", destination: "/algemene-voorwaarden", permanent: true },
      { source: "/careers", destination: "/vacatures", permanent: true },
      { source: "/case-studies", destination: "/klantverhalen", permanent: true },
      {
        source: "/case-studies/:slug",
        destination: "/klantverhalen/:slug",
        permanent: true,
      },
      { source: "/case-study", destination: "/klantverhalen", permanent: true },
      {
        source: "/case-study/:slug",
        destination: "/klantverhalen/:slug",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/veelgestelde-vragen",
        permanent: true,
      },
      {
        source: "/repayment-terms",
        destination: "/terugbetalingsvoorwaarden",
        permanent: true,
      },
      {
        source: "/fee-and-pricing",
        destination: "/kosten-en-tarieven",
        permanent: true,
      },
      { source: "/cookies", destination: "/cookiebeleid", permanent: true },
    ];
  },
};

export default nextConfig;
