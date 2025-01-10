// import Image from 'next/image'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// export default function QualityControl() {
//   return (
//     <section className="w-full mx-auto px-4 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//         {/* Left Content Card */}
//         <Card className="border-none shadow-sm">
//           <CardHeader>
//             <CardTitle className="text-2xl md:text-3xl text-emerald-600 font-bold">
//               QUALITY CONTROL
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//               Our Quality control department ensures the best quality of paddy and rice through systematic examination so that the end product is qualitative.
//             </p>
//             <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//               That impurities, inspection of the size and nature are completely removed in different stages of the passage mostly through automated machinery.
//             </p>
//             <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//               Our quality assurance system makes sure that the end product destined to enter market distribution is of a certain quality. Our highly experienced quality control professionals obtain all the products from reliable sources making sure that they are delivered to the client with the most high standards.
//             </p>
//             <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//               All operations are constantly monitored to ensure that we retain and excel further in building up our reputation as a globally known rice millon company.
//             </p>
//           </CardContent>
//         </Card>

//         {/* Right Certificate Image */}
//         <div className="relative h-[500px] md:h-[600px] w-full">
//           <Image
//             src="/images/about/image-1.png"
//             alt="ISO 45001:2018 Certificate of Registration"
//             fill
//             className="object-contain"
//             sizes="(max-width: 768px) 100vw, 50vw"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function QualityControl() {
  return (
    <div className="container mx-auto p-4 md:p-8" style={{ maxWidth: "90rem" }}>
      <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
        {/* Left Content Card */}
        <Card className="h-full">
          <CardContent className="flex items-center h-full p-6 md:p-8">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-green-500 tracking-tight">
                QUALITY CONTROL
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our Quality control department ensures the best quality of paddy and rice through systematic examination so that the end product is qualitative.
                </p>
                <p>
                  Most varieties, regardless of their size and nature are carefully removed in different stages of the passage of paddy through automated machinery.
                </p>
                <p>
                  Our quality assurance system makes sure that the end product destined to enter market distribution is of perfect quality conforming to all prescribed norms. Professional criteria at the products from reliable sources making sure that they are delivered to the clients with committed time frames with excellent quality.
                </p>
                <p>
                  All operations are constantly monitored to ensure that quality standards are maintained to establish ourselves as a globally known rice miller company.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Certificate Card */}
        <Card className="h-full shadow-none bg-transparent border-none"> 
          <CardContent className="p-0 h-full">
            <div className="relative h-full min-h-[600px] md:min-h-[700px]">
              <div className="absolute inset-0  rounded-sm z-10" />
              <Image
                src="/images/about/image-1.png"
                alt="ISO 45001:2018 Certificate"
                fill
                className="object-contain p-1"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

