"use client";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../page.module.css";
import ContactSection from "../components/contact/ContactSection/ContactSection";
import { contactPageContent } from "@/utils/contact";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <ContactSection content={contactPageContent} />
      </main>
      <Footer />
    </div>
  );
}
