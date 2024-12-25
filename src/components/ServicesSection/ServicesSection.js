'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const services = [
    {
        title: 'C&F Services',
        description: 'At Alamin General Trading, we offer efficient C&F services, ensuring smooth customs clearance to facilitate swift cargo and market access.',
        image: '/images/home/s-1.png',
    },
    {
        title: 'Super Distributor',
        description: 'As a super distributor, Alamin General Trading ensures seamless supply connecting manufacturers to retailers with efficient operations and quality control.',
        image: '/images/home/s-2.png',
    },
    {
        title: 'Licensing and Documentation',
        description: 'At Alamin General Trading, we streamline agricultural documentation and ensure smooth market entry for manufacturers.',
        image: '/images/home/s-3.png',
    },
    {
        title: 'Marketing Services',
        description: 'At Alamin General Trading, we provide state-wise marketing services, branding, and digital strategies to boost market visibility and reach.',
        image: '/images/home/s-4.png',
    },
    {
        title: 'Wholesale and Trading',
        description: 'At Alamin General Trading, we handle bulk agricultural commodities and provide supplies to local markets with quality and consistency.',
        image: '/images/home/s-5.png',
    },
]

export default function ServicesSection() {
    const [isMobile, setIsMobile] = useState(false)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

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

    return (
        <section className="py-12 px-4 md:px-6">
            <div className="max-w-7xl mx-auto" style={{ maxWidth: '90rem' }}>
                <motion.div
                    className="mb-8"
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-4xl font-medium mb-8"
                        initial={{ opacity: 0, x: 50, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        Services & Products
                    </motion.h2>
                    <AnimatedParagraph />
                </motion.div>

                {isMobile ? (
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 pl-4 first:pl-0"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <ServiceCard title={service.title} description={service.description} image={service.image} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <ServiceCard title={service.title} description={service.description} image={service.image} />
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

function AnimatedParagraph() {
    const paragraph =
        "At Alamin General Trading, we deliver seamless supply chain solutions, including C&F services, state-level marketing expertise, and super distributing. Our diverse range of offerings is tailored to meet every business need, ensuring quality and reliability in every transaction while maintaining strong relationships with our partners.";

    const words = paragraph.split(" "); // Split the paragraph into individual words

    return (
        <motion.p
            className="text-muted-foreground flex flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Allow reverse scroll effect
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
            }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="mr-1"
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.p>
    );
}

function ServiceCard({ title, description, image }) {
    return (
        <Card
            className="h-full group relative transform-gpu transition-transform duration-500 hover:scale-105"
            style={{ perspective: '1500px' }} // Adds depth
        >
            <motion.div
                className="relative w-full overflow-hidden rounded-t-lg sm:h-64 md:h-80 lg:h-[27rem] bg-gradient-to-br from-gray-50 via-white to-gray-100 shadow-lg"
                style={{
                    transformStyle: 'preserve-3d', // Maintains 3D transformations
                    transition: 'transform 0.6s ease',
                }}
                whileHover={{
                    translateZ: 20, // Moves the card closer to the viewer
                    scale: 1.05, // Adds a slight zoom effect
                }}
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover h-full w-full rounded-lg"
                />
            </motion.div>
            <CardContent className="p-4 relative">
                <motion.h3
                    className="font-semibold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                >
                    {description}
                </motion.p>
            </CardContent>
        </Card>
    );
}
