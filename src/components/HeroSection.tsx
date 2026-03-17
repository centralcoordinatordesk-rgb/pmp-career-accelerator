import { Award, Globe, Headphones, Leaf } from "lucide-react";
import LeadForm from "./LeadForm";

const badges = [
  { icon: Award, text: "18+ Years Training Experience" },
  { icon: Globe, text: "Global Certification Experts" },
  { icon: Headphones, text: "Career Support Included" },
];

const HeroSection = () => (
  <section className="bg-background py-10 md:py-16">
    <div className="container">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
        {/* Left */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-tight font-heading font-bold text-secondary">
            Pass PMP Certification in Your First Attempt — Secure Your Career in an Uncertain Job Market
          </h1>
          <p className="text-lg text-muted-foreground font-body">
            Live online PMP certification training designed for professionals in the USA and Canada.
          </p>

          {/* Golden leaf badge */}
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-yellow-500 bg-yellow-50 px-4 py-2">
            <Leaf className="h-5 w-5 text-yellow-600" />
            <span className="text-sm font-heading font-bold text-yellow-700">Most Preferred Institute</span>
          </div>

          <div className="flex flex-wrap gap-4">
            {badges.map((b) => (
              <div key={b.text} className="flex items-center gap-2 rounded-md bg-accent px-3 py-2">
                <b.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-body font-medium text-accent-foreground">{b.text}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#hero-form"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-heading font-bold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Book Free PMP Consultation
            </a>
            <a
              href="#bottom-form"
              className="inline-flex items-center rounded-md border-2 border-secondary px-6 py-3 text-sm font-heading font-bold text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              Get Course Details
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <LeadForm id="hero-form" />
      </div>
    </div>
  </section>
);

export default HeroSection;
