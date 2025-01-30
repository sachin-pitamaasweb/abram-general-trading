'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import { useMediaQuery } from '@/hooks/use-media-query';

export default function HeroCarousel({ images = [], title = '' }) {
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
    const isMobile = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        if (!api) return;
        api.on("select", () => setCurrent(api.selectedScrollSnap()));
    }, [api]);

    return (
        <div className="w-full px-4 pb-6 mt-5">
            <div className="container mx-auto">
                <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
                    {images?.length > 0 && (
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="relative w-full h-[350px] sm:h-[350px] md:h-[500px] lg:h-[800px] rounded-[2rem] overflow-hidden">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-inherit transition-transform duration-300"
                                            priority={index === 0}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                                        />
                                        {/* Responsive Overlay Text */}
                                        {/* {title !== 'home' && (
                                            <div className="absolute bottom-[0%] left-0 sm:bottom-[12%] md:bottom-[0%] lg:bottom-[0%] w-full bg-black bg-opacity-50 text-white px-6 py-4 text-center text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-[1.5rem] sm:leading-[2rem] md:leading-[2.5rem] lg:leading-[3rem]">
                                                {image.caption || 'Nurtured in fertile lands, our rice brings purity, nutrition, and exquisite taste to your table'}
                                            </div>
                                        )} */}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    )}
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



