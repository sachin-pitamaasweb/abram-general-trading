'use client'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';

export default function PrinciplesSection() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const principles = [
    {
      imageUrl: "https://res.cloudinary.com/dtivafy25/image/upload/v1736494626/img-1_vao3hs.png",
      title: "POWER OF PEOPLE",
    },
    {
      imageUrl: "https://res.cloudinary.com/dtivafy25/image/upload/v1736494626/img-2_a5khqo.png",
      title: "PERFORMANCE",
    },
    {
      imageUrl: "https://res.cloudinary.com/dtivafy25/image/upload/v1736494626/img-3_e2p9qz.png",
      title: "TASTE OF TRUST",
    },
    {
      imageUrl: "https://res.cloudinary.com/dtivafy25/image/upload/v1736494626/img-4_xsdjdw.png",
      title: "PASSION FOR FLAVOR",
    },
    {
      imageUrl: "https://res.cloudinary.com/dtivafy25/image/upload/v1736494626/img-5_ncu3df.png",
      title: "DRIVEN TO INNOVATE",
    },
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16" style={{ maxWidth: "90rem" }}>
      <motion.div 
        className="text-left mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-black text-3xl md:text-4xl font-semibold">OUR PRINCIPLES</h2>
        <p className="text-gray-600 max-w-2xl text-lg md:text-xl leading-relaxed">
          Committed to delivering superior-quality rice with sustainable practices,
          innovative solutions, and unwavering integrity
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card 
              className="border-none shadow-sm flex justify-center hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <motion.div
                  className="mb-4 relative w-32 h-32"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={principle.imageUrl}
                    alt={principle.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
                <h3 className="font-medium text-lg tracking-wide">
                  {principle.title}
                </h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
