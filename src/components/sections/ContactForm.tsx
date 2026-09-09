"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { projectTypes } from "@/data/contact";

const inputStyles =
  "w-full rounded-xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/70 outline-none transition-colors focus:border-olive focus:bg-white/90";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name")?.toString() ?? "";
    const email = form.get("email")?.toString() ?? "";
    const phone = form.get("phone")?.toString() ?? "";
    const need = form.get("need")?.toString() ?? "";
    const details = form.get("details")?.toString() ?? "";

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `What they need: ${need}`,
      "",
      details,
    ].join("\n");

    window.location.href = `mailto:info@ascendingsoftware.com?subject=${encodeURIComponent(
      `New project enquiry from ${name || "website"}`
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  return (
    <GlassCard className="p-7 sm:p-10" hover={false}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-text-primary">Full Name</span>
            <input required name="name" type="text" placeholder="Your name" className={inputStyles} />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-text-primary">Email Address</span>
            <input
              required
              name="email"
              type="email"
              placeholder="you@company.com"
              className={inputStyles}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-text-primary">Phone Number</span>
            <input name="phone" type="tel" placeholder="+91 00000 00000" className={inputStyles} />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-text-primary">What do you need?</span>
            <select name="need" defaultValue={projectTypes[0]} className={inputStyles}>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-text-primary">Project Details</span>
          <textarea
            name="details"
            rows={5}
            placeholder="Tell us a bit about what you're trying to build..."
            className={`${inputStyles} resize-none`}
          />
        </label>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-secondary">
            We&apos;ll only use these details to respond to your enquiry.
          </p>
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Submit Enquiry <ArrowRight className="h-4 w-4 group-hover:animate-icon-nudge" />
          </Button>
        </div>

        {submitted && (
          <p className="text-sm font-medium text-olive">
            Opening your email client to send this enquiry — thanks for reaching out!
          </p>
        )}
      </form>
    </GlassCard>
  );
}
