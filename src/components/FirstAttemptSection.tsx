import { Target, GraduationCap, BookMarked, Lightbulb } from "lucide-react";

const points = [
  { icon: Target, text: "Structured exam strategy to cover every topic efficiently" },
  { icon: GraduationCap, text: "Experienced trainers with proven track records" },
  { icon: BookMarked, text: "Focused preparation methodology — no wasted effort" },
  { icon: Lightbulb, text: "Practical exam insights from real PMP exam patterns" },
];

const FirstAttemptSection = () => (
  <section className="bg-accent py-14 md:py-20">
    <div className="container max-w-3xl space-y-10 text-center">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary">
        Our Training Is Designed for First Attempt Success
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 text-left">
        {points.map((p) => (
          <div key={p.text} className="flex gap-3 items-start">
            <p.icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <p className="text-foreground font-body">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FirstAttemptSection;
