"use client"; // Add this at the top

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const recipes = [
  {
    title: "Veg Pulao",
    image: "/images/Recipe/P-1.png",
    slug: "veg-pulao",
  },
  {
    title: "Moong Dal",
    image: "/images/Recipe/P-2.png",
    slug: "moong-dal",
  },
  {
    title: "Khichdi",
    image: "/images/Recipe/P-3.png",
    slug: "khichdi",
  },
  {
    title: "Curry Leaves Biryani",
    image: "/images/Recipe/P-4.png",
    slug: "curry-leaves-biryani",
  },
];

export default function RecipeGrid() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="bg-[#FFD54F] py-8 mb-12">
        <h1 className="text-white text-center text-4xl font-bold">RECIPES</h1>
      </div>

      {/* Recipe Grid */}
      <div className="container mx-auto px-4" style={{ maxWidth: "90rem" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Card key={recipe.slug} className="overflow-hidden">
              {/* Card Header */}
              <CardHeader className="p-4">
                <CardTitle className="text-center text-lg">{recipe.title}</CardTitle>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] m-3 rounded-lg overflow-hidden">
                  <Image
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>

              {/* Card Footer */}
              <CardFooter className="p-4">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => (window.location.href = `/recipes-details/${recipe.slug}`)}
                >
                  View Recipe
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
