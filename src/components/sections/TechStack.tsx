import { Sparkles } from "lucide-react";
import { techStack, techStackTrailingLabel } from "@/data/techstack";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem, RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";

export function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Technology Stack"
        title="Built on tools engineered for scale."
        description="We work across the modern cloud, data, and application ecosystem — choosing the right tool for the problem, not the other way around."
      />

      <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {techStack.map((group) => (
          <RevealItem key={group.label}>
            <GlassCard className="flex h-full flex-col gap-4 p-7" hover={false}>
              <span className="eyebrow">{group.label}</span>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-olive/50 hover:bg-white/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>
          </RevealItem>
        ))}
      </RevealGroup>

      <RevealOnScroll className="mt-6 flex items-center gap-2 text-sm font-medium text-olive">
        <Sparkles className="h-4 w-4" />
        {techStackTrailingLabel}
      </RevealOnScroll>
    </section>
  );
}
