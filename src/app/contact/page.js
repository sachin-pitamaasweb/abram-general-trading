
"use client";
import React from "react";
import ContactSocialSection from "@/components/ContactSocialSection/ContactSocialSection";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import HeroCarouselMobile from "@/components/HeroCarousel/HeroCarouselMobile";
import ReachUs from "@/components/ReachUs/ReachUs";

import { useMediaQuery } from "@/hooks/use-media-query";

// export const metadata = {
//     title: "Contact | Abram General Trading L.L.C.",
//     description:
//         "Learn more about Abram General Trading L.L.C., a leading exporter of premium agro products including Basmati Rice, Spices, and Pulses. Based in Dubai, serving clients worldwide.",
// };

export default function Contact() {
 const isMobile = useMediaQuery("(max-width: 1024px)");
    const images = [
        {
            src: "/images/contact/banner.png",
            alt: "Aerial view of agricultural fields showing farmers planting crops",
        },
    ];

    const mobileimages = [
        {
            src: "/images/contact/mobile-banner.png",
            alt: "Aerial view of agricultural fields showing farmers planting crops",
        },
    ];

    return (
       <>
        { isMobile ? <HeroCarouselMobile images={mobileimages} /> : <HeroCarousel images={images} />}
        <ReachUs />
        <ContactSocialSection />
       </>
    );
}