"use client"
import { Award, Star, Shield } from "lucide-react"

import ProductCard from "../ProductCard/ProductCard"

export default function ZehnabMobile() {
  const product = {
    images: {
      left: "https://res.cloudinary.com/dtivafy25/image/upload/v1737709734/295_spap4o.png",
      center: "https://res.cloudinary.com/dtivafy25/image/upload/v1737709734/921_ybq4b7.png",
      right: "https://res.cloudinary.com/dtivafy25/image/upload/v1737709733/294_n8l0nj.png",
    },
    title: "Zehnab",
    benefits: [
      { icon: <Award className="w-5 h-5" />, text: "Best Quality" },
      { icon: <Star className="w-5 h-5" />, text: "Rich Aroma" },
      { icon: <Shield className="w-5 h-5" />, text: "Hand Picked" },
    ],
  }

  return <ProductCard product={product} bgGradient="linear-gradient(90deg, #FFF578 -15%, #35BE95 100%, #35BE95 45%)" />
}
