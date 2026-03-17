import { Briefcase, DollarSign, TrendingUp, CheckSquare } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "30%", label: "More Job Opportunities" },
  { icon: DollarSign, value: "25%", label: "Higher Salary" },
  { icon: TrendingUp, value: "45%", label: "Career Growth" },
];

const industries = [
  { name: "Information Technology & Software Services", pct: "37%" },
  { name: "Construction and Engineering", pct: "27.7%" },
  { name: "Banking and Financial Services", pct: "18.5%" },
  { name: "Healthcare and Pharma", pct: "9.3%" },
  { name: "Telecom and Infrastructure", pct: "4.3%" },
];

const jobRoles = [
  "Project Managers",
  "Program Manager",
  "Delivery Manager",
  "Technical Project Lead",
  "Project Consultant",
  "Business Transformation Manager",
  "PMO Specialist",
];

const CareerImpactSection = () => (
  <section className="bg-background py-14 md:py-20">
    <div className="container space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary">
          PMP <span className="text-primary">Career Impact</span> Snapshot
        </h2>
        <p className="text-muted-foreground font-body">
          Boost Your Career with PMP Certification Course
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
        {stats.map((s) => (
          <div key={s.label} className="text-center space-y-2 rounded-lg border bg-card p-4">
            <s.icon className="h-6 w-6 mx-auto text-primary" />
            <div className="text-2xl md:text-3xl font-heading font-bold text-secondary">{s.value}</div>
            <p className="text-xs md:text-sm font-body text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Industries + Job Roles */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Industries */}
        <div className="rounded-lg border bg-card p-6 space-y-4">
          <h3 className="font-heading font-bold text-secondary text-lg">
            Industries Hiring PMP-Certified Professionals
          </h3>
          <div className="space-y-3">
            {industries.map((ind) => (
              <div key={ind.name} className="space-y-1">
                <div className="flex justify-between text-sm font-body">
                  <span className="text-foreground">{ind.name}</span>
                  <span className="font-semibold text-secondary">{ind.pct}</span>
                </div>
                <div className="h-2 rounded-full bg-accent overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary/80"
                    style={{ width: ind.pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Roles */}
        <div className="rounded-lg border bg-card p-6 space-y-4">
          <h3 className="font-heading font-bold text-secondary text-lg">
            Typical PMP Job Roles
          </h3>
          <ul className="space-y-3">
            {jobRoles.map((role) => (
              <li key={role} className="flex items-center gap-3">
                <CheckSquare className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-body text-foreground">{role}</span>
              </li>
            ))}
          </ul>

          {/* Career Progression note */}
          <div className="rounded-md bg-accent p-4 mt-4">
            <p className="text-sm font-body text-accent-foreground">
              <span className="font-semibold">25% Increase</span> anticipated in Project Management oriented roles globally by 2027
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CareerImpactSection;
