'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion' // Import framer-motion for animations

const brands = [
  {
    name: 'Mahindra Summit',
    logo: 'https://res.cloudinary.com/dtivafy25/image/upload/v1734437569/b-1_ueek9r.png',
  },
  {
    name: 'XL CROP',
    logo: 'https://res.cloudinary.com/dtivafy25/image/upload/v1734437569/b-2_scoieo.png',
  },
  {
    name: 'Bayer',
    logo: 'https://res.cloudinary.com/dtivafy25/image/upload/v1734437569/b-3_oopodd.png',
  },
  {
    name: 'RCS',
    logo: 'https://res.cloudinary.com/dtivafy25/image/upload/v1734437569/b-4_bwxyso.png',
  },
  {
    name: 'Provali',
    logo: 'https://res.cloudinary.com/dtivafy25/image/upload/v1734437569/b-5_ymhgpj.png',
  },
  {
    name: 'PPT Paras',
    logo: 'https://res.cloudinary.com/dtivafy25/image/upload/v1734437569/b-6_sypdzn.png',
  },
]

export default function BrandShowcase() {
  const [isMobile, setIsMobile] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit()
    }
  }, [emblaApi])

  // Scroll Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto" style={{ maxWidth: '90rem' }}>
        <h2 className="text-4xl font-medium mb-8">Our Brands</h2>

        {isMobile ? (
          // Mobile carousel view
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {brands.map((brand) => (
                <motion.div
                  key={brand.name}
                  className="flex-[0_0_80%] min-w-0 pl-4 first:pl-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.5 }} // Re-triggers animation on every scroll into view
                  variants={cardVariants}
                >
                  <BrandCard name={brand.name} logo={brand.logo} />
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          // Desktop grid view
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <motion.div
                key={brand.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }} // Re-triggers animation on every scroll into view
                variants={cardVariants}
              >
                <BrandCard name={brand.name} logo={brand.logo} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function BrandCard({ name, logo }) {
  return (
    <Card className="p-6 flex items-center justify-center bg-white h-[180px] transition-all hover:shadow-lg hover:scale-105">
      <div className="relative w-full h-full">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw"
        />
      </div>
    </Card>
  )
}
