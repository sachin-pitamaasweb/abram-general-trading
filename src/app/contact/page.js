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
    return (
       <>
        <HeroCarousel />
        <ReachUs />
        <ContactSocialSection />
       </>
    );
}