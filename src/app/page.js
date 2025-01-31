"use client";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import HeroCarouselMobile from "@/components/HeroCarousel/HeroCarouselMobile";
import PresenceMap from "@/components/PresenceMap/PresenceMap";
import Testimonials from "@/components/Testimonials/Testimonials";
import CardGrid from "@/components/CardGrid/CardGrid";
import MahraDesktop from "@/components/MahraDesktop/MahraDesktop";
import Mahra from "@/components/Mahra/Mahra";
import PunjabKitchen from "@/components/PunjabKitchen/PunjabKitchen";
import PunjabKitchenMobile from "@/components/PunjabKitchenMobile/PunjabKitchenMobile";
import Zehnab from "@/components/Zehnab/Zehnab";
import ZehnabMobile from "@/components/ZehnabMobile/ZehnabMobile";

import { useMediaQuery } from "../hooks/use-media-query";


export default function Home() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const images = [
    {
      src: "https://res.cloudinary.com/dtivafy25/image/upload/v1737982615/Website_Banner_1_z46xsz.jpg",
      alt: "Aerial view of agricultural fields showing farmers planting crops",
    },
  ];

  const mobileimages = [
    {
      src: "/images/home/banner.jpg",
      alt: "Aerial view of agricultural fields showing farmers planting crops",
    },
  ];

  const additionalImagesForPunjab = [
    "https://res.cloudinary.com/dtivafy25/image/upload/v1737709736/uhlkuk_1_oubkrg.png",
    "https://res.cloudinary.com/dtivafy25/image/upload/v1737709735/287_c6r2ag.png",
  ];

  const additionalImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/292-3N5HVBHWlTvjp90jm8PXxthhj4CWFw.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/288-06msZ9cT5lCwLII7rlvdTjKMtOtYhX.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/290-HUFjz10t5mFMtM479ovCZYuqKBJ0V3.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/291-lacqDIcsGp0Vzs3wjxF98KDrffSvI2.png",
  ];

  const additionalImagesForZehnab = [
    "https://res.cloudinary.com/dtivafy25/image/upload/v1737709734/295_spap4o.png",
    "https://res.cloudinary.com/dtivafy25/image/upload/v1737709733/294_n8l0nj.png",
  ];

  return (
    <>
      {isMobile ? (
        <HeroCarouselMobile images={mobileimages} title="home" />
      ) : (
        <HeroCarousel images={images} title="home" />
      )}
      <div className="container mx-auto p-12">
        <div className="max-w-5xl mx-auto" style={{ maxWidth: "90rem" }}>
         { isMobile ? <PunjabKitchenMobile /> : <PunjabKitchen
            mainImage="https://res.cloudinary.com/dtivafy25/image/upload/v1737709738/924_fk0uix.png"
            additionalImages={additionalImagesForPunjab}
            title="Punjab Kitchen"
            bgGradient="linear-gradient(120deg, #000000, #3E403F 35%, #F74731 100%)"
          />}
        </div>
      </div>
      <div className="container mx-auto p-12">
        <div className="max-w-5xl mx-auto" style={{ maxWidth: "90rem" }}>
        { isMobile ? <Mahra /> :  <MahraDesktop
            mainImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/923-Cyx2G6dVFzyTYE4sklNz6277Dy6eDD.png"
            additionalImages={additionalImages}
            bgGradient="linear-gradient(90deg, #FFFFFF -5%, #2384F6 100%, #52A2FF 45%)"
          />}
        </div>
      </div>
      <div className="container mx-auto p-12">
        <div className="max-w-5xl mx-auto" style={{ maxWidth: "90rem" }}>
        { isMobile ? <ZehnabMobile /> :  <Zehnab
            mainImage="https://res.cloudinary.com/dtivafy25/image/upload/v1737709734/921_ybq4b7.png"
            additionalImages={additionalImagesForZehnab}
            title="Zehnab"
            bgGradient="linear-gradient(90deg, #FFF578 -15%, #35BE95 100%, #35BE95 45%)"
          />}
        </div>
      </div>
      <CardGrid />
      <PresenceMap />
      <Testimonials />
    </>
  );
}
