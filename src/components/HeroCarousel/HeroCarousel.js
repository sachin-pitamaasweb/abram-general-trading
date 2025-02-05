'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';

export default function HeroCarousel({ images = [], title = '' }) {
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);

    const isMobile = useMediaQuery('(max-width: 640px)');
    const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 768px)');
    const isLaptop = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
    const isDesktop = useMediaQuery('(min-width: 1025px) and (max-width: 1280px)');
    const isLargeScreen = useMediaQuery('(min-width: 1281px)');

    const getHeight = () => {
        if (isMobile) return '250px';
        if (isTablet) return '350px';
        if (isLaptop) return '600px';
        if (isDesktop) return '700px';
        if (isLargeScreen) return '800px';
        return '500px'; // default
    };

    useEffect(() => {
        if (!api) return;
        api.on("select", () => setCurrent(api.selectedScrollSnap()));

        const autoSlide = setInterval(() => {
            api.scrollNext();
        }, 5000); // Auto-slide every 5 seconds

        return () => clearInterval(autoSlide);
    }, [api]);

    const handlePrev = () => {
        if (api) api.scrollPrev();
    };

    const handleNext = () => {
        if (api) api.scrollNext();
    };

    return (
        <div className="w-full px-4 pb-6 mt-[6rem]">
            <div className="container mx-auto relative">
                <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
                    {images?.length > 0 && (
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="relative w-full rounded-[2rem] overflow-hidden" style={{ height: getHeight() }}>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-inherit w-full h-full transition-transform duration-300 scale-110 hover:scale-100"
                                            priority={index === 0}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    )}

                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 shadow-md hover:bg-white"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 shadow-md hover:bg-white"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </Carousel>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-4">
                    <div className="flex gap-2">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`w-6 h-2 rounded-full ${current === index ? 'bg-green-500' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
