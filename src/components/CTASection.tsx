const CTASection = () => (
  <section className="bg-secondary py-14 md:py-20">
    <div className="container max-w-2xl text-center space-y-6">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-foreground">
        Take the Next Step in Your Career with PMP Certification
      </h2>
      <p className="text-secondary-foreground/80 font-body">
        Join thousands of professionals who have advanced their careers with ZOC Learnings.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#bottom-form"
          className="inline-flex items-center rounded-md bg-primary px-8 py-3 font-heading font-bold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Book Free Consultation
        </a>
        <a
          href="#bottom-form"
          className="inline-flex items-center rounded-md border-2 border-secondary-foreground px-8 py-3 font-heading font-bold text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary transition-colors"
        >
          Get Course Details
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
