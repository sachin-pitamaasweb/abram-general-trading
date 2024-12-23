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
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-medium mb-8">Services & Products</h2>
                    <p className="text-muted-foreground">
                        At Alamin General Trading, we deliver seamless supply chain solutions, including C&F services, state-level
                        marketing expertise, and super distributing. Our diverse range of offerings is tailored to meet every
                        business need, ensuring quality and reliability in every transaction while maintaining strong relationships with
                        our partners.
                    </p>
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

function ServiceCard({ title, description, image }) {
    return (
        <Card className="h-full group">
            <motion.div
                className="relative w-full overflow-hidden rounded-t-lg sm:h-64 md:h-80 lg:h-[27rem]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover h-full w-full"
                />
            </motion.div>
            <CardContent className="p-4">
                <motion.h3
                    className="font-semibold mb-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ x: 10 }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className="text-sm text-muted-foreground"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ x: -10 }}
                >
                    {description}
                </motion.p>
            </CardContent>
        </Card>
    )
}
