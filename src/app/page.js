import BannerSection from "@/components/BannerSection/BannerSection";
import BrandMarquee from "@/components/BrandMarquee/BrandMarquee";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import PresenceMap from "@/components/PresenceMap/PresenceMap";
import ProductRange from "@/components/ProductRange/ProductRange";
import WelcomeSection from "@/components/WelcomeSection/WelcomeSection";
import Milestones from '@/components/Milestones/Milestones';

export default function Home() {
  return (
    <>
    <HeroCarousel />
    <WelcomeSection />
    <ProductRange />
    <PresenceMap />
    <Milestones />
    <BrandMarquee />
    <BannerSection />
    </>
  );
}
