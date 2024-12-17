"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function BrandMarquee() {
  const scrollRef = useRef(null);

  // List of brand images
  const allBrands = [
    { src: "/images/brands/b-1.png", alt: "Mahindra Summit" },
    { src: "/images/brands/b-2.png", alt: "XL CROP" },
    { src: "/images/brands/b-3.png", alt: "Bayer" },
    { src: "/images/brands/b-4.png", alt: "RCS" },
    { src: "/images/brands/b-5.png", alt: "Aravali" },
    { src: "/images/brands/b-6.png", alt: "PP Paras" },
  ];

  // Duplicate images to create an infinite loop effect
  const duplicatedBrands = [...allBrands, ...allBrands];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Auto-scroll functionality
    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1; // Adjust speed here
      }
    };

    const timer = setInterval(scroll, 30); // Adjust interval for smoother/faster scrolling
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container w-full mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-medium mb-8 text-left">
        Our Brands
      </h2>
      <div ref={scrollRef} className="overflow-hidden relative w-full">
        <div className="flex gap-6 w-max">
          {duplicatedBrands.map((brand, index) => (
            <div key={index} className="flex-shrink-0 min-w-[200px] sm:min-w-[220px] md:min-w-[240px]">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={300} // Adjust width
                height={169} // Adjust height to maintain 16:9 aspect ratio
                className="rounded-lg shadow-md object-cover"
                priority // Prioritize image loading
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
