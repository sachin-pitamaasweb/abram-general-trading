// 'use client'

// import Image from "next/image"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// import { useMediaQuery } from '../../hooks/use-media-query';

// export default function Gallery() {
//     const isMobile = useMediaQuery('(max-width: 768px)');

//   const images = [
//     {
//       src: "/images/gallery/p-1.png",
//       alt: "Team collaboration in modern office space",
//       className: "col-span-1 md:col-span-2 lg:col-span-3",
//     },
//     {
//         src: "/images/gallery/p-2.png",
//       alt: "Office workspace with team members",
//       className: "col-span-1 md:col-span-4 lg:col-span-5",
//     },
//     {
//         src: "/images/gallery/p-3.png",
//       alt: "Modern office with geometric wall design",
//       className: "col-span-2 md:col-span-3",
//     },
//     {
//         src: "/images/gallery/p-4.png",
//       alt: "Team meeting in casual setting",
//       className: "col-span-2 md:col-span-2 row-span-2",
//     },
//     {
//         src: "/images/gallery/p-5.png",
//       alt: "Close-up of hands during meeting",
//       className: "col-span-2 md:col-span-3",
//     },
//     {
//         src: "/images/gallery/p-6.png",
//       alt: "Team discussion with mobile devices",
//       className: "col-span-2 md:col-span-4",
//     },
//     {
//         src: "/images/gallery/p-7.png",
//       alt: "Team working on laptop",
//       className: "col-span-2 md:col-span-4",
//     },
//   ]

//   return (
//     <section className="py-12 px-4 md:px-6 lg:px-8 max-w-12xl mx-auto">
//       <h2 className="text-3xl font-bold tracking-tight mb-8">Gallery</h2>

//       {isMobile ? (
//         <Carousel className="w-full max-w-xs mx-auto">
//           <CarouselContent>
//             {images.map((image, index) => (
//               <CarouselItem key={index}>
//                 <div className="relative aspect-video overflow-hidden rounded-lg">
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw"
//                     priority={index < 2}
//                   />
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="hidden md:flex" />
//           <CarouselNext className="hidden md:flex" />
//         </Carousel>
//       ) : (
//         <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`relative aspect-video overflow-hidden rounded-lg ${image.className}`}
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 fill
//                 className="object-cover hover:scale-105 transition-transform duration-300"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 priority={index < 2}
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   )
// }



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
    className: "col-span-1 row-span-1"
  },
  {
    src: "/images/gallery/p-2.png",
    alt: "Open office environment with team members",
    className: "col-span-1 row-span-1"
  },
  {
    src: "/images/gallery/p-3.png",
    alt: "Modern office with geometric wall design",
    className: "col-span-1 row-span-1"
  },
  {
    src: "/images/gallery/p-4.png",
    alt: "Casual meeting space collaboration",
    className: "col-span-1 row-span-1"
  },
  {
    src: "/images/gallery/p-5.png",
    alt: "Close-up of technology collaboration",
    className: "col-span-1 row-span-1"
  },
  {
    src: "/images/gallery/p-6.png",
    alt: "Team reviewing mobile content",
    className: "col-span-2 row-span-1"
  },
  {
    src: "/images/gallery/p-7.png",
    alt: "Group working on laptop",
    className: "col-span-1 row-span-1"
  }
]

export default function OfficeGallery() {
     const isMobile = useMediaQuery('(max-width: 768px)');
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
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw"
                    priority={index < 2}
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Top row - two large images */}
        <div className="col-span-2 md:col-span-3 grid grid-cols-2 gap-4">
          {images.slice(0, 2).map((image, index) => (
            <div key={index} className="relative h-[450px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>

        {/* Middle row - three square images */}
        {images.slice(2, 5).map((image, index) => (
          <div key={index} className="relative h-[350px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        ))}

        {/* Bottom row - 2:1 ratio images */}
        <div className="col-span-2 relative h-[350px]">
          <Image
            src={images[5].src}
            alt={images[5].alt}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-[350px]">
          <Image
            src={images[6].src}
            alt={images[6].alt}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  )
}
