"use client";

import type { ReactNode } from "react";
import styles from "./applicationForm.module.css";

type ApplicationStepperProps = {
  children: ReactNode;
};

export function ApplicationStepper({ children }: ApplicationStepperProps) {
  return <div className={styles.formGrid}>{children}</div>;
}
