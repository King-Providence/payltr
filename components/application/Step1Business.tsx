"use client";

import { useFormContext } from "react-hook-form";
import type { ApplicationFormValues } from "./schema";
import { INDUSTRIES, YEARS_IN_OPERATION } from "./schema";
import { BUSINESS_COUNTRY_TO_PHONE_DIAL, COUNTRY_OPTIONS } from "./constants";
import { mockLookupKvkCompanyName } from "./kvkMock";
import styles from "./applicationForm.module.css";

export default function Step1Business() {
  const {
    register,
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext<ApplicationFormValues>();

  return (
    <>
      <h2 className={styles.stepHeading}>Your Business</h2>
      <p className={styles.stepLead}>
        Tell us about your company. All fields are required.
      </p>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="companyName">
          Company Name
        </label>
        <input
          id="companyName"
          type="text"
          className={styles.input}
          placeholder="Registered company name"
          {...register("companyName")}
        />
        {errors.companyName && (
          <p className={styles.error}>{errors.companyName.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="kvkNumber">
          KVK Number
        </label>
        <input
          id="kvkNumber"
          type="text"
          className={styles.input}
          placeholder="e.g. 12345678"
          {...register("kvkNumber", {
            onBlur: (e) => {
              const suggested = mockLookupKvkCompanyName(e.target.value);
              const name = getValues("companyName");
              if (suggested && (!name || name.trim() === "")) {
                setValue("companyName", suggested, { shouldValidate: true });
              }
            },
          })}
        />
        <p className={styles.hint}>
          Enter at least 8 digits to auto-fill a demo company name (mock).
        </p>
        {errors.kvkNumber && (
          <p className={styles.error}>{errors.kvkNumber.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="country">
          Country
        </label>
        <select
          id="country"
          className={styles.select}
          {...register("country", {
            onChange: (e) => {
              const val = (e.target as HTMLSelectElement).value;
              const dial = BUSINESS_COUNTRY_TO_PHONE_DIAL[val];
              if (dial) {
                setValue("phoneCountryCode", dial, { shouldValidate: true });
              }
            },
          })}
        >
          {COUNTRY_OPTIONS.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className={styles.error}>{errors.country.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="industry">
          Industry
        </label>
        <select
          id="industry"
          className={styles.select}
          {...register("industry")}
        >
          {INDUSTRIES.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
        {errors.industry && (
          <p className={styles.error}>{errors.industry.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="yearsInOperation">
          Years in operation
        </label>
        <select
          id="yearsInOperation"
          className={styles.select}
          {...register("yearsInOperation")}
        >
          {YEARS_IN_OPERATION.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        {errors.yearsInOperation && (
          <p className={styles.error}>{errors.yearsInOperation.message}</p>
        )}
      </div>
    </>
  );
}
