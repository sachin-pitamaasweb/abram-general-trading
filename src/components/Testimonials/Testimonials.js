'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useState } from "react"

const testimonials = [
  {
    content: "Being a part of Abran General Trading has been an enriching experience, with the company's commitment to its clients and employees creating an environment of growth and excellence.",
    author: "RK Shetty"
  },
  {
    content: "Being a part of Abran General Trading has been an enriching experience, with the company's commitment to its clients and employees creating an environment of growth and excellence.",
    author: "RK Shetty"
  },
  {
    content: "Being a part of Abran General Trading has been an enriching experience, with the company's commitment to its clients and employees creating an environment of growth and excellence.",
    author: "RK Shetty"
  },
  {
    content: "Being a part of Abran General Trading has been an enriching experience, with the company's commitment to its clients and employees creating an environment of growth and excellence.",
    author: "RK Shetty"
  },
  {
    content: "Being a part of Abran General Trading has been an enriching experience, with the company's commitment to its clients and employees creating an environment of growth and excellence.",
    author: "RK Shetty"
  },
  {
    content: "Being a part of Abran General Trading has been an enriching experience, with the company's commitment to its clients and employees creating an environment of growth and excellence.",
    author: "RK Shetty"
  },
  {
    content: "Being a part of Abran General Trading has been an enriching experience, with the company's commitment to its clients and employees creating an environment of growth and excellence.",
    author: "RK Shetty"
  },
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="container w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-medium mb-8">Testimonial</h2>
      
      <Carousel 
        className="w-full" 
        onSelect={(index) => setCurrentSlide(index)}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-0 shadow-none h-full">
                <CardContent className="p-6 h-full relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-green-50 transition-colors duration-300 group-hover:from-green-50 group-hover:to-green-250" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col">
                    <p className="text-sm text-muted-foreground flex-grow">
                      {testimonial.content}
                    </p>
                    <p className="mt-4 text-sm font-medium">
                      {testimonial.author}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dot Indicators */}
        {/* <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-[#00A651]" : "bg-white border border-gray-300"
              }`}
            />
          ))}
        </div> */}
      </Carousel>
    </section>
  )
}

