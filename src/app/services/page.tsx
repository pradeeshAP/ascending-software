import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SolutionsList } from "@/components/sections/SolutionsList";
import { TechStack } from "@/components/sections/TechStack";
import { SolidCTA } from "@/components/sections/SolidCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Services | Ascending Software",
  description:
    "One partner, eight ways to build the systems your business runs on — microservices, cloud enablement, AI automation, data & analytics, API integration, digital platforms, security, and legacy modernization.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Solutions"
        title="One partner, eight ways to build the systems your business runs on."
        description="From your first customer-facing website to the event-driven platforms that run your operations — here is the full range of what Ascending Software designs, builds and maintains."
      />

      <section className="mx-auto max-w-6xl px-6 pb-6 sm:px-8">
        <SectionHeading
          eyebrow="Full Scope"
          title="Eight practice areas, one connected approach."
          align="center"
          className="mb-14"
        />
      </section>

      <SolutionsList />

      <TechStack />

      <SolidCTA
        eyebrow="Not Sure Where to Start?"
        title="Tell us about your systems — we'll tell you what to build first."
        buttonLabel="Talk To Our Team"
        buttonHref="/contact"
      />
    </>
  );
}
