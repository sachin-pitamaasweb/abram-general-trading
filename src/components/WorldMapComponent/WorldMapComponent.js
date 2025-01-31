"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import WorldMap from "react-svg-worldmap";

export default function  WorldMapComponent() {
  const [isClient, setIsClient] = useState(false);
  const [scale, setScale] = useState(1);
  const [dynamicPadding, setDynamicPadding] = useState("p-8"); // Default padding

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setScale(1.8);
        setDynamicPadding("p-[200px]"); // Large desktops
      } else if (window.innerWidth >= 1024) {
        setScale(1.6);
        setDynamicPadding("p-[150px]"); // Laptops
      } else if (window.innerWidth >= 768) {
        setScale(1.3);
        setDynamicPadding("p-[100px]"); // Tablets
      } else {
        setScale(1);
        setDynamicPadding("p-8"); // Default for mobiles
      }
    };

    handleResize(); // Set initial values
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const countries = [
    "INDIA", "DUBAI", "TURKEY", "SAUDI ARABIA", "MADAGASCAR", "MIDDLE EAST",
    "CANADA", "REUNION", "MALDIVES", "SINGAPORE", "MAURITIUS", "AUSTRALIA",
    "SRI LANKA", "NEW ZEALAND", "RUSSIA", "TURKMENISTAN", "UKRAINE",
    "AZERBAIJAN", "GEORGIA", "EGYPT", "SUDAN", "LIBYA", "CAPE TOWN", "LEBANON",
  ];

  const countryToCode = {
    INDIA: "IN",
    DUBAI: "AE",
    TURKEY: "TR",
    "SAUDI ARABIA": "SA",
    MADAGASCAR: "MG",
    "MIDDLE EAST": "AE",
    CANADA: "CA",
    REUNION: "RE",
    MALDIVES: "MV",
    SINGAPORE: "SG",
    MAURITIUS: "MU",
    AUSTRALIA: "AU",
    "SRI LANKA": "LK",
    "NEW ZEALAND": "NZ",
    RUSSIA: "RU",
    TURKMENISTAN: "TM",
    UKRAINE: "UA",
    AZERBAIJAN: "AZ",
    GEORGIA: "GE",
    EGYPT: "EG",
    SUDAN: "SD",
    LIBYA: "LY",
    "CAPE TOWN": "ZA",
    LEBANON: "LB",
  };

  const data = countries.map((country) => {
    const code = countryToCode[country] || "XX";
    return {
      country: code,
      value: 1,
      // label: country,
      color: "#09723C",
      flagUrl: `https://flagcdn.com/w80/${code.toLowerCase()}.png`,
    };
  });
  return (
    <div className="flex items-center justify-center">
      <div className="w-full px-4 py-8 sm:py-12 lg:py-16 max-w-7xl">
        <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Our Global Presence
        </h2>
        <div className="relative w-full aspect-[16/9] lg:aspect-auto max-w-[96rem] mx-auto animate-fadeIn">
          {isClient && (
            <div className={`relative flex justify-center items-center overflow-hidden ${dynamicPadding}`}>
              <div
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "center",
                }}
              >
                <WorldMap
                   color="#09723C"
                   size="responsive"
                   data={data}
                   backgroundColor="#F2F2F2"
                   tooltipBgColor="transparent" // Makes tooltip invisible
                   tooltipTextColor="transparent" // Hides text
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


