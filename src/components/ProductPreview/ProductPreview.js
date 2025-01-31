import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import categoryData from "@/helpers/categoryData";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductPreview({ item, category, subCategory }) {
    const titleRef = useRef(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            let product;

            if (category === "Rice" && subCategory) {
                product = categoryData[category]?.items[item] ?? null;
            } else {
                product = categoryData[category]?.items[item] ?? null;
            }

            setSelectedProduct(product);
            setLoading(false);
        }, 700); // Simulating a delay

    }, [category, item, subCategory]);

    useEffect(() => {
        if (selectedProduct && titleRef.current) {
            titleRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        }
    }, [selectedProduct]);

    if (!selectedProduct && !loading) {
        return <p className="text-red-600 text-center mt-4">Product not found. Please select a valid item.</p>;
    }

    return (
        <div className="space-y-10 px-4 md:px-8 lg:px-12">
            <article className="prose dark:prose-invert max-w-none">
                {/* ✅ Product Title with Skeleton */}
                {loading ? (
                    <Skeleton className="h-10 w-3/4 mb-6" />
                ) : (
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-left md:text-left" ref={titleRef}>
                        {selectedProduct.title}
                    </h1>
                )}

                {/* ✅ Description with Skeleton */}
                {loading ? (
                    <Skeleton className="h-6 w-full mb-6" />
                ) : (
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {selectedProduct.description}
                    </p>
                )}

                {/* ✅ Mobile View - Carousel with Skeleton */}
                <div className="md:hidden relative mb-6">
                    {loading ? (
                        <div className="flex gap-4">
                            <Skeleton className="h-[250px] w-full rounded-md" />
                        </div>
                    ) : (
                        <Carousel className="w-full">
                            <CarouselContent>
                                {selectedProduct.images?.map((img, index) => (
                                    <CarouselItem key={index} className="relative">
                                        <Card className="aspect-square relative rounded-lg overflow-hidden shadow-md">
                                            <Image
                                                src={img}
                                                alt={`${selectedProduct.title} image ${index + 1}`}
                                                fill
                                                className={selectedProduct.title.includes("Chilli") || selectedProduct.title.includes("Turmeric")
                                                    ? "object-contain md:object-center p-[45px]"
                                                    : "object-cover"}
                                            />
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg" />
                            <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg" />
                        </Carousel>
                    )}
                </div>

                {/* ✅ Desktop View - Grid with Skeleton */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 my-10">
                    {loading ? (
                        <>
                            <Skeleton className="aspect-square rounded-lg" />
                            <Skeleton className="aspect-square rounded-lg" />
                            <Skeleton className="aspect-square rounded-lg" />
                        </>
                    ) : (
                        selectedProduct.images?.map((img, index) => (
                            <Card key={index} className="aspect-square relative rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src={img}
                                    alt={`${selectedProduct.title} image ${index + 1}`}
                                    fill
                                    className={selectedProduct.title.includes("Chilli") || selectedProduct.title.includes("Turmeric")
                                        ? "object-contain md:object-center p-[45px]"
                                        : "object-cover"}
                                />
                            </Card>
                        ))
                    )}
                </div>

                {/* ✅ Product Quality Section with Skeleton */}
                <section className="mt-12">
                    {loading ? (
                        <Skeleton className="h-6 w-1/2 mb-4" />
                    ) : (
                        <h2 className="text-2xl font-bold mb-4">Our Quality</h2>
                    )}

                    {loading ? (
                        <Skeleton className="h-6 w-full mb-6" />
                    ) : (
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {selectedProduct.quality}
                        </p>
                    )}
                </section>
            </article>
        </div>
    );
}
