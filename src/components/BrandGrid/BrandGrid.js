import Image from "next/image"
import { Card } from "@/components/ui/card"

// const brandItems = [
//     {
//         id: 1,
//         logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_27_ykfclh.png",
//         productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048035/1212_qfbfyn.png",
//         leftImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1737709736/uhlkuk_1_oubkrg.png",
//         rightImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1737709735/287_c6r2ag.png",
//         productName: "1211 Basmati Rice",
//     },
//     {
//         id: 2,
//         logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_28_ogisx9.png",
//         productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048037/noora_25kg_us1c8y.png",
//         productName: "XXXL Indian Sella Rice",

//     },
//     {
//         id: 3,
//         logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_29_zpxcns.png",
//         productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048031/285_usjcwr.png",
//         leftImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1737709734/295_spap4o.png",
//         rightImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1737709733/294_n8l0nj.png",
//         productName: "1211 Basmati Rice",
//     },
//     {
//         id: 4,
//         logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_30_tk1zmy.png",
//         productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048037/golden_star_rice_lqdibo.png",
//         productName: "Indian Basmati Rice",
//     },
//     {
//         id: 5,
//         logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_31_ebyv3r.png",
//         productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048035/925_ckjnks.png",
//         leftImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/292-3N5HVBHWlTvjp90jm8PXxthhj4CWFw.png",
//         rightImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/290-HUFjz10t5mFMtM479ovCZYuqKBJ0V3.png",
//         productName: "Indian Basmati Rice Classic",
//     },
//     {
//         id: 6,
//         logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_32_l9tk4q.png",
//         productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048036/crystal_gold_18kg_back5v.png",
//         productName: "Indian Sona Masoori Rice",
//     },
//     {
//         id: 7,
//         logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_33_ebghnc.png",
//         productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048035/ABRAM_Rice_35kg_gyzx5s.png",
//         productName: "ABRAM Basmati Rice",
//     },
//     {
//         id: 8,
//         logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047588/Frame_34_c5n304.png",
//         productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048031/919_Red_Chilli_Powder_1.pdf_rzrvcm.png",
//         productName: "Red Chilli Powder",
//     }
// ]

const brandItems = [
    {
        id: 1,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_27_ykfclh.png",
        productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048035/1212_qfbfyn.png",
        leftImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1737709736/uhlkuk_1_oubkrg.png",
        rightImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1737709735/287_c6r2ag.png",
        productName: "1211 Basmati Rice",
    },
    {
        id: 2,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_29_zpxcns.png",
        productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048031/285_usjcwr.png",
        leftImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1737709734/295_spap4o.png",
        rightImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1737709733/294_n8l0nj.png",
        productName: "1211 Basmati Rice",
    },
    {
        id: 3,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_31_ebyv3r.png",
        productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048035/925_ckjnks.png",
        leftImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/292-3N5HVBHWlTvjp90jm8PXxthhj4CWFw.png",
        rightImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/290-HUFjz10t5mFMtM479ovCZYuqKBJ0V3.png",
        productName: "Indian Basmati Rice Classic",
    },
    {
        id: 4,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_33_ebghnc.png",
        productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048035/ABRAM_Rice_35kg_gyzx5s.png",
        productName: "ABRAM Basmati Rice",
    },
    {
        id: 5,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_28_ogisx9.png",
        productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048037/noora_25kg_us1c8y.png",
        productName: "XXXL Indian Sella Rice",

    },
    {
        id: 6,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_30_tk1zmy.png",
        productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048037/golden_star_rice_lqdibo.png",
        productName: "Indian Basmati Rice",
    },
    {
        id: 7,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_32_l9tk4q.png",
        productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048036/crystal_gold_18kg_back5v.png",
        productName: "Indian Sona Masoori Rice",
    },
    {
        id: 8,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047588/Frame_34_c5n304.png",
        productImage: "https://res.cloudinary.com/dtivafy25/image/upload/v1738048031/919_Red_Chilli_Powder_1.pdf_rzrvcm.png",
        productName: "Red Chilli Powder",
    }
];

export default function BrandGrid() {
    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                    {brandItems.map((item) => (
                        <Card
                            key={item.id}
                            className="group overflow-hidden bg-white p-12 transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <div className="flex flex-col items-center space-y-6 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                                <div className="flex-shrink-0">
                                    <div className="relative h-[13rem] w-[12rem]">
                                        <Image
                                            src={item.logo || "/placeholder.svg"}
                                            alt={`${item.productName} logo`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="relative flex items-center justify-center">
                                    {/* Left Image (Only shown if exists) */}
                                    {item.leftImage && (
                                        <div className="absolute left-0 z-0 h-[10rem] w-[15rem] opacity-0 transition-all duration-500 group-hover:-translate-x-20 group-hover:opacity-100">
                                            <Image
                                                src={item.leftImage}
                                                alt={`${item.productName} Left`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}

                                    {/* Main Product Image */}
                                    <div className="relative z-10 h-[15rem] w-[18rem] transition-transform duration-500 group-hover:scale-90">
                                        <Image
                                            src={item.productImage || "/placeholder.svg"}
                                            alt={item.productName}
                                            fill
                                            className="object-contain"
                                        />
                                        {/* Product Name */}
                                        <div className="text-center sm:text-center">
                                            <p className="text-[1.2rem] font-light mt-[245px] text-center sm:text-center">
                                                {item.productName}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Image (Only shown if exists) */}
                                    {item.rightImage && (
                                        <div className="absolute right-0 z-0 h-[10rem] w-[15rem] opacity-0 transition-all duration-500 group-hover:translate-x-20 group-hover:opacity-100">
                                            <Image
                                                src={item.rightImage}
                                                alt={`${item.productName} Right`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
