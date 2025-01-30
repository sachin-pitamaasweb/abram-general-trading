"use client";

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Sample gallery data - in a real app, this would come from an API or database
const galleryImages = [
    {
        id: 1,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229263/turkey9_humqnr.jpg",
        alt: "Business Meeting 1",
        width: 400,
        height: 300,
    },
    {
        id: 2,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229261/turkey8_t9rk08.jpg",
        alt: "Business Meeting 2",
        width: 400,
        height: 300,
    },
    {
        id: 3,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229260/turkey7_nmazgk.jpg",
        alt: "Business Meeting 3",
        width: 400,
        height: 300,
    },
    {
        id: 4,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229260/turkey2_hneswk.jpg",
        alt: "Business Meeting 4",
        width: 400,
        height: 300,
    },
    {
        id: 5,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229260/turkey6_bsmbnn.jpg",
        alt: "Business Meeting 5",
        width: 400,
        height: 300,
    },
    {
        id: 6,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229260/turkey4_emnvot.jpg",
        alt: "Business Meeting 6",
        width: 400,
        height: 300,
    },
    {
        id: 7,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229260/turkey5_kgvkm2.jpg",
        alt: "Business Meeting 7",
        width: 400,
        height: 300,
    },
    {
        id: 8,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229259/turkey3_on7ao4.jpg",
        alt: "Business Meeting 8",
        width: 400,
        height: 300,
    },
    {
        id: 9,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229259/sial5_hyav2u.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 10,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229259/turkey1_fa7tmi.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 11,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229258/sial4_iq1kpw.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 12,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229258/sial3_huadhj.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 13,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229257/sial1_ed16xw.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 14,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229257/sial2_gd4wca.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 15,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229257/qatar6_jrsgw7.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 16,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229256/qatar4_qv6y2u.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 17,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229256/qatar3_mowqoe.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 18,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229256/qatar2_a7i4se.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 19,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229254/kuwait2_y3antx.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 20,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229255/qatar1_x3kwqs.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 21,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229254/kuwait1_wjeczq.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 22,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229254/iraq5_xwsb4q.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 23,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229253/iraq6_nt5rpv.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 24,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229253/iraq4_gabp6c.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 25,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229252/iraq3_d8xaoe.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 26,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229252/iraq2_q3gdcd.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 27,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229252/iraq1_awiwjv.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 28,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229252/iran3_pykjvc.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 29,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229251/iran2_kltpky.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 30,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229250/indus12_o6pxn6.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 31,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229250/iran1_w4t5nc.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 32,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229248/indus9_yairmk.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 33,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229249/indus11_zsuiq5.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 34,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229249/indus10_p47udx.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 35,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229248/indus8_yavv48.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 36,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229248/indus2_tplxn1.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 37,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229248/indus7_znnm3i.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 38,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229248/indus5_jzsa6e.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 39,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229248/indus6_imlxrq.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 40,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229247/gulf8_tnzkyk.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 41,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229248/indus4_i82d7i.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 42,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229247/gulf9_yadums.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 43,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229248/indus3_ryzagw.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 44,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229247/indus1_hrxvy4.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 45,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229247/gulf7_ybfulp.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 46,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229247/gulf6_wrvuxl.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 47,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229246/exhibition7_wh0npe.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 48,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229246/gulf5_uvnfxt.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 49,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229246/gulf4_pcrfga.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 50,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229246/gulf1_kna892.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 51,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229246/exhibition6_fui7ax.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 52,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229246/exhibition15_fev24j.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 53,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229246/egypt8_bkocwy.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 54,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229246/exhibition13_wsfsdh.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 55,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229246/egypt6_tp57ts.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 56,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229245/exhibition12_bwg0os.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 57,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229245/egypt1_eqhhj9.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 58,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229245/exhibition11_xnk6v8.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 59,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229245/egypt5_etq3nr.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 60,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229245/egypt4_oqnpea.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 61,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229244/egypt2_aghfof.jpg",
        alt: "Business Meeting 9",
        width: 400,
        height: 300,
    },
    {
        id: 62,
        src: "https://res.cloudinary.com/dtivafy25/image/upload/v1738229244/egypt3_b8lj90.jpg",
        alt: "Business Meeting 9",
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
