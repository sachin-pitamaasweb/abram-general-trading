// import Image from "next/image"
// import { Card } from "@/components/ui/card"

// export default function ProductCard({ product }) {
//   return (
//     <Card className="relative overflow-hidden bg-gradient-to-r from-[#000000] to-[#F74731] p-6 rounded-2xl">
//       <div
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 30c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm25 0c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
//           backgroundSize: "100px 100px",
//         }}
//       />

//       {/* Product Images */}
//       <div className="flex items-center justify-center gap-2 mb-6">
//         <div className="w-1/4 transform -translate-y-4">
//           <Image
//             src={product.images.left || "/placeholder.svg"}
//             alt="Left Product"
//             width={100}
//             height={150}
//             className="object-contain"
//           />
//         </div>
//         <div className="w-2/5">
//           <Image
//             src={product.images.center || "/placeholder.svg"}
//             alt="Center Product"
//             width={150}
//             height={200}
//             className="object-contain"
//           />
//         </div>
//         <div className="w-1/4 transform -translate-y-4">
//           <Image
//             src={product.images.right || "/placeholder.svg"}
//             alt="Right Product"
//             width={100}
//             height={150}
//             className="object-contain"
//           />
//         </div>
//       </div>

//       {/* Benefits */}
//       <div className="space-y-2">
//         {product.benefits.map((benefit, idx) => (
//           <div key={idx} className="bg-white rounded-xl p-4 shadow-lg">
//             <div className="flex items-center gap-3">
//               <div className="bg-[#35BE95] rounded-full p-2 flex-shrink-0 text-white">{benefit.icon}</div>
//               <h3 className="font-bold text-lg text-gray-800">{benefit.text}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Card>
//   )
// }


import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function ProductCard({ product, bgGradient }) {
  return (
    <Card
      className="relative overflow-hidden p-6 rounded-2xl"
      style={{
        background: bgGradient, // ✅ Dynamically set the background gradient
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 30c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm25 0c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Product Images */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-1/4 transform -translate-y-4">
          <Image
            src={product.images.left || "/placeholder.svg"}
            alt="Left Product"
            width={100}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="w-2/5">
          <Image
            src={product.images.center || "/placeholder.svg"}
            alt="Center Product"
            width={150}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="w-1/4 transform -translate-y-4">
          <Image
            src={product.images.right || "/placeholder.svg"}
            alt="Right Product"
            width={100}
            height={150}
            className="object-contain"
          />
        </div>
      </div>

      {/* Benefits */}
      <div className="space-y-2">
        {product.benefits.map((benefit, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-[#35BE95] rounded-full p-2 flex-shrink-0 text-white">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-800">{benefit.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
