"use client";

import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import { recipes } from "@/helpers/recipes";

export default function RecipeDetails() {
    const params = useParams(); // Use useParams for dynamic segments
    const { slug } = params;

    const images = [
        {
            src: "/images/home/banner/product.png",
            alt: "Aerial view of agricultural fields showing farmers planting crops",
        },
    ];

    const recipe = recipes.find((r) => r.title.toLowerCase().replace(/ /g, "-") === slug);
    console.log('recipe', recipe.instructions.length);
    if (!recipe) {
        return (
            <section className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-semibold text-red-500">Recipe not found!</h1>
                <p className="text-gray-700">The recipe you are looking for does not exist.</p>
            </section>
        );
    }

    return (
        <>
            <HeroCarousel images={images} />
            <section className="container mx-auto px-4 py-8" style={{ maxWidth: "90rem" }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Content */}
                    <div>
                        <div className="bg-green-600 text-white text-xl font-bold px-4 py-2 rounded-t-md inline-block">
                            {recipe.title}
                        </div>

                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold mb-4">Ingredients:</h2>
                            <ul className="list-disc pl-6">
                                {Object.entries(recipe.ingredients).map(([section, items]) => (
                                    <li key={section} className="mb-2">
                                        <strong>{section.charAt(0).toUpperCase() + section.slice(1)}:</strong>
                                        <ul className="list-disc pl-10">
                                            {items.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div>
                        <div className="relative w-full h-auto">
                            <Image
                                src={recipe.image}
                                alt={recipe.title}
                                width={500}
                                height={500}
                                quality={100}
                                className="rounded-lg"
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-200 pt-6 container mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
                    <p className="text-gray-700">{recipe.instructions}</p>
                </div>
            </section>
        </>
    );
}
