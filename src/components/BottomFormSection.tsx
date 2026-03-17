import LeadForm from "./LeadForm";
import professionalLady from "@/assets/professional-lady.png";

const BottomFormSection = () => (
  <section className="bg-accent py-14 md:py-20">
    <div className="container max-w-3xl">
      <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
        <LeadForm
          id="bottom-form"
          headline="Get PMP Certification Roadmap"
          buttonText="Get Course Details"
          compact
        />
        <img
          src={professionalLady}
          alt="Professional ready for PMP certification"
          className="hidden md:block h-72 object-contain"
        />
      </div>
    </div>
  </section>
);

export default BottomFormSection;
