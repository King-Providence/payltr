import styles from "./FeePricingStructure.module.css";

const rows = [
  {
    periodMain: "Days 1-120",
    periodSub: "Payment Break",
    whatHappens: "No repayments are due. The customer uses the capital.",
    cost: "A user fee is charged during this period. Fee structure is set by Qeld. Amount should be stated clearly during application (exact amount to be confirmed with Qeld).",
  },
  {
    periodMain: "Day 121 Onwards",
    periodSub: "Repayment",
    whatHappens: "Monthly repayments begin. Spread over 24 months.",
    cost: "0% interest. No interest charges at all during the 24-month repayment period.",
    tinted: true,
  },
  {
    periodMain: "Early Repayment",
    periodSub: "Any Time",
    whatHappens: "Customer can repay the full remaining balance early.",
    cost: "No early repayment penalty. No additional fee.",
  },
  {
    periodMain: "Hidden fees",
    periodSub: null,
    whatHappens: "None.",
    cost: "No administration fees, no late payment penalties (confirm with Qeld), no exit fees.",
    tinted: true,
  },
];

export default function FeePricingStructure() {
  return (
    <section className={styles.section} aria-labelledby="fee-pricing-structure-heading">
      <h1 id="fee-pricing-structure-heading" className={styles.title}>
        The Actual Structure
      </h1>
      <p className={styles.subtitle}>
        A clear breakdown of what happens at each stage and what it costs
      </p>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col" className={styles.th}>
                PERIOD
              </th>
              <th scope="col" className={styles.th}>
                WHAT HAPPENS
              </th>
              <th scope="col" className={styles.th}>
                COST TO THE CUSTOMER
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={row.tinted ? styles.rowTint : styles.rowWhite}
              >
                <td className={styles.td}>
                  <span className={styles.periodMain}>{row.periodMain}</span>
                  {row.periodSub ? (
                    <>
                      <br />
                      <span className={styles.periodSub}>{row.periodSub}</span>
                    </>
                  ) : null}
                </td>
                <td className={styles.td}>{row.whatHappens}</td>
                <td className={styles.td}>{row.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
