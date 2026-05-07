"use client";

import { useEffect, useState } from "react";

import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import Loader from "@/components/Loader";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={loading} />

      {!loading && (
        <>
          <ScrollProgress />
          <CursorGlow />

          <HeroSection />
          <HistorySection />
          <ServicesSection />
          <FAQSection />
          <ContactSection />
          <Footer />
        
        </>
      )}
    </>
  );
}