'use client'

import { Box, ShieldCheck, Thermometer } from 'lucide-react'
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Infrastructure() {
    const [activeSlide, setActiveSlide] = useState(0)

    const images = [
        "https://res.cloudinary.com/dtivafy25/image/upload/v1737532978/WhatsApp_Image_2025-01-22_at_11.39.43_AM_x5jkub.jpg",
        "https://res.cloudinary.com/dtivafy25/image/upload/v1737532978/WhatsApp_Image_2025-01-22_at_11.39.43_AM_1_qb6b2h.jpg",
    ]

    const features = [
        {
            icon: Box,
            title: "Inventory Management",
            description: "Advanced systems for seamless logistics.",
        },
        {
            icon: ShieldCheck,
            title: "Security",
            description: " Strict adherence to food safety and quality control.",
        },
        {
            icon: Thermometer,
            title: "Climate Control",
            description: "Facilities designed to maintain product integrity.",
        },
    ]

    // Scroll Animation Variants
    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    }

    return (
        <section className="mx-auto px-4 py-12" style={{ maxWidth: '90rem' }}>
            <h2 className="text-4xl font-medium mb-8">Infrastructure</h2>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Image Carousel */}
                <motion.div
                    className="relative w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                    variants={fadeInVariants}
                >
                    <Carousel
                        className="w-full relative"
                        onSelect={(index) => setActiveSlide(index)}
                    >
                        {/* Carousel Arrows */}
                        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-105 transition-transform" />
                        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-105 transition-transform" />

                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                                        <Image
                                            src={image}
                                            alt={`Infrastructure slide ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </motion.div>

                {/* Features Section */}
                <div className="grid gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.5 }}
                            variants={fadeInVariants}
                        >
                            <Card
                                className="overflow-hidden border-0 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                                style={{
                                    background: `linear-gradient(90deg, #ffffff, #f0fdf4)`,
                                }}
                            >
                                <div className="p-6 bg-gradient-to-r from-white to-green-50 rounded-lg flex items-center transition-colors duration-300 hover:to-green-200">
                                    <div className="flex flex-col items-start gap-3">
                                        <div className="text-green-600">
                                            <feature.icon className="w-10 h-10" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-1">{feature.title}</h3>
                                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
