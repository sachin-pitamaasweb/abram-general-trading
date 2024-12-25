"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

import './styles.css';

const brands = [
  {
    name: "Mahindra Summit",
    logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1734437569/b-1_ueek9r.png",
  },
  {
    name: "XL CROP",
    logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1734437569/b-2_scoieo.png",
  },
  {
    name: "Bayer",
    logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1734437569/b-3_oopodd.png",
  },
  {
    name: "RCS",
    logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1734437569/b-4_bwxyso.png",
  },
  {
    name: "Provali",
    logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1734437569/b-5_ymhgpj.png",
  },
  {
    name: "PPT Paras",
    logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1734437569/b-6_sypdzn.png",
  },
];

export default function BrandShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto" style={{ maxWidth: "90rem" }}>
        <h2 className="text-4xl font-medium mb-8">Our Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.5 }}
              className="relative group"
            >
              <BrandCard name={brand.name} logo={brand.logo} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandCard({ name, logo }) {
  return (
    <Card className="p-6 flex items-center justify-center bg-white h-[180px] relative overflow-hidden transition-all hover:shadow-lg hover:scale-105 group">
      {/* Border Animation */}
      <div className="absolute inset-0 border border-transparent group-hover:border-move animate-border"></div>
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
  );
}
