import BannerSection from "@/components/BannerSection/BannerSection";
import BrandMarquee from "@/components/BrandMarquee/BrandMarquee";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import PresenceMap from "@/components/PresenceMap/PresenceMap";
import ProductRange from "@/components/ProductRange/ProductRange";
import WelcomeSection from "@/components/WelcomeSection/WelcomeSection";
import Milestones from '@/components/Milestones/Milestones';
import Gallery from "@/components/Gallery/Gallery";
import Founders from "@/components/Founders/Founders";
import Infrastructure from "@/components/Infrastructure/Infrastructure";
import Testimonials from "@/components/Testimonials/Testimonials";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import CardGrid from "@/components/CardGrid/CardGrid";

export default function Home() {
  return (
    <>
    <HeroCarousel />
    <WelcomeSection />
    {/* <ServicesSection /> */}
    <CardGrid />
    <Founders />
    <Milestones />
    {/* <BrandMarquee /> */}
    {/* <ProductRange /> */}
    <Infrastructure />
    <PresenceMap />
    {/* <BannerSection /> */}
    <Gallery />
    <Testimonials />
    </>
  );
}
