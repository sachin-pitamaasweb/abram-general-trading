'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Boxes, Shield, Thermometer } from 'lucide-react'
import { useState } from "react"

const infrastructureImages = [
    "/images/home/infrastructure.png",
    "/images/home/infrastructure.png",
    "/images/home/infrastructure.png",
    "/images/home/infrastructure.png",
    "/images/home/infrastructure.png",
]

const features = [
    {
        title: "Inventory Management",
        description: "Advanced systems ensuring perfect order accuracy",
        icon: Boxes,
    },
    {
        title: "Security",
        description: "24/7 surveillance and access control",
        icon: Shield,
    },
    {
        title: "Climate Control",
        description: "Precise temperature and humidity regulation",
        icon: Thermometer,
    },
]

export default function Infrastructure() {
    const [currentSlide, setCurrentSlide] = useState(0)
    console.log(currentSlide)
    return (
        <section className="container w-full max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-medium mb-8">Infrastructure</h2>

            <div className="grid gap-8 lg:grid-cols-2">
                {/* Image Carousel */}
                <div className="relative">
                    <Carousel className="w-full" onSelect={(index) => setCurrentSlide(index)}>
                        <CarouselContent>
                            {infrastructureImages.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                                        <Image
                                            src={image}
                                            alt={`Infrastructure image ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center gap-2 mt-4">
                            {infrastructureImages.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                        currentSlide === index ? "bg-green-600" : "bg-gray-300"
                                    }`}
                                />
                            ))}
                        </div>
                    </Carousel>
                </div>

                {/* Features */}
                <div className="grid gap-4">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden border-purple-200 group transition-all duration-500 hover:shadow-lg"
                        >
                            <CardContent className="p-6 relative overflow-hidden">
                                {/* Background gradient that animates on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white to-green-50 transition-transform duration-700 group-hover:translate-x-full" />

                                {/* Animated background that slides in */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-green-50 transition-transform duration-700 -translate-x-full group-hover:translate-x-0" />

                                {/* Content */}
                                <div className="relative flex gap-4 items-start">
                                    <feature.icon className="w-8 h-8 text-green-600 flex-shrink-0 transition-transform duration-500 group-hover:scale-110" />
                                    <div className="space-y-1">
                                        <h3 className="font-medium transition-colors duration-500 group-hover:text-green-700">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
