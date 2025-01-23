'use client';

import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { motion, useAnimation } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const cards = [
    {
        title: "Basmati and Non-Basmati Rice",
        content: "Premium quality grains with rich aroma",
        image: "/images/home/services/s-1.png"
    },
    {
        title: "Pulses and Lentils",
        content: "Nutrient-rich pulses processed to perfection.",
         image: "/images/home/services/s-2.png"
    },
    {
        title: "Spices",
        content: " Authentic Indian spices packed with flavor and aroma.",
         image: "/images/home/services/s-3.png"
    },
    {
        title: "Oil Seeds and Dry Fruits",
        content: "Premium quality seeds and nuts for healthy living.",
         image: "/images/home/services/s-4.png"
    },
    {
        title: "Animal Feed",
        content: "Nutritionally balanced animal feed for superior livestock care.",
         image: "/images/home/services/s-5.png"
    }
];

export default function CardGrid() {
    const [isMobile, setIsMobile] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.section
            className="py-12 px-4 md:px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
        >
            <div className="max-w-7xl mx-auto" style={{ maxWidth: "90rem" }}>
                <h1 className="text-4xl font-medium mb-8">
                   Services & Products
                </h1>
                {isMobile ? (
                    <Carousel className="w-full max-w-xs mx-auto">
                        <CarouselContent className="-ml-1">
                            {cards.map((card, index) => (
                                <CarouselItem key={index} className="pl-1 flex justify-center">
                                    <div className="w-full flex justify-center">
                                        <Card {...card} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
                        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
                    </Carousel>
                ) : (
                    <motion.div
                        className="container mx-auto flex flex-wrap justify-start gap-[1rem]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={cardVariants}
                    >
                        {cards.map((card, index) => (
                            <Card key={index} {...card} />
                        ))}
                    </motion.div>
                )}
            </div>
        </motion.section>
    );
}

