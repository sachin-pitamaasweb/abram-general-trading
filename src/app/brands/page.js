"use client";
import React from "react";

import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import BrandGrid from "@/components/BrandGrid/BrandGrid";

const BrandsPage = () => {
    return (
        <>
            <HeroCarousel
                images={[
                    {
                        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1737982615/Website_Banner_1_z46xsz.jpg",
                        alt: "Aerial view of agricultural fields showing farmers planting crops",
                    },
                ]}
            />
            <div className="mx-auto">
                <div
                    className="w-full bg-[#FFD55F] py-6 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
                >
                    <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                        BRANDS
                    </h1>
                </div>
                <div className="w-full mx-auto px-6 sm:px-8 md:px-12 py-12 md:py-16 lg:py-20" style={{ maxWidth: '90rem' }}>
                    <div className="space-y-8">
                        <BrandGrid />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandsPage; // Ensure this default export exists
