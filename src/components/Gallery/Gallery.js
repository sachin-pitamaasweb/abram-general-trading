'use client'

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { useMediaQuery } from '../../hooks/use-media-query'


const images = [
  {
    src: "/images/gallery/p-1.png",
    alt: "Team meeting in wooden accented office space",
  },
  {
    src: "/images/gallery/p-2.png",
    alt: "Open office environment with team members",
  },
  {
    src: "/images/gallery/g-3.png",
    alt: "Modern office with geometric wall design",
  },
  {
    src: "/images/gallery/g-3.png",
    alt: "Casual meeting space collaboration",
  },
  {
    src: "/images/gallery/g-3.png",
    alt: "Close-up of technology collaboration",
  },
]

export default function OfficeGallery() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (isMobile) {
    return (
      <div className="w-full px-4 py-8">
        <h2 className="text-2xl font-medium mb-6">Gallery</h2>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw"
                    priority={index === 0} // Use priority for the first image
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    )
  }

  return (
    <div className="mx-auto px-4 py-8" style={{ maxWidth: '90rem' }}>
      <h2 className="text-4xl font-medium mb-8">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
        {/* Middle row - three square images */}
        {images.slice(2, 5).map((image, index) => (
          <div
            key={index}
            className="relative h-[350px] overflow-hidden rounded-lg fade-in"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              loading={index === 0 ? undefined : "lazy"} // Lazy load for non-priority images
            />
          </div>
        ))}
      </div>
    </div>
  )
}
