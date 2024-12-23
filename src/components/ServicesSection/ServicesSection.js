'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'

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
                <div className="mb-8">
                    <h2 className="text-4xl font-medium mb-8">Services & Products</h2>
                    <p className="text-muted-foreground">
                        At Alamin General Trading, we deliver seamless supply chain solutions, including C&F services, state-level
                        marketing expertise, and super distributing. Our diverse range of offerings is tailored to meet every
                        business need, ensuring quality and reliability in every transaction while maintaining strong relationships with
                        our partners.
                    </p>
                </div>

                {isMobile ? (
                    // Mobile carousel view
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((service, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 first:pl-0">
                                    <ServiceCard title={service.title} description={service.description} image={service.image} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    // Desktop grid view
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard key={index} title={service.title} description={service.description} image={service.image} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

function ServiceCard({ title, description, image }) {
    return (
        <Card className="h-full">
            <div className="relative w-full overflow-hidden rounded-t-lg sm:h-64 md:h-80 lg:h-[27rem]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover h-full w-full"
                />
            </div>
            <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}
