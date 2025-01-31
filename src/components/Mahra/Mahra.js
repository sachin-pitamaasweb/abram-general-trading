"use client"
import { Award, Star, Shield } from "lucide-react"

import ProductCard from "../ProductCard/ProductCard"

export default function Mahra() {
  const product = {
    images: {
      left: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/292-3N5HVBHWlTvjp90jm8PXxthhj4CWFw.png",
      center: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/923-Cyx2G6dVFzyTYE4sklNz6277Dy6eDD.png",
      right: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/291-lacqDIcsGp0Vzs3wjxF98KDrffSvI2.png",
    },
    title: "Mahra",
    benefits: [
      { icon: <Award className="w-5 h-5" />, text: "Superior Taste" },
      { icon: <Star className="w-5 h-5" />, text: "Aged Rice" },
      { icon: <Shield className="w-5 h-5" />, text: "Pure Quality" },
    ],
  }

  return <ProductCard product={product} bgGradient="linear-gradient(90deg, #FFFFFF -5%, #2384F6 100%, #52A2FF 45%)" />
}
