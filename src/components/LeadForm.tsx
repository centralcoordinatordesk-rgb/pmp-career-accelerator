import { useState } from "react";

interface LeadFormProps {
  headline?: string;
  buttonText?: string;
  id?: string;
  compact?: boolean;
}

const FORMSPREE_URL = "https://formspree.io/f/mvzwlvjq";

const LeadForm = ({ headline = "Book Free PMP Consultation", buttonText = "Book Free Consultation", id, compact }: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div id={id} className="rounded-lg bg-card p-5 shadow-lg border text-center">
        <div className="text-xl font-heading font-bold text-secondary mb-2">Thank You!</div>
        <p className="text-sm text-muted-foreground">Our team will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className={`rounded-lg bg-card shadow-lg border ${compact ? "p-4 space-y-3" : "p-5 space-y-3"}`}>
      <h3 className="text-lg font-heading font-bold text-secondary text-center">{headline}</h3>
      <input
        required name="name" type="text" placeholder="Full Name"
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        required name="email" type="email" placeholder="Email Address"
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        required name="phone" type="tel" placeholder="Phone Number"
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <select
        required name="experience" defaultValue=""
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm font-body text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <option value="" disabled>Years of Experience</option>
        <option value="0-2">0–2 years</option>
        <option value="3-5">3–5 years</option>
        <option value="5-10">5–10 years</option>
        <option value="10+">10+ years</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-primary py-2.5 text-sm font-heading font-bold text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {loading ? "Submitting…" : buttonText}
      </button>
      <p className="text-xs text-center text-muted-foreground">Limited seats for the upcoming batch</p>
    </form>
  );
};

export default LeadForm;
