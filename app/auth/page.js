"use client";

import { useState } from "react";
import { FiEye } from "react-icons/fi";
import styles from "./page.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export default function AuthPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [mode, setMode] = useState("login"); // UI only (no backend)

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.backgroundImage} aria-hidden="true"></div>
        <div className={styles.leftInner}>
          <div className={styles.logoRow}>
            <div className={styles.logoMark} aria-hidden="true">
              <Image src="/assets/footerLogo.svg" alt="PayLTR" width={100} height={100} />
            </div>
          </div>

          <h1 className={styles.leftTitle}>
            {t("Get paid before your clients pay you")}
          </h1>
          <ul className={styles.leftList}>
            <li>{t("Instant credit decisioning", { defaultValue: "Instant credit decisioning" })}</li>
            <li>
              {t("No hidden fees, transparent pricing", {
                defaultValue: "No hidden fees, transparent pricing",
              })}
            </li>
            <li>
              {t("Works with your existing bank", {
                defaultValue: "Works with your existing bank",
              })}
            </li>
          </ul>
        </div>
        <div className={styles.leftFooter}>© 2025 PayLTR</div>
      </div>

      <div className={styles.right}>
        <div className={styles.authCard}>
          <div className={styles.topButtons} role="tablist" aria-label="Authentication mode">
            <button
              type="button"
              className={`${styles.topBtn} ${mode === "login" ? styles.topBtnActive : ""}`}
              onClick={() => setMode("login")}
            >
              Log in
            </button>
            <button
              type="button"
              className={`${styles.topBtn} ${mode === "register" ? styles.topBtnActive : ""}`}
              onClick={() => setMode("register")}
            >
              Create Your Account
            </button>
          </div>

          {mode === "login" ? (
            <>
              <h2 className={styles.welcomeTitle}>Welcome back</h2>
              <p className={styles.welcomeSubtitle}>
                Enter your credentials to access your dashboard.
              </p>

              <form
                className={styles.form}
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label className={styles.field}>
                  <span className={styles.fieldLabel}>Business Email</span>
                  <input
                    className={styles.input}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    required
                  />
                </label>

                <label className={styles.field}>
                  <div className={styles.passwordRow}>
                    <span className={styles.fieldLabel}>Password</span>
                    <a className={styles.forgotLink} href="#">
                      Forgot?
                    </a>
                  </div>
                  <input
                    className={styles.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                </label>

                <button className={styles.loginBtn} type="submit">
                  Log in
                </button>

                <p className={styles.agreeText}>
                  By continuing, you agree to our{" "}
                  <a className={styles.inlineLink} href="/algemene-voorwaarden">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a className={styles.inlineLink} href="/privacybeleid">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </>
          ) : (
            <>
              <div className={styles.registerPanel}>
                <h2 className={styles.registerTitle}>Create Your Account</h2>
                <p className={styles.registerSubtitle}>Set up your PayLTR account in seconds.</p>
                <form
                  className={styles.form}
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Full Name</span>
                    <input
                      className={styles.input}
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </label>

                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Business Email</span>
                    <input
                      className={styles.input}
                      type="email"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      placeholder="john@company.com"
                      required
                    />
                  </label>

                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Password</span>
                    <div className={styles.passwordInputWrap}>
                      <input
                        className={styles.input}
                        type="password"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        placeholder="Create a strong password"
                        required
                      />
                      <span className={styles.eyeIcon} aria-hidden="true">
                        <FiEye size={16} />
                      </span>
                    </div>
                  </label>

                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Confirm Password</span>
                    <div className={styles.passwordInputWrap}>
                      <input
                        className={styles.input}
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                      />
                      <span className={styles.eyeIcon} aria-hidden="true">
                        <FiEye size={16} />
                      </span>
                    </div>
                  </label>

                  <label className={styles.termsRow}>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      required
                    />
                    <span>
                      I agree to the{" "}
                      <a className={styles.inlineLink} href="/algemene-voorwaarden">
                        Terms
                      </a>{" "}
                      &amp;{" "}
                      <a className={styles.inlineLink} href="/privacybeleid">
                        Privacy Policy
                      </a>
                    </span>
                  </label>

                  <button className={styles.loginBtn} type="submit">
                    Create Account
                  </button>
                </form>
              </div>

              <p className={styles.registerAgreeText}>
                By continuing, you agree to our{" "}
                <a className={styles.inlineLink} href="/algemene-voorwaarden">
                  Terms
                </a>{" "}
                and{" "}
                <a className={styles.inlineLink} href="/privacybeleid">
                  Privacy Policy
                </a>
                .
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}