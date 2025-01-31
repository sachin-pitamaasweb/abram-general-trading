import ProductCard from "../ProductCard/ProductCard"
import { Award, Star, Shield } from "lucide-react"

export default function PunjabKitchenMobile() {
  const product = {
    images: {
      left: "https://res.cloudinary.com/dtivafy25/image/upload/v1737709736/uhlkuk_1_oubkrg.png",
      center: "https://res.cloudinary.com/dtivafy25/image/upload/v1737709738/924_fk0uix.png",
      right: "https://res.cloudinary.com/dtivafy25/image/upload/v1737709735/287_c6r2ag.png",
    },
    title: "Punjab Kitchen",
    benefits: [
      { icon: <Award className="w-5 h-5" />, text: "Premium Quality" },
      { icon: <Star className="w-5 h-5" />, text: "Extra Long Grain" },
      { icon: <Shield className="w-5 h-5" />, text: "100% Natural" },
    ],
  }

  return <ProductCard product={product}  bgGradient="linear-gradient(to right, #000000, #F74731)"  />
}
