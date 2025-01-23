import { useEffect, useRef } from 'react';
import Image from 'next/image';
import categoryData from '@/helpers/categoryData';
import { Card } from '@/components/ui/card';

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
        return <p className="text-red-600">Product not found. Please select a valid item.</p>;
    }

    const { title, description, quality, images } = selectedProduct;
    console.log('category');
    return (
        <div className="space-y-8">
            <article className="prose dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-4" ref={titleRef}>
                    {title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">{description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    {images?.map((img, index) => (
                        <Card key={index} className="aspect-square relative rounded-lg overflow-hidden">
                            <Image
                                src={img}
                                alt={`${title} image ${index + 1}`}
                                fill
                                className={title.includes('Chilli') || title.includes('Turmeric') ? "object-contain md:object-center" : "object-cover"}
                            />

                        </Card>
                    ))}
                </div>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Our Quality</h2>
                    <p className="text-muted-foreground">{quality}</p>
                </section>
            </article>
        </div>
    );
}
