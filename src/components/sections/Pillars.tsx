import { pillars } from "@/data/pillars";
import { RevealGroup, RevealItem } from "@/components/ui/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";

export function Pillars() {
  return (
    <RevealGroup className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 sm:px-8">
      {pillars.map((pillar) => {
        const Icon = pillar.icon;
        return (
          <RevealItem key={pillar.title}>
            <GlassCard className="group flex h-full flex-col gap-4 p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl olive-gradient text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-text-primary">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{pillar.description}</p>
            </GlassCard>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
