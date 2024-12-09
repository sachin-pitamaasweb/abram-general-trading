'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { useMediaQuery } from '@/hooks/use-media-query'

const products = [
  {
    name: 'Long Grain Rice',
    image: '/images/products/image.png'
  },
  {
    name: 'Sharbati Golden Sella Rice',
     image: '/images/products/image-1.png'
  },
  {
    name: 'Sona Masoori Rice',
    image: '/images/products/image-2.png'
  },
  {
    name: 'Cotton Seed Cake',
    image: '/images/products/image-3.png'
  },
  {
    name: 'Raisin',
    image: '/images/products/image-4.png'
  }
]

const MotionCard = motion(Card)

export default function ProductRange() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section className="w-full py-16 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.h2 
          className="text-2xl md:text-3xl font-medium mb-8 text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Check Out Our Range
        </motion.h2>

        {isMobile ? (
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5 md:basis-1/2">
                  <MotionCard 
                    className="border-none shadow-none"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 300px"
                        />
                      </div>
                      <h3 className="text-left text-sm md:text-base font-medium px-2">
                        {product.name}
                      </h3>
                    </CardContent>
                  </MotionCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 md:-left-5" />
            <CarouselNext className="-right-3 md:-right-5" />
          </Carousel>
        ) : (
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {products.map((product, index) => (
              <motion.div key={index} variants={itemVariants}>
                <MotionCard 
                  className="border-none bg-transparent shadow-none"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <CardContent className="p-0">
                    <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      />
                    </div>
                    <h3 className="text-left text-sm md:text-base font-medium px-2">
                      {product.name}
                    </h3>
                  </CardContent>
                </MotionCard>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

