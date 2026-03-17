import { BookOpen, ClipboardCheck, MessageCircleQuestion, Linkedin, FileText, Users } from "lucide-react";

const features = [
  { icon: BookOpen, title: "PMI-Aligned Prep", desc: "PMP exam preparation aligned with the latest PMI framework" },
  { icon: ClipboardCheck, title: "Mock Tests", desc: "Exam simulations that mirror the real PMP exam experience" },
  { icon: MessageCircleQuestion, title: "Doubt Clearing", desc: "Live doubt clearing sessions with expert trainers" },
  { icon: Linkedin, title: "LinkedIn Optimization", desc: "Profile optimization to attract recruiters and opportunities" },
  { icon: FileText, title: "Resume Optimization", desc: "Resume tailored for the USA/Canada job market" },
  { icon: Users, title: "Career Mentoring", desc: "Personalized career positioning and mentoring guidance" },
];

const FeaturesSection = () => (
  <section className="bg-background py-14 md:py-20">
    <div className="container space-y-10">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary text-center">
        What You Get With ZOC Learnings
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-lg border bg-card p-6 space-y-3">
            <f.icon className="h-8 w-8 text-primary" />
            <h3 className="text-lg font-heading font-semibold text-secondary">{f.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
