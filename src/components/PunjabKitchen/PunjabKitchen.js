"use client"

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Wind, Diamond } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PunjabKitchen({ mainImage, additionalImages, className, title, bgGradient }) {
    const [isHovered, setIsHovered] = useState(false);

    const features = [
        {
            icon: <Award className="h-6 w-6 sm:w-8 sm:h-8 text-gray-700" />,
            title: "XXXL Long Grain",
        },
        {
            icon: <Wind className="h-6 w-6 sm:w-8 sm:h-8 text-gray-700" />,
            title: "Classic Aroma",
        },
        {
            icon: <Diamond className="h-6 w-6 sm:w-8 sm:h-8 text-gray-700" />,
            title: "Premium Quality",
        },
    ];

    return (
        <div
            className={cn(
                "relative w-full h-[520px] overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8 transition-colors duration-500",
                isHovered
                    ? "bg-gradient-to-r from-black via-gray-800 to-red-500"
                    : "bg-gradient-to-r from-black via-gray-800 to-red-500",
                className
            )}
            style={{ background: bgGradient }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Decorative Wheat Pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
                <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edrghrgrdgr%201-OWANcfTEAR2Sdmb1HFaWZKo1HfX9nz.png"
                    alt=""
                    fill
                    className="object-contain object-right"
                    priority
                />
            </div>

            {/* Product Images Container */}
            <motion.div
                initial={{ y: 0, minHeight: "400px" }}
                animate={{ y: isHovered ? -20 : 0, minHeight: isHovered ? "318px" : "400px" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative flex justify-center items-center min-h-[200px] sm:min-h-[300px]"
            >
                {/* Left Product Image */}
                {additionalImages[0] && (
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: isHovered ? -100 : 0, opacity: isHovered ? 1 : 1 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="absolute left-16 sm:left-24"
                        style={{ left: "38rem" }}
                    >
                        <Image
                            src={additionalImages[0]}
                            alt="Left Product"
                            width={120}
                            height={160}
                            className="w-[80px] sm:w-[100px] md:w-[120px] h-auto object-contain"
                        />
                    </motion.div>
                )}

                {/* Main Center Image */}
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: isHovered ? 0.9 : 1 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="z-20"
                >
                    <Image
                        src={mainImage}
                        alt="Main Product"
                        width={200}
                        height={300}
                        className="w-[140px] sm:w-[160px] md:w-[200px] h-auto object-contain"
                        priority
                    />
                </motion.div>

                {/* Right Product Image */}
                {additionalImages[1] && (
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: isHovered ? 100 : 0, opacity: isHovered ? 1 : 1 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="absolute right-16 sm:right-24"
                        style={{ right: "38rem" }}
                    >
                        <Image
                            src={additionalImages[1]}
                            alt="Right Product"
                            width={120}
                            height={160}
                            className="w-[80px] sm:w-[100px] md:w-[120px] h-auto object-contain"
                        />
                    </motion.div>
                )}
            </motion.div>

            {/* Brand Name */}
            <motion.div
                initial={{ y: 0, opacity: 1, marginTop: "-1rem" }}
                animate={{ y: isHovered ? -20 : 0, opacity: isHovered ? 1 : 1, marginTop: isHovered ? "-7px" : "-1rem" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="text-center"
            >
                <h2 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold">{title}</h2>
            </motion.div>


            {/* Features */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20, marginTop: isHovered ? "10px" : "0" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="flex flex-col sm:flex-row justify-center gap-6 mt-6"
            >
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center bg-white rounded-lg shadow-md p-4 sm:p-6 gap-4"
                    >
                        {feature.icon}
                        <span className="text-base sm:text-lg font-semibold text-gray-800">{feature.title}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
