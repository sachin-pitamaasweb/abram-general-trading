// import Image from "next/image";

// export default function PresenceMap() {
//   return (
//     <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//         {/* Text Content */}
//         <div className="space-y-4 text-center lg:text-left">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Presence</h2>
//           <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//             We have a presence in Maharashtra (Aurangabad), complemented by our
//             manufacturing facilities in Gujarat (Halol). And with strong distribution footprint across
//             India, we are well-positioned to serve our customers across the country. Based in
//             Halol and Aurangabad, we have recently expanded our company by setting up in our
//             new facility in Aurangabad.
//           </p>
//           <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//             Through this unique approach, we are not only consolidating our presence domestically but
//             also expanding our reach to international markets, strengthening our commitment to
//             operational growth and global excellence.
//           </p>
//         </div>

//         {/* Map */}
//         <div className="relative w-full aspect-[3/4] sm:aspect-square max-w-lg mx-auto lg:max-w-none">
//           <Image
//             src="/map.png"
//             alt="Map of India showing company presence"
//             fill
//             className="object-contain"
//             priority
//             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }



"use client";

import Image from "next/image";

export default function PresenceMap() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Presence</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We have a strong presence across key states in India. Our operations span Maharashtra,
            Madhya Pradesh, Karnataka, Gujarat, and Chhattisgarh, allowing us to serve a wide
            range of customers efficiently.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Through this strategic presence, we are not only consolidating our position domestically
            but also expanding our reach to international markets, strengthening our commitment to
            operational growth and global excellence.
          </p>
        </div>

        {/* Map */}
        <div className="relative w-full aspect-[3/4] sm:aspect-square max-w-lg mx-auto lg:max-w-none">
          <Image
            src="https://res.cloudinary.com/dtivafy25/image/upload/v1734524253/dgsgxgzv_2_k0fvaz.png"
            alt="Map of India showing company presence"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
          />
          {/* Location Indicators */}
          <div className="absolute top-[45%] right-[78%] w-4 h-4 bg-green-500 rounded-full animate-location" /> {/* Gujarat */}
          <div className="absolute top-[56%] right-[68%] w-8 h-8 bg-green-500 rounded-full animate-location delay-100" /> {/* Maharashtra - larger dot */}
          <div className="absolute top-[46%] right-[60%] w-3 h-3 bg-green-500 rounded-full animate-location delay-200" /> {/* Madhya Pradesh */}
          <div className="absolute top-[50%] right-[48%] w-3 h-3 bg-green-500 rounded-full animate-location delay-300" /> {/* Chhattisgarh */}
          <div className="absolute bottom-[26%] right-[68%] w-4 h-4 bg-green-500 rounded-full animate-location delay-400" /> {/* Karnataka */}
        </div>
      </div>

      {/* Add the animation styles */}
      <style jsx global>{`
        @keyframes locationPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
        }

        .animate-location {
          animation: locationPulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
