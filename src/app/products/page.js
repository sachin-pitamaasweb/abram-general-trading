import HeroCarousel from '@/components/HeroCarousel/HeroCarousel';
import ProductCatalog from '@/components/ProductCatalog/ProductCatalog';
import React from 'react';

export const metadata = {
    title: "Products | Abram General Trading L.L.C.",
    description:
        "Learn more about Abram General Trading L.L.C., a leading exporter of premium agro products including Basmati Rice, Spices, and Pulses. Based in Dubai, serving clients worldwide.",
};

export default function Products() {
    return (
       <>
       <HeroCarousel />
       <ProductCatalog />
       </>
    );
}   