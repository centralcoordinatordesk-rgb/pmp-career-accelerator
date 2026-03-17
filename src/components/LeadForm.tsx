import { useState } from "react";

interface LeadFormProps {
  headline?: string;
  buttonText?: string;
  id?: string;
}

const LeadForm = ({ headline = "Book Free PMP Consultation", buttonText = "Book Free Consultation", id }: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id={id} className="rounded-lg bg-card p-6 shadow-lg border text-center">
        <div className="text-2xl font-heading font-bold text-secondary mb-2">Thank You!</div>
        <p className="text-muted-foreground">Our team will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="rounded-lg bg-card p-6 shadow-lg border space-y-4">
      <h3 className="text-xl font-heading font-bold text-secondary text-center">{headline}</h3>
      <input
        required
        type="text"
        placeholder="Full Name"
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        required
        type="email"
        placeholder="Email Address"
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        required
        type="tel"
        placeholder="Phone Number"
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <select
        required
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm font-body text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        defaultValue=""
      >
        <option value="" disabled>Years of Experience</option>
        <option value="0-2">0–2 years</option>
        <option value="3-5">3–5 years</option>
        <option value="5-10">5–10 years</option>
        <option value="10+">10+ years</option>
      </select>
      <button
        type="submit"
        className="w-full rounded-md bg-primary py-3 text-sm font-heading font-bold text-primary-foreground hover:opacity-90 transition-opacity"
      >
        {buttonText}
      </button>
      <p className="text-xs text-center text-muted-foreground">Limited seats for the upcoming batch</p>
    </form>
  );
};

export default LeadForm;
