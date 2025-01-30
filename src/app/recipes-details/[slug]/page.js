"use client";

import Image from "next/image";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import { recipes } from "@/helpers/recipes";

export default function RecipeDetails() {
    const params = useParams();
    const router = useRouter();
    const { slug } = params;

    const images = [
        {
            src: "/images/Recipe/banner.jpg",
            alt: "Aerial view of agricultural fields showing farmers planting crops",
        },
    ];

    const recipe = recipes.find((r) => r.title.toLowerCase().replace(/ /g, "-") === slug);

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
            {/* <HeroCarousel images={images} /> */}
            <section className="container mx-auto px-4 py-8" style={{ maxWidth: "90rem", marginTop: "100px" }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Content */}
                    <div>
                        {/* Back Button with Recipe Title */}
                        <div
                            className="bg-green-600 text-white text-xl font-bold px-6 py-3 rounded-md inline-flex items-center gap-3 cursor-pointer"
                            onClick={() => router.back()}
                        >
                            <ArrowLeft className="w-5 h-5" />
                            {recipe.title}
                        </div>

                        {/* Ingredients Section */}
                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold mb-4">Ingredients:</h2>
                            <ul className="pl-6 space-y-2">
                                {Object.entries(recipe.ingredients).map(([section, items]) => (
                                    <li key={section} className="mb-2">
                                        <strong className="font-semibold">{section.charAt(0).toUpperCase() + section.slice(1)}:</strong>
                                        <ul className="pl-10 space-y-1">
                                            {items.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="relative pl-4 text-gray-700"
                                                >
                                                    <span className="absolute left-0 top-1 text-[#FCCD4E]">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Content - Recipe Image */}
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

                {/* Instructions Section */}
                <div className="mt-6 border-t border-gray-200 pt-6 container mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
                    <p className="text-gray-700">{recipe.instructions}</p>
                </div>
            </section>
        </>
    );
}
