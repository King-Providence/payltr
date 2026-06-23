"use client";

import { useEffect, useId, useState } from "react";
import { useFormContext } from "react-hook-form";
import type { ApplicationFormValues } from "./schema";
import {
  connectPontoPlaceholder,
  connectPontoPlaceholderFailing,
  embedDiditKycPlaceholder,
} from "./integrations";
import styles from "./applicationForm.module.css";

export default function Step4Verification() {
  const diditId = useId();
  const containerId = `didit-kyc-${diditId.replace(/:/g, "")}`;
  const { setValue, watch } = useFormContext<ApplicationFormValues>();
  const pontoConnected = watch("pontoConnected");
  const pontoAttempted = watch("pontoAttempted");
  const [pontoMsg, setPontoMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    embedDiditKycPlaceholder(containerId);
  }, [containerId]);

  const showBankUpload = pontoAttempted === true && pontoConnected !== true;

  return (
    <>
      <h2 className={styles.stepHeading}>Identity &amp; Bank Verification</h2>
      <p className={styles.stepLead}>
        Complete KYC and connect your business bank. Placeholders stand in for
        Didit and Ponto until live integrations are configured.
      </p>

      <div className={styles.verificationCard}>
        <h3 className={styles.verificationTitle}>Didit KYC</h3>
        <p className={styles.verificationLead}>
          Embedded KYC widget (iframe placeholder)
        </p>
        <div id={containerId} className={styles.diditPlaceholder}>
          Didit KYC iframe area — replace with production embed.
        </div>
        <button
          type="button"
          className={`${styles.btnSecondary} ${styles.marginTop14}`}
          onClick={() => setValue("diditCompleted", true, { shouldDirty: true })}
        >
          Mark Didit as complete (demo)
        </button>
      </div>

      <div className={styles.verificationCard}>
        <h3 className={styles.verificationTitle}>Ponto PSD2 connection</h3>
        <p className={styles.verificationLead}>
          Connect your bank account securely via Ponto.
        </p>
        <div className={styles.btnRow}>
          <button
            type="button"
            disabled={busy}
            className={styles.btnPrimary}
            onClick={async () => {
              setBusy(true);
              setPontoMsg(null);
              setValue("pontoAttempted", true);
              const res = await connectPontoPlaceholder();
              setValue("pontoConnected", res.ok, { shouldDirty: true });
              setPontoMsg(res.message);
              setBusy(false);
            }}
          >
            Connect with Ponto
          </button>
          <button
            type="button"
            disabled={busy}
            className={styles.btnSecondary}
            onClick={async () => {
              setBusy(true);
              setPontoMsg(null);
              setValue("pontoAttempted", true);
              const res = await connectPontoPlaceholderFailing();
              setValue("pontoConnected", res.ok, { shouldDirty: true });
              setPontoMsg(res.message);
              setBusy(false);
            }}
          >
            Simulate Ponto failure
          </button>
        </div>
        {pontoMsg && <p className={styles.pontoMsg}>{pontoMsg}</p>}
        {pontoConnected && (
          <p className={styles.pontoOk}>
            Bank connection marked as successful (demo).
          </p>
        )}
      </div>

      {showBankUpload && (
        <div className={styles.verificationCard}>
          <h3 className={styles.verificationTitle}>
            Bank statements (fallback)
          </h3>
          <p className={styles.uploadHelp}>
            If Ponto cannot be used, upload PDF bank statements for the last 3
            months.
          </p>
          <input
            type="file"
            accept=".pdf,application/pdf"
            multiple
            className={styles.fileInput}
          />
        </div>
      )}
    </>
  );
}
