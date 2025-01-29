'use client'

import { useState } from "react"
import { ChevronDown } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { ProductPreview } from "../ProductPreview/ProductPreview"

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
        ],
    },
    {
        name: "DryFruits",
        items: [
            "Almonds",
            "Cashews",
            "Pistachio",
            "Raisins",
            "Walnuts",
            "Apricots",
            "Dates",
        ],
    },
    {
        name: "Lentils",
        items: [
            "Black Lentils",
            "Green Lentils",
            "Red Lentils",
            "Yellow Lentils",
        ],
    },
    {
        name: "Rice",
        items: [
            {
                name: "Basmati",
                options: [
                    "1121 Steam Basmati",
                    "1121 Sella Basmati",
                    "1121 Golden Sella",
                    "1509 Steam Basmati",
                    "1509 Sella Basmati",
                    "1509 Golden Sella",
                    "1401 Steam Basmati",
                    "Pusa Sella",
                    "Pusa Golden Sella",
                    "Sugandha Steam",
                    "Sugandha Sella",
                    "Sugandha Golden Sella",
                    "Sharbati Steam",
                    "Sharbati Sella",
                    "Sharbati Golden Sella"
                ]
            },
            {
                name: "Non-Basmati",
                options: [
                    "P.R. 11 Steam",
                    "P.R. 11 Sella",
                    "P.R. 11 Golden Sella",
                    "Long Grain Parboiled",
                    "Long Grain White Rice",
                    "Swarna Parboiled",
                    "Swarna White Rice",
                    "Sona Mansoori Steam",
                    "Sona Mansoori Raw"
                ]
            },
        ],
    },
    {
        name: "Spices",
        items: [
            "Turmeric",
            "Chilli",
            "Black Pepper",
            "Cardamom",
            "Clove",
            "Coriander Seeds",
            "Cumin Seeds",
            "Dry Ginger",
            "Fennel Seeds",
        ],
    },
    {
        name: "OilSeeds",
        items: ["Ground Nut", "Sesame Seeds", "Mustard"],
    },
    {
        name: "EdibleOil",
        items: [
            "Corn Oil",
            "Mustard Oil",
            "Palmolein Oil",
            "Sesame Oil",
            "Soya Oil",
            "Sunflower Oil",
        ],
    },
    {
        name: "Sugar",
        items: ["White Sugar (ICUMSA 45)", "Refined Sugar (ICUMSA 150)"],
    }
]

export default function ProductCatalog() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].name)
    const [selectedSubCategory, setSelectedSubCategory] = useState(null)
    const [selectedItem, setSelectedItem] = useState(
        typeof categories[0].items[0] === 'string'
            ? categories[0].items[0]
            : categories[0].items[0].options[0]
    )
    const [loading, setLoading] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState(false); // Track Sheet state

    const renderCategoryItems = (items) => {
        return items.map((item) => {
            if (typeof item === 'string') {
                return (
                    <Button
                        key={item}
                        variant="ghost"
                        className={`justify-start pl-6 relative ${item === selectedItem ? "underline text-green-600" : ""
                            }`}
                        onClick={() => {
                            setSelectedItem(item)
                            setSelectedSubCategory(null)
                            setSelectedCategory(selectedCategory)
                            setIsSheetOpen(false)
                        }}
                    >
                        {item}
                        {item === selectedItem && (
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-green-600" />
                        )}
                    </Button>
                )
            } else {
                return (
                    <Accordion
                        key={item.name}
                        type="single"
                        collapsible
                        className="w-full"
                        value={selectedSubCategory || undefined}
                    >
                        <AccordionItem value={item.name}>
                            <AccordionTrigger
                                className="text-left pl-6"
                                onClick={() => {
                                    setSelectedSubCategory(item.name)
                                    setSelectedItem(item.options[0])
                                }}
                            >
                                {item.name}
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col space-y-2">
                                    {item.options.map((option) => (
                                        <Button
                                            key={option}
                                            variant="ghost"
                                            className={`justify-start pl-12 relative ${option === selectedItem ? "underline text-green-600" : ""
                                                }`}
                                            onClick={() => setSelectedItem(option)}
                                        >
                                            {option}
                                            {option === selectedItem && (
                                                <span className="absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-green-600" />
                                            )}
                                        </Button>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )
            }
        })
    }

    const CategoryMenu = () => (
        <Accordion type="single" collapsible className="w-full" value={selectedCategory}>
            {categories.map((category) => (
                <AccordionItem key={category.name} value={category.name}>
                    <AccordionTrigger
                        className="text-left"
                        onClick={() => {
                            setSelectedCategory(category.name)
                            const firstItem = category.items[0]
                            if (typeof firstItem === 'string') {
                                setSelectedItem(firstItem)
                                setSelectedSubCategory(null)
                                setSelectedCategory(category.name)
                                setIsSheetOpen(false)
                            } else {
                                setSelectedSubCategory(firstItem.name)
                                setSelectedItem(firstItem.options[0])
                                setIsSheetOpen(false)
                            }
                        }}
                    >
                        {category.name || "Categories"}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col space-y-2">
                            {renderCategoryItems(category.items)}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="lg:hidden mb-4 flex justify-between w-full">
                            <span>Categories</span>
                            <ChevronDown className="h-4 w-4" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <nav className="py-4 h-full overflow-y-auto">
                            {loading ? (
                                <div className="space-y-4">
                                    {Array(6).fill(null).map((_, index) => (
                                        <Skeleton key={index} className="h-6 w-3/4" />
                                    ))}
                                </div>
                            ) : (
                                <CategoryMenu />
                            )}
                        </nav>
                    </SheetContent>
                </Sheet>

                <nav className="hidden lg:block w-[300px] bg-background rounded-lg border p-4">
                    {loading ? (
                        <div className="space-y-4">
                            {Array(6).fill(null).map((_, index) => (
                                <Skeleton key={index} className="h-6 w-3/4" />
                            ))}
                        </div>
                    ) : (
                        <CategoryMenu />
                    )}
                </nav>

                <main className="flex-1">
                    <ProductPreview
                        item={selectedItem}
                        category={selectedCategory}
                        subCategory={selectedSubCategory}
                    />
                </main>
            </div>
        </div>
    )
}
