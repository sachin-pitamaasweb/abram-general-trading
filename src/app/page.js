"use client";
import { useState, useEffect } from "react";
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
import { Skeleton } from "@/components/ui/skeleton";
import { useMediaQuery } from "../hooks/use-media-query";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 100); // Simulating loading delay
  }, []);

  const images = [
    {
      src: "https://res.cloudinary.com/dtivafy25/image/upload/v1737982615/Website_Banner_1_z46xsz.jpg",
      alt: "Aerial view of agricultural fields showing farmers planting crops",
    },
    {
      src: "/images/home/banner-1.jpg",
      alt: "Aerial view of agricultural fields showing farmers planting crops",
    },
    {
      src: "/images/home/banner-2.jpg",
      alt: "Aerial view of agricultural fields showing farmers planting crops",
    }
  ];

  const mobileimages = [
    {
      src: "/images/home/banner.jpg",
      alt: "Aerial view of agricultural fields showing farmers planting crops",
    },
    {
      src: "/images/home/mobile-1.jpg",
      alt: "Aerial view of agricultural fields showing farmers planting crops",
    },
    {
      src: "/images/home/mobile-2.jpg",
      alt: "Aerial view of agricultural fields showing farmers planting crops",
    }
  ];

  const additionalImagesForPunjab = [
    "https://res.cloudinary.com/dtivafy25/image/upload/v1738731381/Global_Agro_Rice00082_2_r08jgp.png",
    "https://res.cloudinary.com/dtivafy25/image/upload/v1738731428/Global_Agro_Rice00084_3_mf1gi7.png",
  ];

  const additionalImages = [
    "https://res.cloudinary.com/dtivafy25/image/upload/v1738731567/Global_Agro_Rice00358_uozdm7.png",
    "https://res.cloudinary.com/dtivafy25/image/upload/v1738731564/Global_Agro_Rice00096_wu6ymw.png",
  ];

  const additionalImagesForZehnab = [
    "https://res.cloudinary.com/dtivafy25/image/upload/v1738730867/Global_Agro_Rice00074_kork9c.png",
    "https://res.cloudinary.com/dtivafy25/image/upload/v1738730867/Global_Agro_Rice00381_ins8su.png",
  ];

  return (
    <>
      {isMobile ? (
        loading ? <Skeleton className="h-[400px] w-full rounded-md" /> : <HeroCarouselMobile images={mobileimages} title="home" />
      ) : (
        loading ? <Skeleton className="h-[500px] w-full rounded-md" /> : <HeroCarousel images={images} title="home" />
      )}

      <div className="container mx-auto p-12">
        <div className="max-w-5xl mx-auto" style={{ maxWidth: "90rem" }}>
          {loading ? (
            <Skeleton className="h-[400px] w-full rounded-md" />
          ) : isMobile ? (
            <PunjabKitchenMobile />
          ) : (
            <PunjabKitchen
              mainImage="https://res.cloudinary.com/dtivafy25/image/upload/v1738731106/Global_Agro_Rice00092_1_wfvxol.png"
              additionalImages={additionalImagesForPunjab}
              title="Punjab Kitchen"
              bgGradient="linear-gradient(120deg, #000000, #3E403F 35%, #F74731 100%)"
            />
          )}
        </div>
      </div>

      <div className="container mx-auto p-12">
        <div className="max-w-5xl mx-auto" style={{ maxWidth: "90rem" }}>
          {loading ? (
            <Skeleton className="h-[400px] w-full rounded-md" />
          ) : isMobile ? (
            <Mahra />
          ) : (
            <MahraDesktop
              mainImage="https://res.cloudinary.com/dtivafy25/image/upload/v1738731567/Global_Agro_Rice00367_qpvsef.png"
              additionalImages={additionalImages}
              title="Mahra"
              bgGradient="linear-gradient(90deg, #FFFFFF -5%, #2384F6 100%, #52A2FF 45%)"
            />
          )}
        </div>
      </div>

      <div className="container mx-auto p-12">
        <div className="max-w-5xl mx-auto" style={{ maxWidth: "90rem" }}>
          {loading ? (
            <Skeleton className="h-[400px] w-full rounded-md" />
          ) : isMobile ? (
            <ZehnabMobile />
          ) : (
            <Zehnab
              mainImage="https://res.cloudinary.com/dtivafy25/image/upload/v1738730499/Global_Agro_Rice00410_mx7nmm.png"
              additionalImages={additionalImagesForZehnab}
              title="Zehnab"
              bgGradient="linear-gradient(90deg, #FFF578 -15%, #35BE95 100%, #35BE95 45%)"
            />
          )}
        </div>
      </div>

      {loading ? <Skeleton className="h-[400px] w-full rounded-md" /> : <CardGrid />}
      {loading ? <Skeleton className="h-[400px] w-full rounded-md" /> : <PresenceMap />}
      {loading ? <Skeleton className="h-[400px] w-full rounded-md" /> : <Testimonials />}
    </>
  );
}
