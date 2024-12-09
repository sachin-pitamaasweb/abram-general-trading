"use client"

import { useEffect, useRef } from "react"

export default function BrandMarquee() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const timer = setInterval(scroll, 30)
    return () => clearInterval(timer)
  }, [])

  // Duplicate items to create seamless loop
  const brands = Array(8).fill(0)
  const duplicatedBrands = [...brands, ...brands]

  return (
    <div className=" container w-full mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-medium mb-8 text-left transform transition-all duration-500">Our Brands</h2>
      <div 
        ref={scrollRef}
        className="overflow-hidden relative w-full"
      >
        <div className="flex gap-6 w-max animate-scroll">
          {duplicatedBrands.map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 min-w-[280px] sm:min-w-[320px]"
            >
              <div className="bg-gray-200 rounded-lg aspect-[16/9]" />
              <div className="bg-gray-200 rounded-lg aspect-[16/9]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

