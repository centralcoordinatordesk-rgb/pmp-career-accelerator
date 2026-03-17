import { TrendingUp, ShieldCheck, Globe, Briefcase } from "lucide-react";

const items = [
  { icon: TrendingUp, text: "AI is transforming job roles — certified PMs stay ahead" },
  { icon: ShieldCheck, text: "Companies prefer certified project managers for leadership" },
  { icon: Globe, text: "PMP certification increases credibility in global markets" },
  { icon: Briefcase, text: "Helps professionals move into leadership roles faster" },
];

const WhyPMPSection = () => (
  <section className="bg-accent py-14 md:py-20">
    <div className="container max-w-3xl text-center space-y-10">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary">
        Why Professionals Are Getting PMP Certified in 2026
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 text-left">
        {items.map((item) => (
          <div key={item.text} className="flex gap-3 items-start">
            <item.icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <p className="text-foreground font-body">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyPMPSection;
