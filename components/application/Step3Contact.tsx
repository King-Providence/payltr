"use client";

import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { ApplicationFormValues } from "./schema";
import { COMPANY_ROLES } from "./schema";
import {
  PHONE_COUNTRY_CODES,
  PHONE_NATIONAL_PLACEHOLDER,
} from "./constants";
import { formatNationalForDial } from "./phoneHelpers";
import styles from "./applicationForm.module.css";

export default function Step3Contact() {
  const {
    register,
    control,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<ApplicationFormValues>();

  const phoneCountryCode = watch("phoneCountryCode");

  useEffect(() => {
    const next = formatNationalForDial(phoneCountryCode, getValues("phone"));
    const current = getValues("phone");
    if (next !== current) {
      setValue("phone", next, { shouldValidate: true });
    }
  }, [phoneCountryCode, getValues, setValue]);

  const placeholder =
    PHONE_NATIONAL_PLACEHOLDER[phoneCountryCode] ?? "Mobile number";

  return (
    <>
      <h2 className={styles.stepHeading}>Your Contact Details</h2>
      <p className={styles.stepLead}>
        We will use this information to reach you about your application.
      </p>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="fullName">
          Full name
        </label>
        <input
          id="fullName"
          type="text"
          className={styles.input}
          autoComplete="name"
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className={styles.error}>{errors.fullName.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={styles.input}
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && (
          <p className={styles.error}>{errors.email.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <span className={styles.label}>Phone number</span>
        <div className={styles.phoneRow}>
          <select
            className={`${styles.select} ${styles.selectNarrow}`}
            aria-label="Country calling code"
            {...register("phoneCountryCode", {
              onChange: (e) => {
                const nextDial = (e.target as HTMLSelectElement).value;
                setValue(
                  "phone",
                  formatNationalForDial(nextDial, getValues("phone")),
                  { shouldValidate: true, shouldDirty: true },
                );
              },
            })}
          >
            {PHONE_COUNTRY_CODES.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
                <input
                  id="phone"
                  type="tel"
                  className={`${styles.input} ${styles.inputGrow}`}
                  placeholder={placeholder}
                  autoComplete="tel-national"
                  inputMode="tel"
                  value={field.value}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  onChange={(e) => {
                    field.onChange(
                      formatNationalForDial(phoneCountryCode, e.target.value),
                    );
                  }}
                />
            )}
          />
        </div>
        {errors.phoneCountryCode && (
          <p className={styles.error}>{errors.phoneCountryCode.message}</p>
        )}
        {errors.phone && (
          <p className={styles.error}>{errors.phone.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="role">
          Role in company
        </label>
        <select id="role" className={styles.select} {...register("role")}>
          {COMPANY_ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {errors.role && (
          <p className={styles.error}>{errors.role.message}</p>
        )}
      </div>
    </>
  );
}
