"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"

const testimonials = [
  {
    content: "Being a part of Abram General Trading has been an enriching experience, with the company's commitment to its clients and employees creating an environment of growth and excellence.",
    author: "RK Shetty"
  },
  {
    content: "The dedication of the team at Abram General Trading is unmatched. Their expertise and professionalism are truly inspiring.",
    author: "John Doe"
  },
  {
    content: "I have witnessed firsthand the growth and innovation at Abram General Trading. It’s an incredible place to work.",
    author: "Jane Smith"
  },
]

export default function Testimonials() {
  return (
    <section className="container w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-medium mb-8 text-center">
        Testimonials
      </h2>

      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
              <Card className="border-0 shadow-md h-full">
                <CardContent className="p-8 h-full relative overflow-hidden rounded-lg">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-green-50 opacity-90" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col p-4">
                    <p className="text-sm text-gray-800 flex-grow">
                      {testimonial.content}
                    </p>
                    <p className="mt-4 text-sm font-medium text-gray-900">
                      {testimonial.author}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="left-4 bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600" />
        <CarouselNext className="right-4 bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600" />
      </Carousel>
    </section>
  )
}
