import { useEffect, useRef } from 'react';
import Image from 'next/image';
import categoryData from '@/helpers/categoryData';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function ProductPreview({ item, category, subCategory }) {
    const titleRef = useRef(null); // Create a ref for the title

    let selectedProduct;

    if (category === 'Rice' && subCategory) {
        // Rice is organized with direct items under subcategories
        selectedProduct = categoryData[category]?.items[item] ?? null;
    } else {
        // For other categories or non-subcategory Rice items
        selectedProduct = categoryData[category]?.items[item] ?? null;
    }

    useEffect(() => {
        if (selectedProduct && titleRef.current) {
            // Scroll the title into view when switching products
            titleRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center', // Center the title in the viewport
                inline: 'nearest'
            });
        }
    }, [selectedProduct, category, item]);  // Trigger when category or item changes

    if (!selectedProduct) {
        return <p className="text-red-600 text-center mt-4">Product not found. Please select a valid item.</p>;
    }

    const { title, description, quality, images } = selectedProduct;

    return (
        <div className="space-y-10 px-4 md:px-8 lg:px-12">
            <article className="prose dark:prose-invert max-w-none">
                {/* ✅ Product Title - Properly Spaced */}
                <h1 className="text-4xl font-bold mb-6" ref={titleRef}>
                    {title}
                </h1>

                {/* ✅ Description - Improved spacing */}
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{description}</p>

                {/* ✅ Mobile View - ShadCN Carousel with Navigation */}
                <div className="md:hidden relative mb-6">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {images?.map((img, index) => (
                                <CarouselItem key={index} className="relative">
                                    <Card className="aspect-square relative rounded-lg overflow-hidden shadow-md">
                                        <Image
                                            src={img}
                                            alt={`${title} image ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg" />
                        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg" />
                    </Carousel>
                </div>

                {/* ✅ Desktop View - Grid Layout with Better Spacing */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 my-10">
                    {images?.map((img, index) => (
                        <Card key={index} className="aspect-square relative rounded-lg overflow-hidden shadow-md">
                            <Image
                                src={img}
                                alt={`${title} image ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </Card>
                    ))}
                </div>

                {/* ✅ Product Quality Section - Better Typography & Spacing */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">Our Quality</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{quality}</p>
                </section>
            </article>
        </div>
    );
}
