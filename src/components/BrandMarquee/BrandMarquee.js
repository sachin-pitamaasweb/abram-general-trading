'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const brands = [
  { name: 'Brand 1', logo: '/images/banner/b-2.png' },
  { name: 'Brand 2', logo: '/images/banner/b-2.png' },
  { name: 'Brand 3', logo: '/images/banner/b-2.png' },
  { name: 'Brand 4', logo: '/images/banner/b-2.png' },
  { name: 'Brand 5', logo: '/images/banner/b-2.png' },
  { name: 'Brand 6', logo: '/images/banner/b-2.png' },
  { name: 'Brand 7', logo: '/images/banner/b-2.png' },
  { name: 'Brand 8', logo: '/images/banner/b-2.png' },
]

export default function BrandMarquee() {

  return (
    <section className="w-full py-16 px-4 bg-[#f8f8f8]">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-12">
          Our Brands
        </h2>

        {/* Static Grid for larger screens */}
        <div className="hidden lg:grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 aspect-[16/9] relative shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>

        {/* Marquee for mobile/tablet */}
        <div className="lg:hidden relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-white rounded-lg p-6 aspect-[16/9] relative shadow-sm"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-64 bg-white rounded-lg p-6 aspect-[16/9] relative shadow-sm"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

