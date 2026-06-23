"use client";

import { Controller, useFormContext } from "react-hook-form";
import type { ApplicationFormValues } from "./schema";
import { ANNUAL_REVENUE_RANGES, FINANCING_PURPOSES } from "./schema";
import styles from "./applicationForm.module.css";

function formatEuro(n: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function Step2Financing() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<ApplicationFormValues>();

  return (
    <>
      <h2 className={styles.stepHeading}>Your Financing Need</h2>
      <p className={styles.stepLead}>
        Adjust the amount and tell us how you plan to use the funds.
      </p>

      <div className={styles.field}>
        <span className={styles.label}>Financing amount</span>
        <Controller
          name="financingAmount"
          control={control}
          render={({ field }) => (
            <div className={styles.sliderBlock}>
              <div className={styles.sliderLabels}>
                <span>{formatEuro(3000)}</span>
                <span className={styles.sliderValue}>
                  {formatEuro(field.value)}
                </span>
                <span>{formatEuro(500_000)}</span>
              </div>
              <input
                type="range"
                min={3000}
                max={500_000}
                step={1000}
                className={styles.rangeInput}
                value={field.value}
                onChange={(e) => field.onChange(Number(e.target.value))}
                onBlur={field.onBlur}
                aria-valuemin={3000}
                aria-valuemax={500_000}
                aria-valuenow={field.value}
              />
            </div>
          )}
        />
        {errors.financingAmount && (
          <p className={styles.error}>{errors.financingAmount.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="financingPurpose">
          Purpose of financing
        </label>
        <select
          id="financingPurpose"
          className={styles.select}
          {...register("financingPurpose")}
        >
          {FINANCING_PURPOSES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {errors.financingPurpose && (
          <p className={styles.error}>{errors.financingPurpose.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="annualRevenueRange">
          Annual revenue range
        </label>
        <select
          id="annualRevenueRange"
          className={styles.select}
          {...register("annualRevenueRange")}
        >
          {ANNUAL_REVENUE_RANGES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {errors.annualRevenueRange && (
          <p className={styles.error}>{errors.annualRevenueRange.message}</p>
        )}
      </div>
    </>
  );
}
