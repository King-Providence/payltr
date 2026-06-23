import "./globals.css";
import "aos/dist/aos.css";
import { Manrope } from "next/font/google";
import AosProvider from "./components/AosProvider/AosProvider";
import I18nProvider from "./components/I18nProvider/I18nProvider";
import I18nDomTranslator from "./components/I18nDomTranslator/I18nDomTranslator";
import CookieConsentManager from "./components/CookieBanner/CookieConsentManager";
import SeoJsonLd from "./components/SeoJsonLd/SeoJsonLd";
import { rootMetadata } from "@/lib/pageMetadata";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = rootMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AosProvider>
          <I18nProvider>
            <I18nDomTranslator />
            <SeoJsonLd />
            {children}
            <CookieConsentManager />
          </I18nProvider>
        </AosProvider>
      </body>
    </html>
  );
}
