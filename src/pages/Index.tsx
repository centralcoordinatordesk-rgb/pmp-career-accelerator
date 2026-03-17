import HeroSection from "@/components/HeroSection";
import WhyPMPSection from "@/components/WhyPMPSection";
import FeaturesSection from "@/components/FeaturesSection";
import FirstAttemptSection from "@/components/FirstAttemptSection";
import WhoShouldSection from "@/components/WhoShouldSection";
import CTASection from "@/components/CTASection";
import BottomFormSection from "@/components/BottomFormSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import zocLogo from "@/assets/zoc-logo.webp";
import professionalLady from "@/assets/professional-lady.png";

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
    <FirstAttemptSection />
    <WhoShouldSection />
    <CTASection />
    <BottomFormSection />
    <StickyMobileCTA />

    <footer className="bg-secondary py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={zocLogo} alt="ZOC Learnings Canada" className="h-10 brightness-0 invert" />
          </div>
          <img
            src={professionalLady}
            alt="Professional ready for PMP certification"
            className="h-28 md:h-36 object-contain"
          />
          <p className="text-sm text-secondary-foreground/70 font-body text-center md:text-right">
            © {new Date().getFullYear()} ZOC Learnings Canada. All rights reserved.<br />
            18+ years of global certification excellence.
          </p>
        </div>
      </div>
    </footer>
  </div>
);

export default Index;
