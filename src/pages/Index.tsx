import HeroSection from "@/components/HeroSection";
import WhyPMPSection from "@/components/WhyPMPSection";
import FeaturesSection from "@/components/FeaturesSection";
import FirstAttemptSection from "@/components/FirstAttemptSection";
import WhoShouldSection from "@/components/WhoShouldSection";
import CTASection from "@/components/CTASection";
import BottomFormSection from "@/components/BottomFormSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => (
  <div className="min-h-screen">
    {/* Minimal header — no nav links per design brief */}
    <header className="border-b bg-background py-4">
      <div className="container flex items-center justify-between">
        <span className="font-heading text-xl font-bold text-secondary">
          ZOC Learnings Canada
        </span>
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

    <footer className="bg-secondary py-8">
      <div className="container text-center">
        <p className="text-sm text-secondary-foreground/70 font-body">
          © {new Date().getFullYear()} ZOC Learnings Canada. All rights reserved. 18+ years of global certification excellence.
        </p>
      </div>
    </footer>
  </div>
);

export default Index;
