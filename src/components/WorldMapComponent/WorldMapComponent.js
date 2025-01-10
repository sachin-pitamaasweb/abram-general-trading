"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import WorldMap from "react-svg-worldmap";
import Image from 'next/image'

export default function WorldMapComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure WorldMap only renders on the client
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const countries = [
    "INDIA", "DUBAI", "TURKEY", "SAUDI ARABIA", "MADAGASCAR", "MIDDLE EAST",
    "EUROPE", "CANADA", "REUNION", "MALDIVES", "SINGAPORE", "MAURITIUS",
    "AUSTRALIA", "SRI LANKA", "NEW ZEALAND", "RUSSIA", "TURKMINISTAN",
    "UKRAINE", "AZERBAIJAN", "GEORGIA", "EGYPT", "SUDAN", "LIBYA",
    "CAPE TOWN", "LEBANON",
  ];

  const countryToCode = {
    INDIA: "IN", DUBAI: "AE", TURKEY: "TR", SAUDI_ARABIA: "SA", MADAGASCAR: "MG",
    MIDDLE_EAST: "SA", EUROPE: "EU", CANADA: "CA", REUNION: "RE", MALDIVES: "MV",
    SINGAPORE: "SG", MAURITIUS: "MU", AUSTRALIA: "AU", SRI_LANKA: "LK",
    NEW_ZEALAND: "NZ", RUSSIA: "RU", TURKMINISTAN: "TM", UKRAINE: "UA",
    AZERBAIJAN: "AZ", GEORGIA: "GE", EGYPT: "EG", SUDAN: "SD", LIBYA: "LY",
    CAPE_TOWN: "ZA", LEBANON: "LB",
  };

  const data = countries.map((country) => ({
    country: countryToCode[country] || country,
    value: 1,
  }));

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full px-4 py-8 sm:py-12 lg:py-16 max-w-7xl">
        <motion.div
          className="relative w-full aspect-[16/9] lg:aspect-auto max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={fadeInVariants}
        >
          {isClient && (
            // <WorldMap
            //   color="#09723C"
            //   valueSuffix="presence"
            //   size="responsive"
            //   data={data}
              
            //   tooltipBgColor="#09723C"
            //   tooltipTextColor="#fff"
            // />
            <Image 
              src="/images/about/map.png"
              alt="World Map"
              width={1000}
              height={600}
              layout="responsive"
              objectFit="contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"

            />
          )}
        </motion.div>
      </div>
    </div>
  );
}
