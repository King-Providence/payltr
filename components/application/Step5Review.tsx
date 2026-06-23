"use client";

import { useFormContext } from "react-hook-form";
import type { ApplicationFormValues } from "./schema";
import styles from "./applicationForm.module.css";

function formatEuro(n: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

type Step5ReviewProps = {
  onEditStep: (step: number) => void;
};

export default function Step5Review({ onEditStep }: Step5ReviewProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<ApplicationFormValues>();

  const v = watch();

  return (
    <div className={styles.reviewStack}>
      <h2 className={styles.stepHeading}>Review &amp; Submit</h2>
      <p className={styles.stepLead}>
        Check your details before submitting. You can edit any section below.
      </p>

      <section className={styles.reviewSection} aria-labelledby="review-business">
        <div className={styles.reviewSectionHead}>
          <h3 id="review-business" className={styles.reviewSectionTitle}>
            Business Information
          </h3>
          <button
            type="button"
            className={styles.editBtn}
            onClick={() => onEditStep(1)}
          >
            Edit
          </button>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewLabel}>Company name</span>
          <span className={styles.reviewValue}>{v.companyName || "—"}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewLabel}>KVK</span>
          <span className={styles.reviewValue}>{v.kvkNumber || "—"}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewLabel}>Country</span>
          <span className={styles.reviewValue}>{v.country || "—"}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewLabel}>Industry</span>
          <span className={styles.reviewValue}>{v.industry || "—"}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewLabel}>Years in operation</span>
          <span className={styles.reviewValue}>{v.yearsInOperation || "—"}</span>
        </div>
      </section>

      <section className={styles.reviewSection} aria-labelledby="review-finance">
        <div className={styles.reviewSectionHead}>
          <h3 id="review-finance" className={styles.reviewSectionTitle}>
            Financing Need
          </h3>
          <button
            type="button"
            className={styles.editBtn}
            onClick={() => onEditStep(2)}
          >
            Edit
          </button>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewLabel}>Amount</span>
          <span className={styles.reviewValue}>
            {typeof v.financingAmount === "number"
              ? formatEuro(v.financingAmount)
              : "—"}
          </span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewLabel}>Purpose</span>
          <span className={styles.reviewValue}>{v.financingPurpose || "—"}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewLabel}>Annual revenue</span>
          <span className={styles.reviewValue}>
            {v.annualRevenueRange || "—"}
          </span>
        </div>
      </section>

      <section className={styles.reviewSection} aria-labelledby="review-contact">
        <div className={styles.reviewSectionHead}>
          <h3 id="review-contact" className={styles.reviewSectionTitle}>
            Contact Details
          </h3>
          <button
            type="button"
            className={styles.editBtn}
            onClick={() => onEditStep(3)}
          >
            Edit
          </button>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewLabel}>Full name</span>
          <span className={styles.reviewValue}>{v.fullName || "—"}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewLabel}>Email</span>
          <span className={styles.reviewValue}>{v.email || "—"}</span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewLabel}>Phone</span>
          <span className={styles.reviewValue}>
            {(v.phoneCountryCode || "") + " " + (v.phone || "")}
          </span>
        </div>
        <div className={styles.reviewRow}>
          <span className={styles.reviewLabel}>Role</span>
          <span className={styles.reviewValue}>{v.role || "—"}</span>
        </div>
      </section>

      <div className={styles.checkboxList}>
        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            className={styles.checkbox}
            {...register("agreeTerms")}
          />
          <span>I agree to Terms &amp; Conditions</span>
        </label>
        {errors.agreeTerms && (
          <p className={styles.error}>{errors.agreeTerms.message}</p>
        )}

        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            className={styles.checkbox}
            {...register("agreePrivacy")}
          />
          <span>I accept the Privacy Policy</span>
        </label>
        {errors.agreePrivacy && (
          <p className={styles.error}>{errors.agreePrivacy.message}</p>
        )}

        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            className={styles.checkbox}
            {...register("consentCredit")}
          />
          <span>I consent to credit assessment</span>
        </label>
        {errors.consentCredit && (
          <p className={styles.error}>{errors.consentCredit.message}</p>
        )}
      </div>
    </div>
  );
}
