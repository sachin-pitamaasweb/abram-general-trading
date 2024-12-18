'use client'

import Image from "next/image"
import { useState } from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


const categories = [
    { name: "Rice", items: ["Long Grain Rice", "Sharbati Golden Sella Rice", "Sona Masoori Rice"] },
    { name: "Pulses", items: ["Cotton Seed Cake", "Rapeseed Meal", "Sorghum", "Soybean Meal", "Yellow Corn (Maize)"] },
    { name: "Spices", items: ["Black Pepper", "Cardamom", "Cinnamon"] },
    { name: "Chickpeas", items: ["Almonds", "Cashews", "Raisins"] },
    { name: "Oil Seeds", items: ["Mustard Seeds", "Sunflower Seeds", "Sesame Seeds"] },
    { name: "Edible Oil", items: ["Mustard Oil", "Sunflower Oil", "Soybean Oil"] },
    { name: "Dry Fruits", items: ["Almonds", "Cashews", "Raisins"] },
    { name: "Animal Feed", items: ["Cotton Seed Cake", "Rapeseed Meal", "Sorghum", "Soybean Meal", "Yellow Corn (Maize)"] },
    { name: "Cereals", items: ["Long Grain Rice", "Sharbati Golden Sella Rice", "Sona Masoori Rice"] },
    { name: "Organic Products", items: ["Organic Rice", "Organic Pulses", "Organic Spices"] },
]

export default function ProductCatalog() {
    const [selectedCategory, setSelectedCategory] = useState("Pulses")

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Mobile Category Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="lg:hidden mb-4">
                            Categories
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <nav className="py-4">
                            <Accordion type="single" collapsible className="w-full">
                                {categories.map((category) => (
                                    <AccordionItem key={category.name} value={category.name}>
                                        <AccordionTrigger className="text-left">
                                            {category.name}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col space-y-2">
                                                {category.items.map((item) => (
                                                    <Button
                                                        key={item}
                                                        variant="ghost"
                                                        className="justify-start pl-6"
                                                        onClick={() => setSelectedCategory(item)}
                                                    >
                                                        {item}
                                                    </Button>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </nav>
                    </SheetContent>
                </Sheet>

                {/* Desktop Category Menu */}
                <nav className="hidden lg:block w-[300px] bg-background rounded-lg border p-4">
                    <Accordion type="single" collapsible className="w-full">
                        {categories.map((category) => (
                            <AccordionItem key={category.name} value={category.name}>
                                <AccordionTrigger className="text-left">
                                    {category.name}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col space-y-2">
                                        {category.items.map((item) => (
                                            <Button
                                                key={item}
                                                variant="ghost"
                                                className="justify-start pl-6"
                                                onClick={() => setSelectedCategory(item)}
                                            >
                                                {item}
                                            </Button>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </nav>

                {/* Main Content */}
                <main className="flex-1">
                    <div className="space-y-8">
                        <section>
                            <h1 className="text-3xl font-semibold mb-2">Pulses</h1>
                            <p className="text-muted-foreground mb-6">
                                Discover our premium selection of pulses, from ChickPeas to Moong Dal,
                                each carefully processed to preserve authentic flavors.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="aspect-square relative rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/products/pulses/p-1.png"
                                        alt="Pulses variety 1"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="aspect-square relative rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/products/pulses/p-2.png"
                                        alt="Pulses variety 2"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="aspect-square relative rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/products/pulses/p-3.png"
                                        alt="Pulses variety 3"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="prose dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-semibold mb-4">Our Quality</h2>
                            <p>
                                Among the various range of pulses that we deal in, ChickPeas, Chana Dal, Rajma, Toor Dal, Urad Dal, Masoor Dal, Moong Dal,
                                Green Gram and has been widely acclaimed due to its tasteful flavor. We export pulses which are cleaned and processed
                                before packing and transporting. Only the best of grains of pulses are selected and processed to the clients so that the taste of
                                the food can remain authentic. We export all kind of pulses which are cleaned and processed before packing and transporting.
                                Only the best of grains of pulses are selected and processed to the clients so that the taste of the food can remain authentic.
                            </p>
                            <p>
                                We are facilitated with a classy infrastructure facility, which is sprawling as one of the best manufacturing industries for Dal Mill
                                Plant machinery today with the technologically updated machines and equipment that are governed by our skilled workforce
                                and reliable engineers. we are also well known for our affordable prices and on time deliveries and providing best-in-class
                                quality fans.
                            </p>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}

