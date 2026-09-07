import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";

export function ProcessSteps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Our Process"
        title="How an engagement actually runs."
        align="center"
        className="mb-14"
      />
      <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <RevealItem key={step.number}>
            <GlassCard className="flex h-full flex-col gap-3 p-7">
              <span className="font-display text-2xl font-semibold text-olive">{step.number}</span>
              <h3 className="font-display text-lg font-semibold text-text-primary">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{step.description}</p>
            </GlassCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
