import HeroSection from "@/components/HeroSection";
import WhyPMPSection from "@/components/WhyPMPSection";
import FeaturesSection from "@/components/FeaturesSection";
import CareerImpactSection from "@/components/CareerImpactSection";
import FirstAttemptSection from "@/components/FirstAttemptSection";
import WhoShouldSection from "@/components/WhoShouldSection";
import FinalSection from "@/components/FinalSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import zocLogo from "@/assets/zoc-logo.webp";

const Index = () => (
  <div className="min-h-screen">
    <header className="border-b bg-background py-3">
      <div className="container flex items-center justify-between">
        <img src={zocLogo} alt="ZOC Learnings Canada" className="h-10 md:h-12" />
        <a href="tel:+1234567890" className="text-sm font-body font-medium text-primary hover:underline">
          Call Us
        </a>
      </div>
    </header>

    <HeroSection />
    <WhyPMPSection />
    <FeaturesSection />
    <CareerImpactSection />
    <FirstAttemptSection />
    <WhoShouldSection />
    <FinalSection />
    <StickyMobileCTA />
  </div>
);

export default Index;
