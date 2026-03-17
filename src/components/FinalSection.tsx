import LeadForm from "./LeadForm";
import professionalLady from "@/assets/professional-lady.png";
import zocLogo from "@/assets/zoc-logo.webp";

const FinalSection = () => (
  <section className="bg-secondary py-14 md:py-20">
    <div className="container space-y-10">
      {/* Hook + CTA */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-foreground">
          Take the Next Step in Your Career with PMP Certification
        </h2>
        <p className="text-secondary-foreground/80 font-body">
          Join thousands of professionals who have advanced their careers with ZOC Learnings.
        </p>
      </div>

      {/* Form + Lady */}
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center max-w-4xl mx-auto">
        <div className="flex justify-center md:justify-end">
          <img
            src={professionalLady}
            alt="Professional ready for PMP certification"
            className="h-56 md:h-72 object-contain"
          />
        </div>
        <div className="hidden md:block w-px bg-secondary-foreground/20 self-stretch" />
        <LeadForm
          id="bottom-form"
          headline="Get PMP Certification Roadmap"
          buttonText="Get Course Details"
          compact
        />
      </div>

      {/* Footer */}
      <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={zocLogo} alt="ZOC Learnings Canada" className="h-10 brightness-0 invert" />
        <p className="text-sm text-secondary-foreground/70 font-body text-center md:text-right">
          © {new Date().getFullYear()} ZOC Learnings Canada. All rights reserved.<br />
          18+ years of global certification excellence.
        </p>
      </div>
    </div>
  </section>
);

export default FinalSection;
