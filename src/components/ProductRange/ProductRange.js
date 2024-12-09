"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";

const products = [
  {
    name: "Long Grain Rice",
    image: "/images/products/image.png",
  },
  {
    name: "Sharbati Golden Sella Rice",
    image: "/images/products/image-1.png",
  },
  {
    name: "Sona Masoori Rice",
    image: "/images/products/image-2.png",
  },
  {
    name: "Cotton Seed Cake",
    image: "/images/products/image-3.png",
  },
  {
    name: "Raisin",
    image: "/images/products/image-4.png",
  },
];

export default function ProductRange() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Copy ref value to a variable

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, []); // No extra dependencies needed

  return (
    <section className="w-full py-16 px-4" ref={ref}>
      <div className="container mx-auto">
        <h2
          className={`text-2xl md:text-3xl font-medium mb-8 text-left transform transition-all duration-500 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
          }`}
        >
          Check Out Our Range
        </h2>

        {isMobile ? (
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-4/5 md:basis-1/2"
                >
                  <Card className="border-none shadow-none transform transition-transform duration-300 hover:scale-105">
                    <CardContent className="p-0">
                      <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 300px"
                        />
                      </div>
                      <h3 className="text-left text-sm md:text-base font-medium px-2">
                        {product.name}
                      </h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 md:-left-5" />
            <CarouselNext className="-right-3 md:-right-5" />
          </Carousel>
        ) : (
          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 transform transition-opacity duration-700 ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="transform transition-transform duration-500 hover:scale-105"
                style={{
                  transitionDelay: `${index * 100}ms`, // Stagger effect
                }}
              >
                <Card className="border-none bg-transparent shadow-none">
                  <CardContent className="p-0">
                    <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      />
                    </div>
                    <h3 className="text-left text-sm md:text-base font-medium px-2">
                      {product.name}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
