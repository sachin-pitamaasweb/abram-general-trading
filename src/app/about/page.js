"use client";

import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import HeroCarouselMobile from "@/components/HeroCarousel/HeroCarouselMobile";
import WelcomeSectionAbout from "@/components/WelcomeSectionAbout/WelcomeSectionAbout";
import VisionMissionSection from "@/components/VisionMissionSection/VisionMissionSection";
import PrinciplesSection from "@/components/PrinciplesSection/PrinciplesSection";
import ManufacturingFacilities from "@/components/ManufacturingFacilities/ManufacturingFacilities";
import SupportSection from "@/components/SupportSection/SupportSection";
import QualityControl from "@/components/QualityControl/QualityControl";
import WorldMapComponent from "@/components/WorldMapComponent/WorldMapComponent";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";

// export const metadata = {
//   title: "About Us | Abram General Trading L.L.C.",
//   description:
//     "Learn more about Abram General Trading L.L.C., a leading exporter of premium agro products including Basmati Rice, Spices, and Pulses. Based in Dubai, serving clients worldwide.",
// };
const images = [
  {
    src: "/images/about/banner.png",
    alt: "Aerial view of agricultural fields showing farmers planting crops",
    // caption: "Nurtured in fertile lands, our rice brings purity, nutrition, and exquisite taste to your table",
  },
];

const mobileimages = [
  {
    src: "/images/about/mobile-banner.png",
    alt: "Aerial view of agricultural fields showing farmers planting crops",
    // caption: "Nurtured in fertile lands, our rice brings purity, nutrition, and exquisite taste to your table",
  },
];

export default function AboutPage() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      {isMobile ? <HeroCarouselMobile images={mobileimages} title="about" /> : <HeroCarousel
        images={images}
        title="about"
      />}
      <WelcomeSectionAbout />
      <VisionMissionSection />
      <PrinciplesSection />
      {/* <ManufacturingFacilities /> */}
      <WhoWeAre />
      {/* <QualityControl /> */}
      <WorldMapComponent />
      <SupportSection />
    </>
  );
}
