// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// export default function BrandMarquee() {
//   const scrollRef = useRef(null);
//   const [isMouseDown, setIsMouseDown] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   // List of brand images
//   const allBrands = [
//     { src: "/images/brands/b-1.png", alt: "Mahindra Summit" },
//     { src: "/images/brands/b-2.png", alt: "XL CROP" },
//     { src: "/images/brands/b-3.png", alt: "Bayer" },
//     { src: "/images/brands/b-4.png", alt: "RCS" },
//     { src: "/images/brands/b-5.png", alt: "Aravali" },
//     { src: "/images/brands/b-6.png", alt: "PP Paras" },
//   ];

//   // Duplicate images to create an infinite loop effect
//   const duplicatedBrands = [...allBrands, ...allBrands];

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     // Auto-scroll functionality
//     const scroll = () => {
//       if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
//         scrollContainer.scrollLeft = 0;
//       } else {
//         scrollContainer.scrollLeft += 1; // Adjust speed here
//       }
//     };

//     const timer = setInterval(scroll, 30); // Adjust interval for smoother/faster scrolling
//     return () => clearInterval(timer);
//   }, []);

//   const handleMouseDown = (e) => {
//     setIsMouseDown(true);
//     setStartX(e.pageX - scrollRef.current.offsetLeft);
//     setScrollLeft(scrollRef.current.scrollLeft);
//   };

//   const handleMouseLeave = () => {
//     setIsMouseDown(false);
//   };

//   const handleMouseUp = () => {
//     setIsMouseDown(false);
//   };

//   const handleMouseMove = (e) => {
//     if (!isMouseDown) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX) * 2; // Adjust for faster/slower scroll
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const scroll = (direction) => {
//     const scrollAmount = 300; // Adjust this value to change scroll distance
//     if (scrollRef.current) {
//       if (direction === 'left') {
//         scrollRef.current.scrollLeft -= scrollAmount;
//       } else {
//         scrollRef.current.scrollLeft += scrollAmount;
//       }
//     }
//   };

//   return (
//     <div className="container w-full mx-auto px-4 py-12">
//       <h2 className="text-2xl md:text-3xl font-medium mb-8 text-left">
//         Our Brands
//       </h2>
//       <div className="relative">
//         <button
//           onClick={() => scroll('left')}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10"
//           aria-label="Scroll left"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           onClick={() => scroll('right')}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10"
//           aria-label="Scroll right"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//         <div
//           ref={scrollRef}
//           className="overflow-hidden relative w-full cursor-grab active:cursor-grabbing"
//           onMouseDown={handleMouseDown}
//           onMouseLeave={handleMouseLeave}
//           onMouseUp={handleMouseUp}
//           onMouseMove={handleMouseMove}
//         >
//           <div className="flex gap-6 w-max">
//             {duplicatedBrands.map((brand, index) => (
//               <div key={index} className="flex-shrink-0 min-w-[200px] sm:min-w-[220px] md:min-w-[240px]">
//                 <Image
//                   src={brand.src}
//                   alt={brand.alt}
//                   width={300}
//                   height={169}
//                   className="rounded-lg shadow-md object-cover"
//                   priority
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'

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
    slidesToScroll: 1 
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

  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto" style={{ maxWidth: '90rem' }}>
        <h2 className="text-4xl font-medium mb-8">Our Brands</h2>

        {isMobile ? (
          // Mobile carousel view
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {brands.map((brand) => (
                <div key={brand.name} className="flex-[0_0_80%] min-w-0 pl-4 first:pl-4">
                  <BrandCard name={brand.name} logo={brand.logo} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Desktop grid view
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <BrandCard key={brand.name} name={brand.name} logo={brand.logo} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function BrandCard({ name, logo }) {
  return (
    <Card className="p-6 flex items-center justify-center bg-white h-[180px] transition-shadow hover:shadow-md">
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
