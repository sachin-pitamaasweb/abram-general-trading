"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion

export default function PresenceMap() {
  // Animation Variants for Scroll
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-8 sm:py-12 lg:py-16" style={{ maxWidth: "90rem" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-4 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }} // Triggers every time it enters the viewport
            variants={fadeInVariants}
          >
            <h2 className="text-4xl font-medium mb-8">Presence</h2>
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
          </motion.div>

          {/* Map */}
          <motion.div
            className="relative w-full aspect-[3/4] sm:aspect-square max-w-lg mx-auto lg:max-w-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }} // Triggers every time it enters the viewport
            variants={fadeInVariants}
          >
            <Image
              src="https://res.cloudinary.com/dtivafy25/image/upload/v1734524253/dgsgxgzv_2_k0fvaz.png"
              alt="Map of India showing company presence"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
            {/* Location Indicators */}
            <div className="absolute top-[45%] right-[78%] w-4 h-4 bg-[#9FCCB5] rounded-full animate-location" /> {/* Gujarat */}
            <div className="absolute top-[56%] right-[68%] w-8 h-8 bg-[#09723C] rounded-full animate-location delay-100" /> {/* Maharashtra - larger dot */}
            <div className="absolute top-[46%] right-[60%] w-3 h-3 bg-[#09723C] rounded-full animate-location delay-200" /> {/* Madhya Pradesh */}
            <div className="absolute top-[50%] right-[48%] w-3 h-3 bg-[#09723C] rounded-full animate-location delay-300" /> {/* Chhattisgarh */}
            <div className="absolute bottom-[26%] right-[68%] w-4 h-4 bg-[#09723C] rounded-full animate-location delay-400" /> {/* Karnataka */}
          </motion.div>
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
    </div>
  );
}
