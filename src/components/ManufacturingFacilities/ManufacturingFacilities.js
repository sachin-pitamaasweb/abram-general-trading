
"use client";
import Image from 'next/image'

export default function ManufacturingFacilities() {
    return (
        <section className="w-full mx-auto px-4 py-8 md:py-12" style={{ maxWidth: '90rem' }}>
            <div className="space-y-3 mb-6 md:mb-8">
                <h2 className="text-black text-3xl md:text-4xl font-semibold">
                    MANUFACTURING FACILITIES
                </h2>
                <p className="text-emerald-500 text-lg md:text-xl font-medium leading-relaxed">
                    Leveraging advanced technology and streamlined processes, our facility is designed to deliver superior quality and efficiency while adhering to the highest industry standards
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
                {/* Main Image */}
                <div className="md:col-span-8 relative h-[250px] sm:h-[300px] md:h-[400px]">
                    <Image
                        src="/images/about/manu/img-1.png"
                        alt="State-of-the-art manufacturing facility with advanced machinery"
                        fill
                        className="object-cover w-full h-full"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 66vw"
                        priority
                    />
                </div>

                {/* Side Images Column */}
                <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
                    <div className="relative h-[150px] md:h-[190px]">
                        <Image
                            src="/images/about/manu/img-2.png"
                            alt="Advanced processing equipment"
                            fill
                            className="object-cover w-full h-full"
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                        />
                    </div>
                    <div className="relative h-[150px] md:h-[190px]">
                        <Image
                            src="/images/about/manu/img-3.png"
                            alt="Modern machinery installation"
                            fill
                            className="object-cover w-full h-full"
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                        />
                    </div>
                </div>
            </div>

            {/* Description Text */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:col-span-8 mt-4">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        Our State-of-the-art plant is located at the heart of the premium Basmati Paddy cultivation region (IGP) and is equipped to process the best quality rice with modern machinery like Pre cleaner, De-stoner, Destoner-thickness, paddy separator, De-huskers, Polisher, Graders, Color sorter, etc. Our rice grading plant is backed by one of the most advanced technology in grading system by Color-Ray, USA like color sorter which means a completely hygienic process. It ensures removal of both foreign & broken which means a completely hygienic process. The rice is protected in its journey from the field to the plate.
                    </p>
                </div>
                <div className="md:col-span-4 mt-4">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        The Global Agro Corporation Pvt. Ltd (GACPL) milling plant is made up entirely of stainless steel (304) material. Our modern rice milling plant comes with zero loss of fabrication and impact resistance. All of these translate to secured hygienic products and food-graded material. We are one of the few rice plants in the country that incorporate state-of-the-art metal detection facilities throughout the milling process. It ensures removal of both foreign & broken which means a completely hygienic process. The entire process of rice milling from procurement to final packaging process is carried out under the supervision of our competent and trained manpower.
                    </p>
                </div>
            </div>
        </section>
    )
}
