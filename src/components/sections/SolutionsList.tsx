import { solutions } from "@/data/solutions";
import { RevealGroup, RevealItem } from "@/components/ui/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";

export function SolutionsList() {
  return (
    <RevealGroup className="mx-auto flex max-w-5xl flex-col gap-5 px-6 sm:px-8">
      {solutions.map((solution, i) => {
        const Icon = solution.icon;
        return (
          <RevealItem key={solution.slug}>
            <GlassCard id={solution.slug} className="scroll-mt-32 p-7 sm:p-9" hover={false}>
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-7">
                <div className="flex shrink-0 items-start gap-4 sm:flex-col sm:items-center sm:gap-3">
                  <span className="font-display text-sm font-semibold text-olive/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl olive-gradient text-white shadow-card">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
                    {solution.name}
                  </h3>
                  <p className="max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
                    {solution.description}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {solution.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="rounded-full border border-olive/15 bg-olive-50 px-3.5 py-1.5 text-xs font-medium text-olive-dark sm:text-sm"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
