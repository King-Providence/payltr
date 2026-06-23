"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import { applicationFormSchema, STEP_FIELD_GROUPS, type ApplicationFormValues } from "./schema";
import { defaultFormValues } from "./defaultValues";
import { ApplicationProgressBar } from "./ApplicationProgressBar";
import { ApplicationStepper } from "./ApplicationStepper";
import Step1Business from "./Step1Business";
import Step2Financing from "./Step2Financing";
import Step3Contact from "./Step3Contact";
import Step4Verification from "./Step4Verification";
import Step5Review from "./Step5Review";
import styles from "./applicationForm.module.css";

const TOTAL_STEPS = 5;

function buildReferenceId() {
  const part =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID().replace(/-/g, "").slice(0, 10).toUpperCase()
      : Math.random().toString(36).slice(2, 12).toUpperCase();
  return `PLTR-${part}`;
}

export default function ApplicationMultiStepForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const methods = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: defaultFormValues,
    mode: "onTouched",
  });

  const { trigger, handleSubmit } = methods;

  const goToStep = useCallback(
    (target: number) => {
      if (target >= 1 && target <= TOTAL_STEPS) setStep(target);
    },
    [],
  );

  const handleProgressClick = useCallback(
    (s: number) => {
      if (s < step) goToStep(s);
    },
    [step, goToStep],
  );

  const goNext = useCallback(async () => {
    if (step >= TOTAL_STEPS) return;
    const fields = STEP_FIELD_GROUPS[step];
    if (fields.length > 0) {
      const ok = await trigger(fields);
      if (!ok) return;
    }
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  }, [step, trigger]);

  const goBack = useCallback(() => {
    setStep((s) => Math.max(1, s - 1));
  }, []);

  const submitApplication = handleSubmit(async (data) => {
    setSubmitError(null);
    const ref = buildReferenceId();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/submit-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, referenceId: ref }),
      });
      const payload = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;
      if (!res.ok) {
        setSubmitError(
          payload?.error ?? "Something went wrong. Please try again.",
        );
        return;
      }
      const q = new URLSearchParams({
        ref,
        email: data.email.trim(),
      });
      router.push(`/thankyou?${q.toString()}`);
    } catch {
      setSubmitError("Network error. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  });

  const stepBody = useMemo(() => {
    switch (step) {
      case 1:
        return <Step1Business />;
      case 2:
        return <Step2Financing />;
      case 3:
        return <Step3Contact />;
      case 4:
        return <Step4Verification />;
      case 5:
        return <Step5Review onEditStep={goToStep} />;
      default:
        return null;
    }
  }, [step, goToStep]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Apply for Business Financing</h1>
          <p className={styles.subtitle}>
            Takes 5–10 minutes. No personal credit check. No paperwork.
          </p>
          {/* <Image src="/assets/contact.png" alt="Application Hero" width={1000} height={1000} /> */}
        </header>

        <div className={styles.panel}>
          <FormProvider {...methods}>
            <ApplicationProgressBar
              currentStep={step}
              totalSteps={TOTAL_STEPS}
              onStepClick={handleProgressClick}
            />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (step === TOTAL_STEPS) void submitApplication();
              }}
            >
              <ApplicationStepper>{stepBody}</ApplicationStepper>

              <div className={styles.actions}>
                {submitError ? (
                  <p className={styles.submitError} role="alert">
                    {submitError}
                  </p>
                ) : null}
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 1 || isSubmitting}
                  className={styles.backBtn}
                >
                  Back
                </button>

                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={() => void goNext()}
                    disabled={isSubmitting}
                    className={styles.submitBtn}
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting…" : "Submit Application"}
                  </button>
                )}
              </div>
            </form>
          </FormProvider>
        </div>
      </main>
      <Footer />
    </div>
  );
}
