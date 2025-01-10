import ContactSocialSection from "@/components/ContactSocialSection/ContactSocialSection";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import ReachUs from "@/components/ReachUs/ReachUs";
import React from "react";

export const metadata = {
    title: "Contact | Abram General Trading L.L.C.",
    description:
        "Learn more about Abram General Trading L.L.C., a leading exporter of premium agro products including Basmati Rice, Spices, and Pulses. Based in Dubai, serving clients worldwide.",
};

export default function Contact() {


    const images = [
        {
            src: "/images/home/banner/b-1.png",
            alt: "Aerial view of agricultural fields showing farmers planting crops",
        },
        {
            src: "/images/home/banner/b-2.png",
            alt: "Green paddy fields",
        },
        {
            src: "/images/home/banner/b-3.png",
            alt: "Harvesting wheat field",
        },
        {
            src: "/images/home/banner/b-4.png",
            alt: "Aerial view of agricultural fields showing farmers planting crops",
        },
        {
            src: "/images/home/banner/b-5.png",
            alt: "Aerial view of agricultural fields showing farmers planting crops",
        },
        {
            src: "/images/home/banner/b-6.png",
            alt: "Aerial view of agricultural fields showing farmers planting crops",
        },
    ];

    return (
       <>
        <HeroCarousel images={images} />
        <ReachUs />
        <ContactSocialSection />
       </>
    );
}