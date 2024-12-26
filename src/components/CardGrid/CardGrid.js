'use client';

import { useEffect } from "react";
import Card from "../Card/Card";
import { motion, useAnimation } from "framer-motion";

const cards = [
    {
        title: "Basmati and Non-Basmati Rice",
        content: "Premium quality grains with rich aroma",
        image: "/placeholder.svg?height=600&width=400"
    },
    {
        title: "Pulses and Lentils",
        content: "Nutrient-rich pulses processed to perfection.",
        image: "/placeholder.svg?height=600&width=400"
    },
    {
        title: "Spices",
        content: " Authentic Indian spices packed with flavor and aroma.",
        image: "/placeholder.svg?height=600&width=400"
    },
    {
        title: "Oil Seeds and Dry Fruits",
        content: "Premium quality seeds and nuts for healthy living.",
        image: "/placeholder.svg?height=600&width=400"
    },
    {
        title: "Animal Feeds",
        content: "Nutritionally balanced animal feed for superior livestock care.",
        image: "/placeholder.svg?height=600&width=400"
    }
];

export default function CardGrid() {
    const controls = useAnimation();

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.section
            className="py-12 px-4 md:px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
        >
            <div className="max-w-7xl mx-auto" style={{ maxWidth: "90rem" }}>
                <h1 className="text-4xl font-medium mb-8">
                   Services & Products
                </h1>
                <motion.div
                    className="container mx-auto flex flex-wrap justify-start gap-[1rem]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={cardVariants}
                >
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
