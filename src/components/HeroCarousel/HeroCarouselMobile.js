"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function HeroCarousel({ images = [], title = "" }) {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  // ✅ Show only in mobile view
  if (!isMobile) return null;

  return (
    <div className="w-full relative overflow-hidden mt-[4rem]">
      <div className="container mx-auto">
        {/* ✅ Stop Carousel if only one image */}
        {images.length === 1 ? (
          <div className="relative w-full h-[91vh] sm:h-[600px] overflow-hidden">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              style={{ height: "100%" }}
              className="object-cover ios-fix"
              priority
              // sizes="100vw"
            />
          </div>
        ) : (
          <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[91vh] sm:h-[600px] rounded-md overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-fill ios-fix"
                      priority={index === 0}
                      sizes="100vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>  
          </Carousel>
        )}

        {/* ✅ Pagination Dots (Only if Multiple Images Exist) */}
        {images.length > 1 && (
          <div className="flex justify-center mt-3">
            <div className="flex gap-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-4 h-2 rounded-full ${
                    current === index ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
