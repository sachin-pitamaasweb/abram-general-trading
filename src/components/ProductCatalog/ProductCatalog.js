'use client'

import Image from "next/image";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import categoryData from "@/helpers/categoryData";

const categories = [
    {
        name: "Pulses",
        items: [
            "ChickPeas",
            "ChanaDal",
            "Rajma",
            "ToorDal",
            "UradDal",
            "MasoorDal",
            "MoongDal",
            "GreenGram"
        ]
    },
    {
        name: "Rice",
        items: [
            "Long Grain Rice",
            "Sharbati Golden Sella Rice"
        ]
    },
    {
        name: "Spices",
        items: [
            "Black Pepper",
            "Cardamom",
            "Clove",
            "Coriander Seeds",
            "Cumin Seeds",
            "Dry Ginger",
            "Fennel Seeds"
        ]
    },
    {
        name: "OilSeeds",
        items: [
            "Ground Nut",
            "Sesame Seeds",
            "Mustard"
        ]
    },
    {
        name: "EdibleOil",
        items: [
            "Corn Oil",
            "Mustard Oil",
            "Palmolein Oil",
            "Sesame Oil",
            "Soya Oil",
            "Sunflower Oil"
        ]
    }
]

export default function ProductCatalog() {
    const [selectedCategory, setSelectedCategory] = useState("Pulses");
    const [selectedItem, setSelectedItem] = useState("ChickPeas");
    const [loading, setLoading] = useState(false);

    // Handle item selection with loading simulation
    const handleItemChange = (category, item) => {
        setLoading(true);
        setTimeout(() => {
            setSelectedCategory(category);
            setSelectedItem(item);
            setLoading(false);
        }, 500);
    };

    const categoryInfo = categoryData[selectedCategory];
    const itemInfo = categoryInfo?.items[selectedItem];

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
                            {loading ? (
                                <div className="space-y-4">
                                    {Array(6).fill().map((_, index) => (
                                        <Skeleton key={index} className="h-6 w-3/4" />
                                    ))}
                                </div>
                            ) : (
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
                                                            onClick={() => handleItemChange(category.name, item)}
                                                        >
                                                            {item}
                                                        </Button>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            )}
                        </nav>
                    </SheetContent>
                </Sheet>

                {/* Desktop Category Menu */}
                <nav className="hidden lg:block w-[300px] bg-background rounded-lg border p-4">
                    {loading ? (
                        <div className="space-y-4">
                            {Array(6).fill().map((_, index) => (
                                <Skeleton key={index} className="h-6 w-3/4" />
                            ))}
                        </div>
                    ) : (
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
                                                    onClick={() => handleItemChange(category.name, item)}
                                                >
                                                    {item}
                                                </Button>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    )}
                </nav>

                {/* Main Content Section */}
                <main className="flex-1">
                    {loading ? (
                        <div className="space-y-8">
                            <Skeleton className="h-8 w-1/3 mb-4" />
                            <Skeleton className="h-5 w-2/3 mb-6" />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Array(3).fill().map((_, index) => (
                                    <Skeleton key={index} className="aspect-square w-full rounded-lg" />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <section>
                                <h1 className="text-3xl font-semibold mb-2">{itemInfo?.title}</h1>
                                <p className="text-muted-foreground mb-6">{itemInfo?.description}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {itemInfo?.images?.map((image, index) => (
                                        <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                                            <Image
                                                src={image}
                                                alt={`${itemInfo?.title} image ${index + 1}`}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="prose dark:prose-invert max-w-none">
                                <h2 className="text-2xl font-semibold mb-4">Our Quality</h2>
                                <p>{itemInfo?.quality}</p>
                            </section>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}
