import { Suspense } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ThankYouContent from "../components/ThankYou/ThankYouContent";
import styles from "../page.module.css";
import thankStyles from "../components/ThankYou/thankYou.module.css";

function ThankYouFallback() {
  return (
    <div className={thankStyles.pageShell}>
      <div className={thankStyles.inner}>
        <p className={thankStyles.bodyText}>Loading…</p>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <Suspense fallback={<ThankYouFallback />}>
          <ThankYouContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
