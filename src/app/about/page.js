import React from "react";

import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import MetricsSection from "@/components/MetricsSection/MetricsSection";
import WelcomeSectionAbout from "@/components/WelcomeSectionAbout/WelcomeSectionAbout";
import CompanyInfo from "@/components/CompanyInfo/CompanyInfo";
import MarketingCard from "@/components/MarketingCard/MarketingCard";
import SupportSection from "@/components/SupportSection/SupportSection";
import WhyUsSection from "@/components/WhyUsSection/WhyUsSection";

export const metadata = {
  title: "About Us | Abram General Trading L.L.C.",
  description:
    "Learn more about Abram General Trading L.L.C., a leading exporter of premium agro products including Basmati Rice, Spices, and Pulses. Based in Dubai, serving clients worldwide.",
};

export default function AboutPage() {
  return (
    <>
     <HeroCarousel />
     <WelcomeSectionAbout />  
     <MetricsSection />
     <CompanyInfo />
     <MarketingCard />
     <WhyUsSection />
     <SupportSection />
    </>
  );
}
