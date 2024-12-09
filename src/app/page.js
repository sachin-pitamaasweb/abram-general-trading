import BannerSection from "@/components/BannerSection/BannerSection";
import BrandMarquee from "@/components/BrandMarquee/BrandMarquee";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import ProductRange from "@/components/ProductRange/ProductRange";
import WelcomeSection from "@/components/WelcomeSection/WelcomeSection";

export default function Home() {
  return (
    <>
    <HeroCarousel />
    <WelcomeSection />
    <ProductRange />
    <BrandMarquee />
    <BannerSection />
    </>
  );
}
