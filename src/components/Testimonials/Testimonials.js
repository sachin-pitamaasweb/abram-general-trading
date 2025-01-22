'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { motion } from "framer-motion" // Import framer-motion for animations
import { useState, useEffect } from "react"

const testimonials = [
  {
    content: "Being a part of Abran General Trading has been an enriching experience, with the company's commitment to its clients and employees creating an environment of growth and excellence.",
    author: "RK Shetty"
  },
  {
    content: "The dedication of the team at Abran General Trading is unmatched. Their expertise and professionalism are truly inspiring.",
    author: "John Doe"
  },
  {
    content: "I have witnessed firsthand the growth and innovation at Abran General Trading. It’s an incredible place to work.",
    author: "Jane Smith"
  },
  // Add more testimonials as needed
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Automatically scroll to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container w-full max-w-6xl mx-auto px-4 py-12">
      <motion.h2
        className="text-4xl font-medium mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
      >
        Testimonials
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
      >
        <Carousel
          className="w-full relative"
          activeIndex={currentSlide}
          onSelect={(index) => setCurrentSlide(index)}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3`}>
                <Card className="border-0 shadow-md h-full group">
                  <CardContent className="p-12 h-full relative overflow-hidden transition-all duration-300 ease-in-out group-hover:rounded-lg">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white to-green-50 transition-all duration-300 ease-in-out group-hover:to-green-200 group-hover:opacity-90" />

                    {/* Content */}
                    <div className="relative h-full flex flex-col p-4">
                      <p className="text-sm text-muted-foreground flex-grow transition-all duration-300 ease-in-out group-hover:text-gray-800">
                        {testimonial.content}
                      </p>
                      <p className="mt-4 text-sm font-medium transition-all duration-300 ease-in-out group-hover:text-gray-900">
                        {testimonial.author}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  )
}
