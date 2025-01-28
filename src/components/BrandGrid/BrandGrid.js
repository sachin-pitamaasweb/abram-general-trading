import Image from "next/image"
import { Card } from "@/components/ui/card"

const brandItems = [
    {
        id: 1,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_27_ykfclh.png",
        productImage:
            "https://res.cloudinary.com/dtivafy25/image/upload/v1738048035/1212_qfbfyn.png",
        productName: "1211 Basmati Rice",
    },
    {
        id: 2,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_28_ogisx9.png",
        productImage:
            "https://res.cloudinary.com/dtivafy25/image/upload/v1738048037/noora_25kg_us1c8y.png",
        productName: "XXXL Indian Sella Rice",
    },
    {
        id: 3,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_29_zpxcns.png",
        productImage:
            "https://res.cloudinary.com/dtivafy25/image/upload/v1738048031/285_usjcwr.png",
        productName: "1121 Basmati Rice",
    },
    {
        id: 4,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_30_tk1zmy.png",
        productImage:
            "https://res.cloudinary.com/dtivafy25/image/upload/v1738048037/golden_star_rice_lqdibo.png",
        productName: "Indian Basmati Rice",
    },
    {
        id: 5,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_31_ebyv3r.png",
        productImage:
            "https://res.cloudinary.com/dtivafy25/image/upload/v1738048035/925_ckjnks.png",
        productName: "Indian Basmati Rice Classic",
    },
    {
        id: 6,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_32_l9tk4q.png",
        productImage:
            "https://res.cloudinary.com/dtivafy25/image/upload/v1738048036/crystal_gold_18kg_back5v.png",
        productName: "Indian Sona Masoori Rice",
    },
    {
        id: 7,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047587/Frame_33_ebghnc.png",
        productImage:
            "https://res.cloudinary.com/dtivafy25/image/upload/v1738048035/ABRAM_Rice_35kg_gyzx5s.png",
        productName: "Indian Basmati Rice Classic",
    },
    {
        id: 8,
        logo: "https://res.cloudinary.com/dtivafy25/image/upload/v1738047588/Frame_34_c5n304.png",
        productImage:
            "https://res.cloudinary.com/dtivafy25/image/upload/v1738048031/919_Red_Chilli_Powder_1.pdf_rzrvcm.png",
        productName: "Red Chilli Powder",
    }
]

export default function BrandGrid() {
    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-6 gap-x-[6rem] md:grid-cols-2 lg:gap-8">
                    {brandItems.map((item) => (
                        <Card
                            key={item.id}
                            className="overflow-hidden bg-white p-8 transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <div className="flex flex-col items-center space-y-6 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                                <div className="flex-shrink-0">
                                    <div className="relative h-[13rem] w-[15rem]">
                                        <Image
                                            src={item.logo || "/placeholder.svg"}
                                            alt={`${item.productName} logo`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="relative h-[15rem] w-[15rem]">
                                        <Image
                                            src={item.productImage || "/placeholder.svg"}
                                            alt={item.productName}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-center text-base font-medium text-gray-900">{item.productName}</h3>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

