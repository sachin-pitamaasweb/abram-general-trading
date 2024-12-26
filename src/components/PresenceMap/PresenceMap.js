"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WorldMap from "react-svg-worldmap";

export default function PresenceMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure WorldMap only renders on the client
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const animateParagraph = (text) => {
    const words = text.split(" ");
    return (
      <motion.p
        className="text-gray-600 text-sm sm:text-base leading-relaxed flex flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="mr-1"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    );
  };

  const countries = [
    "INDIA", "DUBAI", "TURKEY", "SAUDI ARABIA", "MADAGASCAR", "MIDDLE EAST", 
    "EUROPE", "CANADA", "REUNION", "MALDIVES", "SINGAPORE", "MAURITIUS", 
    "AUSTRALIA", "SRI LANKA", "NEW ZEALAND", "RUSSIA", "TURKMINISTAN", 
    "UKRAINE", "AZERBAIJAN", "GEORGIA", "EGYPT", "SUDAN", "LIBYA", 
    "CAPE TOWN", "LEBANON"
  ];

  const countryToCode = {
    INDIA: "IN", DUBAI: "AE", TURKEY: "TR", SAUDI_ARABIA: "SA", MADAGASCAR: "MG", 
    MIDDLE_EAST: "SA", EUROPE: "EU", CANADA: "CA", REUNION: "RE", MALDIVES: "MV", 
    SINGAPORE: "SG", MAURITIUS: "MU", AUSTRALIA: "AU", SRI_LANKA: "LK", 
    NEW_ZEALAND: "NZ", RUSSIA: "RU", TURKMINISTAN: "TM", UKRAINE: "UA", 
    AZERBAIJAN: "AZ", GEORGIA: "GE", EGYPT: "EG", SUDAN: "SD", LIBYA: "LY", 
    CAPE_TOWN: "ZA", LEBANON: "LB"
  };

  const data = countries.map((country) => ({
    country: countryToCode[country] || country,
    value: 1,
  }));

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-8 sm:py-12 lg:py-16" style={{ maxWidth: "90rem" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-4 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={fadeInVariants}
          >
            <motion.h2
              className="text-4xl font-medium mb-8"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Global Presence
            </motion.h2>
            {animateParagraph(
              "We have established a strong global presence, spanning across multiple continents and regions. Our operations extend from India to the Middle East, Europe, North America, Africa, and the Asia-Pacific region."
            )}
            {animateParagraph(
              "This extensive international network allows us to serve a diverse range of markets efficiently, fostering global partnerships and driving innovation across borders. Our strategic presence in key locations worldwide reinforces our commitment to global excellence and sustainable growth."
            )}
          </motion.div>

          {/* World Map */}
          {isClient && (
            <motion.div
              className="relative w-full aspect-[16/9] max-w-lg mx-auto lg:max-w-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              variants={fadeInVariants}
            >
              <WorldMap
                color="#09723C"
                valueSuffix="presence"
                size="responsive"
                data={data}
                tooltipBgColor="#09723C"
                tooltipTextColor="#ffffff"
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
