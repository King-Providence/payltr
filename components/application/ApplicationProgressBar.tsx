"use client";

import { Fragment, type ReactNode } from "react";
import styles from "./applicationForm.module.css";

/** Step titles from product spec (shown under each circle). */
export const APPLICATION_STEP_TITLES = [
  "Your Business",
  "Your Financing Need",
  "Your Contact Details",
  "Identity & Bank Verification",
  "Review & Submit",
] as const;

type ApplicationProgressBarProps = {
  currentStep: number;
  totalSteps?: number;
  onStepClick: (step: number) => void;
};

export function ApplicationProgressBar({
  currentStep,
  totalSteps = 5,
  onStepClick,
}: ApplicationProgressBarProps) {
  const nodes: ReactNode[] = [];

  for (let i = 0; i < totalSteps; i += 1) {
    const n = i + 1;
    const isActive = n === currentStep;
    const isComplete = n < currentStep;
    const isDoneOrCurrent = isActive || isComplete;
    const clickable = isComplete;

    const title =
      APPLICATION_STEP_TITLES[n - 1] ?? `Step ${n}`;

    const labelClass = `${styles.progressStepLabel} ${
      isActive
        ? styles.progressStepLabelActive
        : isComplete
          ? styles.progressStepLabelDone
          : ""
    }`;

    const segmentComplete = currentStep > n;

    nodes.push(
      <Fragment key={`step-col-${n}`}>
        <div className={styles.progressStepColumn}>
          <button
            type="button"
            disabled={!clickable}
            onClick={() => clickable && onStepClick(n)}
            className={`${styles.progressDot} ${isDoneOrCurrent ? styles.progressDotFilled : styles.progressDotUpcoming} ${clickable ? styles.progressDotClickable : ""}`}
            aria-current={isActive ? "step" : undefined}
            aria-label={`${title}. Step ${n}${isComplete ? " (completed)" : isActive ? " (current)" : ""}`}
          >
            {n}
          </button>
          <span className={labelClass}>{title}</span>
        </div>
        {i < totalSteps - 1 ? (
          <div className={styles.progressConnectorSlot}>
            <span
              className={`${styles.progressConnector} ${segmentComplete ? styles.progressConnectorFilled : ""}`}
              aria-hidden
            />
          </div>
        ) : null}
      </Fragment>,
    );
  }

  return (
    <div className={styles.progressBlock}>
      <p className={styles.srOnly} aria-live="polite">
        Step {currentStep} of {totalSteps}
      </p>
      <div
        className={styles.progressRow}
        role="navigation"
        aria-label="Application steps"
      >
        {nodes}
      </div>
    </div>
  );
}
