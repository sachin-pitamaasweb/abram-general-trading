'use client'

import { Box, ShieldCheck, Thermometer } from 'lucide-react'
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

import './style.css'

export default function Infrastructure() {
    const [activeSlide, setActiveSlide] = useState(0)

    const images = [
        "https://res.cloudinary.com/dtivafy25/image/upload/v1734945532/Infrastructure_pdjxqh.png",
        "https://res.cloudinary.com/dtivafy25/image/upload/v1734945532/Infrastructure_pdjxqh.png",
        "https://res.cloudinary.com/dtivafy25/image/upload/v1734945532/Infrastructure_pdjxqh.png",
        "https://res.cloudinary.com/dtivafy25/image/upload/v1734945532/Infrastructure_pdjxqh.png",
        "https://res.cloudinary.com/dtivafy25/image/upload/v1734945532/Infrastructure_pdjxqh.png",
    ]

    const features = [
        {
            icon: Box,
            title: "Inventory Management",
            description: "Advanced systems ensuring perfect order accuracy",
        },
        {
            icon: ShieldCheck,
            title: "Security",
            description: "24/7 surveillance and access control",
        },
        {
            icon: Thermometer,
            title: "Climate Control",
            description: "Precise temperature and humidity regulation",
        },
    ]
    return (
        <section className="mx-auto px-4 py-12"  style={{ maxWidth: '90rem' }}>
            <h2 className="text-4xl font-medium mb-8">Infrastructure</h2>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Image Carousel */}
                <div className="relative w-full">
                    <Carousel
                        className="w-full"
                        onSelect={(index) => setActiveSlide(index)}
                    >
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
                </div>

                {/* Features Section */}
                <div className="grid gap-4">
                    {features.map((feature, index) => (
                        <Card key={index} className="overflow-hidden border-0 rounded-lg shadow-md transition-transform duration-300">
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
                    ))}
                </div>
            </div>

            {/* Cursor Dots */}
            {/* <div className="flex justify-center gap-3 mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === activeSlide ? "bg-green-600" : "bg-gray-200"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
        </section>
    )
}
