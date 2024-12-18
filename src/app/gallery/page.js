import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import { PhotoGallery } from "@/components/PhotoGallery/PhotoGallery";
import React from "react";

export const metadata = {
    title: "Gallery | Abram General Trading L.L.C.",
    description: "Learn more about Abram General Trading L.L.C., a leading exporter of premium agro products including Basmati Rice, Spices, and Pulses. Based in Dubai, serving clients worldwide.",
};

export default function GalleryPage() {
    return (
        <>
            <HeroCarousel />
            <PhotoGallery />
        </>
    );
}