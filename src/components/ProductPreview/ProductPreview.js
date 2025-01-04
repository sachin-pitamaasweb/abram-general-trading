import Image from 'next/image';
import categoryData from '@/helpers/categoryData';

export function ProductPreview({ item, category, subCategory }) {
    let selectedProduct;

    if (category === 'Rice' && subCategory) {
        // Rice is organized with direct items under subcategories
        selectedProduct = categoryData[category]?.items[item] ?? null;
    } else {
        // For other categories or non-subcategory Rice items
        selectedProduct = categoryData[category]?.items[item] ?? null;
    }

    if (!selectedProduct) {
        return <p className="text-red-600">Product not found. Please select a valid item.</p>;
    }

    const { title, description, quality, images } = selectedProduct;

    return (
        <div className="space-y-8">
            <article className="prose dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg text-muted-foreground mb-8">{description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    {images?.map((img, index) => (
                        <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                            <Image
                                src={img}
                                alt={`${title} image ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
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
