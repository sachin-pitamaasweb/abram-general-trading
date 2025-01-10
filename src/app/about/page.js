import React from "react";

import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import WelcomeSectionAbout from "@/components/WelcomeSectionAbout/WelcomeSectionAbout";
import VisionMissionSection from "@/components/VisionMissionSection/VisionMissionSection";
import PrinciplesSection from "@/components/PrinciplesSection/PrinciplesSection";
import ManufacturingFacilities from "@/components/ManufacturingFacilities/ManufacturingFacilities";
import SupportSection from "@/components/SupportSection/SupportSection";
import QualityControl from "@/components/QualityControl/QualityControl";
import WorldMapComponent from "@/components/WorldMapComponent/WorldMapComponent";

export const metadata = {
  title: "About Us | Abram General Trading L.L.C.",
  description:
    "Learn more about Abram General Trading L.L.C., a leading exporter of premium agro products including Basmati Rice, Spices, and Pulses. Based in Dubai, serving clients worldwide.",
};
const images = [
  {
      src: "/images/about/bg-1.png",
      alt: "Aerial view of agricultural fields showing farmers planting crops",
  },
];

export default function AboutPage() {
  return (
    <>
     <HeroCarousel 
      images={images}
     />
     <WelcomeSectionAbout />  
     <VisionMissionSection />
     <PrinciplesSection />
     <ManufacturingFacilities />
     <QualityControl />
     <WorldMapComponent />
     <SupportSection />
    </>
  );
}
