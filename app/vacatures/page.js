"use client";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../page.module.css";
import CareersSection from "../components/careers/CareersSection/CareersSection";
import { careersPageContent } from "@/utils/careers";

export default function CareersPage() {

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main} >
        <CareersSection content={careersPageContent} />
      </main>
      <Footer />
    </div>
  );
}
