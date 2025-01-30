"use client"; // Ensure this is a client component

import React from "react";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import HeroCarouselMobile from "@/components/HeroCarousel/HeroCarouselMobile";
import RecipeGrid from "@/components/RecipeGrid/RecipeGrid";
import { useMediaQuery } from "@/hooks/use-media-query"; // Import the custom hook

// export const metadata = {
//   title: "Recipes | Abram General Trading L.L.C.",
//   description:
//     "Learn more about Abram General Trading L.L.C., a leading exporter of premium agro products including Basmati Rice, Spices, and Pulses. Based in Dubai, serving clients worldwide.",
// };

export default function Recipes() {
  const isMobile = useMediaQuery("(max-width: 1024px)"); // Moved inside the component

  const images = [
    {
      src: "/images/Recipe/banner.jpg",
      alt: "Aerial view of agricultural fields showing farmers planting crops",
    },
  ];

  const mobileimages = [
    {
      src: "/images/Recipe/mobile-banner.png",
      alt: "Aerial view of agricultural fields showing farmers planting crops",
    },
  ];

  return (
    <div>
      {/* ✅ Conditionally Render Mobile or Desktop Carousel */}
      {isMobile ? <HeroCarouselMobile images={mobileimages} /> : <HeroCarousel images={images} />}
      
      {/* ✅ Recipe Grid */}
      <RecipeGrid />
    </div>
  );
}
