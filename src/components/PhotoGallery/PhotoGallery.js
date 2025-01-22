"use client";

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Sample gallery data - in a real app, this would come from an API or database
const galleryImages = [
    {
        id: 1,
        src: "/images/gallery/pic-1.png",
        alt: "Business Meeting 1",
        width: 400,
        height: 300,
    },
    {
        id: 2,
        src: "/images/gallery/pic-1.png",
        alt: "Business Meeting 2",
        width: 400,
        height: 300,
    },
    {
        id: 3,
        src: "/images/gallery/pic-1.png",
        alt: "Business Meeting 3",
        width: 400,
        height: 300,
    },
    {
        id: 4,
        src: "/images/gallery/pic-1.png",
        alt: "Business Meeting 4",
        width: 400,
        height: 300,
    },
    {
        id: 5,
        src: "/images/gallery/pic-1.png",
        alt: "Business Meeting 5",
        width: 400,
        height: 300,
    },
    {
        id: 6,
        src: "/images/gallery/pic-1.png",
        alt: "Business Meeting 6",
        width: 400,
        height: 300,
    },
    {
        id: 7,
        src: "/images/gallery/pic-1.png",
        alt: "Business Meeting 7",
        width: 400,
        height: 300,
    },
    {
        id: 8,
        src: "/images/gallery/pic-1.png",
        alt: "Business Meeting 8",
        width: 400,
        height: 300,
    },
]

export function PhotoGallery() {
    return (
        <section className="py-12 px-4">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold text-center mb-12">Photo Gallery</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image) => (
                        <Card key={image.id} className="overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative aspect-[4/3] prefers-reduced-motion:transition-none">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
