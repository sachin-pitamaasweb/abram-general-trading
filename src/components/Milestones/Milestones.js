// "use client";

// import { useState, useEffect, useRef } from 'react';

// const AnimatedNumber = ({ end, duration = 2000 }) => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           let start = 0;
//           const increment = end / (duration / 16);
//           const timer = setInterval(() => {
//             start += increment;
//             if (start > end) {
//               clearInterval(timer);
//               setCount(end);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, 16);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (countRef.current) {
//       observer.observe(countRef.current);
//     }

//     return () => {
//       if (countRef.current) {
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//         observer.unobserve(countRef.current);
//       }
//     };
//   }, [end, duration]);

//   return <span ref={countRef}>{count}</span>;
// };

// export default function Milestones() {
//   const milestones = [
//     {
//       number: 200,
//       suffix: "+",
//       description: "Products across multiple domain"
//     },
//     {
//       number: 1700,
//       suffix: "+",
//       description: "People-strong network of dealers and channel partners"
//     },
//     {
//       number: 10,
//       suffix: "+",
//       description: "Multinational Brands have worked with us so far"
//     }
//   ];

//   return (
//     <section className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl">
//           <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Milestones</h2>
//           <p className="text-gray-600 mb-8 sm:mb-12">
//             Here are some numbers that tell the story of our journey to agricultural excellence and pioneering innovation.
//           </p>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {milestones.map((milestone, index) => (
//               <div 
//                 key={index}
//                 className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
//               >
//                 <div className="text-3xl sm:text-4xl font-bold mb-3">
//                   <AnimatedNumber end={milestone.number} />
//                   {milestone.suffix}
//                 </div>
//                 <p className="text-gray-600 text-sm sm:text-base">
//                   {milestone.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Milestones() {
  return (
    <section className="relative mx-auto min-h-[600px] w-full overflow-hidden rounded-lg" style={{ maxWidth: '90rem' }}>
      {/* Background Image */}
      <Image
        src="/images/home/Milestones.png"
        alt="Terraced agricultural fields with misty mountains"
        fill
        className="object-cover"
        priority
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 grid gap-4 p-6 md:absolute md:right-6 md:top-1/2 md:w-[450px] md:-translate-y-1/2 md:gap-6 md:p-0">
        {/* Header Card */}
        <Card className="bg-white/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl font-medium">Milestones</CardTitle>
            <p className="text-sm text-muted-foreground">
              These numbers reflect our journey of agricultural excellence and trailblazing innovation.
            </p>
          </CardHeader>
        </Card>

        {/* Stats Cards */}
        <Card className="bg-white/95 backdrop-blur">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="text-3xl font-semibold">200+</div>
            <p className="text-sm">Products across multiple domain</p>
          </CardContent>
        </Card>

        <Card className="bg-white/95 backdrop-blur">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="text-3xl font-semibold">1700+</div>
            <p className="text-sm">People-strong network of dealers and channel partners</p>
          </CardContent>
        </Card>

        <Card className="bg-white/95 backdrop-blur">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="text-3xl font-semibold">10+</div>
            <p className="text-sm">Multinational Brands have worked with us so far.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

