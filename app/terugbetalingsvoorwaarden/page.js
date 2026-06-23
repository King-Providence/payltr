import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../page.module.css";
import RepaymentTermsContent from "./RepaymentTermsContent";

export default function RepaymentTermsPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <RepaymentTermsContent />
      </main>
      <Footer />
    </div>
  );
}

