"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import WorldMap from "react-svg-worldmap";

export default function WorldMapComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure WorldMap only renders on the client
  }, []);

  const countries = [
    "INDIA", "DUBAI", "TURKEY", "SAUDI ARABIA", "MADAGASCAR", "MIDDLE EAST",
    "EUROPE", "CANADA", "REUNION", "MALDIVES", "SINGAPORE", "MAURITIUS",
    "AUSTRALIA", "SRI LANKA", "NEW ZEALAND", "RUSSIA", "TURKMENISTAN",
    "UKRAINE", "AZERBAIJAN", "GEORGIA", "EGYPT", "SUDAN", "LIBYA",
    "CAPE TOWN", "LEBANON",
  ];

  const countryToCode = {
    INDIA: "IN", DUBAI: "AE", TURKEY: "TR", SAUDI_ARABIA: "SA", MADAGASCAR: "MG",
    MIDDLE_EAST: "SA", EUROPE: "EU", CANADA: "CA", REUNION: "RE", MALDIVES: "MV",
    SINGAPORE: "SG", MAURITIUS: "MU", AUSTRALIA: "AU", SRI_LANKA: "LK",
    NEW_ZEALAND: "NZ", RUSSIA: "RU", TURKMENISTAN: "TM", UKRAINE: "UA",
    AZERBAIJAN: "AZ", GEORGIA: "GE", EGYPT: "EG", SUDAN: "SD", LIBYA: "LY",
    CAPE_TOWN: "ZA", LEBANON: "LB",
  };

  const data = countries.map((country) => {
    const code = countryToCode[country] || country;
    return {
      country: code,
      value: 1,
      label: country,
      color: "#09723C",
      flagUrl: `https://flagcdn.com/w80/${code.toLowerCase()}.png`, // Flag image URL
    };
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full px-4 py-8 sm:py-12 lg:py-16 max-w-7xl">
        <h2 className="text-center text-3xl font-bold mb-8 animate-fadeIn">
          Our Global Presence
        </h2>
        <div className="relative w-full aspect-[16/9] lg:aspect-auto max-w-4xl mx-auto animate-fadeIn">
          {isClient && (
            <WorldMap
              color="#09723C"
              size="responsive"
              data={data}
              backgroundColor="#F2F2F2"
              tooltipBgColor="#09723C"
              tooltipTextColor="#fff"
              tooltip={(geo, data) => 
                data ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Image
                      src={data.flagUrl}
                      alt={`${data.label} flag`}
                      style={{ width: "124px", height: "116px", borderRadius: "2px" }}
                    />
                    <span>{data.label}</span>
                  </div>
                ) : null
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
