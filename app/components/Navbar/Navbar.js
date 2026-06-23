'use client';

import { useEffect, useRef, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { FiGlobe } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

import "@/lib/i18n";
import i18n from "@/lib/i18n";

/** Native names only — not passed through i18n so they never change with site language */
const LANGUAGE_OPTIONS = [
  { label: "Nederlands", code: "NL" },
  { label: "English", code: "EN" },
  { label: "Français", code: "FR" },
];

const REGION_DISPLAY = {
  EN: "UK",
  NL: "NL",
  FR: "FR",
};

const NAV_LINKS = [
  { labelKey: "navbar.home", fallback: "Home", href: "/" },
  { labelKey: "navbar.partners", fallback: "Partners", href: "/partners" },
  { labelKey: "navbar.company", fallback: "Company", href: "/company" },
  { labelKey: "navbar.howItWorks", fallback: "How it works", href: "/how-it-works" },
];

function MenuBurgerIcon({ open }) {
  return (
    <span className={`${styles.burger} ${open ? styles.burgerOpen : ""}`} aria-hidden="true">
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
    </span>
  );
}

function isNavActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLanguageCode, setSelectedLanguageCode] = useState("EN");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const langCloseTimer = useRef(null);
  const mobileNavOpenRef = useRef(false);
  const languageCodeMap = { EN: "en", NL: "nl", FR: "fr" };
  const reverseLanguageCodeMap = { en: "EN", nl: "NL", fr: "FR" };

  useEffect(() => {
    mobileNavOpenRef.current = mobileNavOpen;
  }, [mobileNavOpen]);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (typeof window !== "undefined" && window.innerWidth > 1024) {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMobileNavOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileNavOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY || 0;

    const onScroll = () => {
      if (mobileNavOpenRef.current) {
        setHidden(false);
        lastScrollY.current = window.scrollY || 0;
        return;
      }

      const y = window.scrollY || 0;
      const diff = y - lastScrollY.current;
      const threshold = 8;

      if (y <= 10) {
        setHidden(false);
      } else if (diff > threshold) {
        setHidden(true);
      } else if (diff < -threshold) {
        setHidden(false);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedCode = window.sessionStorage.getItem("appLanguageCode");
    const initialCode = savedCode && languageCodeMap[savedCode] ? savedCode : "EN";
    i18n.changeLanguage(languageCodeMap[initialCode]);
    setSelectedLanguageCode(initialCode);
  }, []);

  useEffect(() => {
    const syncLanguageCode = (lng) => {
      const currentLanguage = (lng || "en").slice(0, 2);
      setSelectedLanguageCode(reverseLanguageCodeMap[currentLanguage] || "EN");
    };

    syncLanguageCode(i18n.resolvedLanguage || i18n.language);
    i18n.on("languageChanged", syncLanguageCode);

    return () => {
      i18n.off("languageChanged", syncLanguageCode);
    };
  }, []);

  const onLanguageEnter = () => {
    if (langCloseTimer.current) clearTimeout(langCloseTimer.current);
    setIsLangOpen(true);
  };

  const onLanguageLeave = () => {
    if (langCloseTimer.current) clearTimeout(langCloseTimer.current);
    langCloseTimer.current = setTimeout(() => setIsLangOpen(false), 140);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const setLanguage = (code) => {
    setSelectedLanguageCode(code);
    i18n.changeLanguage(languageCodeMap[code]);
    window.sessionStorage.setItem("appLanguageCode", code);
    setIsLangOpen(false);
  };

  const regionLabel = REGION_DISPLAY[selectedLanguageCode] || selectedLanguageCode;

  return (
    <>
    <header
      className={`${styles.header} ${hidden ? styles.hidden : ""}`}
      data-i18n-skip="true"
      translate="no"
    >
      <div className={styles.left}>
        <Link href="/">
        <Image src="/assets/companyLogo.svg" alt="PayLTR" width={100} height={100} className={styles.logoImg} />
        </Link>
      </div>

      <nav className={styles.center} aria-label="Primary">
        {NAV_LINKS.map((item) => {
          const active = isNavActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
              href={item.href}
            >
              {t(item.labelKey, { defaultValue: item.fallback })}
            </Link>
          );
        })}
      </nav>

      <div className={styles.right}>
        <div
          className={styles.langWrapper}
          data-i18n-skip="true"
          translate="no"
          onMouseEnter={onLanguageEnter}
          onMouseLeave={onLanguageLeave}
        >
          <div
            className={`${styles.langPopover} ${isLangOpen ? styles.langPopoverOpen : ""}`}
          >
            <button
              className={styles.langBtn}
              type="button"
              aria-label={t("navbar.languageSelector", { defaultValue: "Language selector" })}
              aria-haspopup="menu"
              aria-expanded={isLangOpen}
              onFocus={onLanguageEnter}
            >
              <FiGlobe className={styles.globeIcon} />
              <span className={styles.langText}>{regionLabel}</span>
            </button>

            <div
              className={`${styles.langDropdown} ${isLangOpen ? styles.langDropdownOpen : ""}`}
              role="menu"
              aria-label={t("navbar.selectLanguage", { defaultValue: "Select language" })}
            >
              {LANGUAGE_OPTIONS.map((language) => {
                const isActive = language.code === selectedLanguageCode;
                const displayCode = REGION_DISPLAY[language.code] || language.code;

                return (
                  <button
                    key={language.code}
                    type="button"
                    role="menuitemradio"
                    aria-checked={isActive}
                    className={`${styles.langOption} ${isActive ? styles.langOptionActive : ""}`}
                    onClick={() => {
                      setLanguage(language.code);
                    }}
                  >
                    {displayCode}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <button className={styles.loginBtn} type="button" onClick={() => router.push("/auth")}>
          {t("navbar.login", { defaultValue: "LOG IN" })}
        </button>

        <button
          className={styles.speakBtn}
          type="button"
          onClick={() => router.push("/aanvragen")}
        >
          {t("navbar.getStarted", { defaultValue: "GET STARTED" })}
        </button>
      </div>

      <button
        type="button"
        className={styles.menuBurgerBtn}
        aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen((o) => !o)}
      >
        <MenuBurgerIcon open={mobileNavOpen} />
      </button>
    </header>

    {mobileNavOpen ? (
      <div
        className={styles.mobileNavRoot}
        role="dialog"
        aria-modal="true"
        aria-label="Primary navigation"
        data-i18n-skip="true"
        translate="no"
      >
        <div className={styles.mobileNavPanel}>
          <div className={styles.mobileNavPanelHeader}>
            <Link href="/" onClick={closeMobileNav} className={styles.mobileNavLogoLink}>
              <Image src="/assets/companyLogo.svg" alt="PayLTR" width={100} height={100} className={styles.logoImg} />
            </Link>
            <button
              type="button"
              className={styles.mobileNavClose}
              aria-label="Close menu"
              onClick={closeMobileNav}
            >
              ×
            </button>
          </div>

          <div className={styles.mobileNavScroll}>
            <nav className={styles.mobileNavList} aria-label="Primary">
              {NAV_LINKS.map((item) => {
                const active = isNavActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    className={`${styles.mobileNavLink} ${active ? styles.mobileNavLinkActive : ""}`}
                    href={item.href}
                    onClick={closeMobileNav}
                  >
                    {t(item.labelKey, { defaultValue: item.fallback })}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.mobileNavDivider} />

            <p className={styles.mobileLangLabel}>
              {t("navbar.selectLanguage", { defaultValue: "Select language" })}
            </p>
            <div className={styles.mobileLangRow}>
              {LANGUAGE_OPTIONS.map((language) => {
                const isActive = language.code === selectedLanguageCode;
                const displayCode = REGION_DISPLAY[language.code] || language.code;
                return (
                  <button
                    key={language.code}
                    type="button"
                    className={`${styles.mobileLangChip} ${isActive ? styles.mobileLangChipActive : ""}`}
                    onClick={() => setLanguage(language.code)}
                  >
                    {displayCode}
                  </button>
                );
              })}
            </div>

            <div className={styles.mobileCtas}>
              <button
                type="button"
                className={styles.mobileLoginBtn}
                onClick={() => {
                  closeMobileNav();
                  router.push("/auth");
                }}
              >
                {t("navbar.login", { defaultValue: "LOG IN" })}
              </button>
              <button
                type="button"
                className={styles.mobileGetStartedBtn}
                onClick={() => {
                  closeMobileNav();
                  router.push("/aanvragen");
                }}
              >
                {t("navbar.getStarted", { defaultValue: "GET STARTED" })}
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : null}
    </>
  );
}
