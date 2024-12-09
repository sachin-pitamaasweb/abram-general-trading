'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BannerSection() {
  return (
    <section className="w-full px-4 py-6">
      <div className="container mx-auto">
        <motion.div 
          className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/banner/b-2.png" // Replace with your rice field image
            alt="Rice field at sunset"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          
          {/* Content */}
          <motion.div 
            className="absolute bottom-0 left-0 p-6 md:p-8 lg:p-12 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold max-w-2xl">
              Cultivating Quality, Harvesting Excellence
            </h1>
            <p className="text-white/90 mt-2 md:mt-4 text-sm md:text-base lg:text-lg max-w-xl">
              Premium rice and agricultural products from the finest fields
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

