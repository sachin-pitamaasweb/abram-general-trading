"use client";
import { useState, useEffect } from 'react';
import React from 'react';
import HeroCarousel from '@/components/HeroCarousel/HeroCarousel';
import HeroCarouselMobile from '@/components/HeroCarousel/HeroCarouselMobile';
import ProductCatalog from '@/components/ProductCatalog/ProductCatalog';
import { Skeleton } from "@/components/ui/skeleton";
import { useMediaQuery } from '@/hooks/use-media-query';

export default function Products() {
    const isMobile = useMediaQuery("(max-width: 1024px)");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500); // 🔥 Reduced load time to 500ms for faster rendering
    }, []);

    const images = [
        {
            src: "/images/products/banner.png",
            alt: "Aerial view of agricultural fields showing farmers planting crops",
        },
    ];

    const mobileimages = [
        {
            src: "/images/products/banner-mobile.png",
            alt: "Aerial view of agricultural fields showing farmers planting crops",
        },
    ];

    return (
        <>
            {loading ? (
                // ✅ Skeleton Loading for Banner
                <div className="w-full h-[300px] md:h-[500px] flex items-center justify-center">
                    <Skeleton className="w-full h-full rounded-md" />
                </div>
            ) : (
                isMobile ? <HeroCarouselMobile images={mobileimages} /> : <HeroCarousel images={images} />
            )}

            {loading ? (
                // ✅ Skeleton Loading for Product Catalog
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array(6).fill(null).map((_, index) => (
                            <Skeleton key={index} className="h-[200px] md:h-[300px] w-full rounded-lg" />
                        ))}
                    </div>
                </div>
            ) : (
                <ProductCatalog />
            )}
        </>
    );
}
