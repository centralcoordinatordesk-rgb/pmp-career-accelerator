import { CheckCircle } from "lucide-react";

const audiences = [
  "Project Managers looking to validate their skills",
  "IT Professionals seeking career advancement",
  "Team Leaders and Scrum Masters",
  "Professionals aiming for leadership roles",
  "Professionals planning career growth in USA or Canada",
];

const WhoShouldSection = () => (
  <section className="bg-background py-14 md:py-20">
    <div className="container max-w-2xl space-y-8 text-center">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary">
        Who Should Take This Course
      </h2>
      <ul className="space-y-4 text-left">
        {audiences.map((a) => (
          <li key={a} className="flex items-center gap-3">
            <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
            <span className="font-body text-foreground">{a}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhoShouldSection;
