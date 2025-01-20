import React from 'react';

import HeroCarousel from '@/components/HeroCarousel/HeroCarousel';
import RecipeGrid from '@/components/RecipeGrid/RecipeGrid';


export const metadata = {
    title: "Recipes | Abram General Trading L.L.C.",
    description: "Learn more about Abram General Trading L.L.C., a leading exporter of premium agro products including Basmati Rice, Spices, and Pulses. Based in Dubai, serving clients worldwide.",
};

export default function Recipes() {
    const images = [
        {
            src: "/images/home/banner/product.png",
            alt: "Aerial view of agricultural fields showing farmers planting crops",
        },
    ];
    return (
        <div>
            <HeroCarousel
                images={images}
            />
            <RecipeGrid />
        </div>
    );
}