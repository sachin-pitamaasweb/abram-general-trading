'use client'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'

export default function PrinciplesSection() {
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
  ];

  return (
    <section className="w-full max-w-[90rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20">
      {/* Header Section */}
      <motion.div
        className="text-left mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          OUR PRINCIPLES
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed mx-auto">
          Committed to delivering superior-quality rice with sustainable practices,
          innovative solutions, and unwavering integrity.
        </p>
      </motion.div>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card
              className="border-none shadow-lg bg-white rounded-xl flex justify-center items-center h-[296px]"
            >
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                  className="mb-6 relative w-36 h-36"
                >
                  <Image
                    src={principle.imageUrl}
                    alt={principle.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
                <h3 className="font-semibold text-xl sm:text-2xl tracking-wide text-gray-900">
                  {principle.title}
                </h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
