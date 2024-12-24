'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useMediaQuery } from '@/hooks/use-media-query';

export default function HeroCarousel() {
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
    const isMobile = useMediaQuery("(max-width: 768px)");

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

    useEffect(() => {
        if (!api) return;

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="w-full px-4 pb-6 mt-5">
            <div className="container mx-auto">
                <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[670px] rounded-[2rem] overflow-hidden">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {!isMobile && (
                        <>
                            <CarouselPrevious className="left-4" />
                            <CarouselNext className="right-4" />
                        </>
                    )}
                </Carousel>
                <div className="flex justify-center mt-4">
                    <div className="flex gap-2">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`w-6 h-2 rounded-full ${current === index ? 'bg-green-500' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
