import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfoGrid } from "@/components/sections/ContactInfoGrid";

export const metadata: Metadata = {
  title: "Start a Project | Ascending Software",
  description:
    "Tell us about your project and one of our engineers will get back to you within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's build what's next, together."
        description="Tell us about your project and one of our engineers will get back to you within one business day."
      />

      <section className="mx-auto max-w-4xl px-6 pb-20 sm:px-8">
        <ContactForm />
      </section>

      <section className="pb-24">
        <ContactInfoGrid />
      </section>
    </>
  );
}
