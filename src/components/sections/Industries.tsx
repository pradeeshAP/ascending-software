import { industries } from "@/data/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/RevealOnScroll";

export function Industries() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Domain-aware engineering across every sector."
        align="center"
        description="Every industry has its own constraints and compliance realities. We build with them in mind from day one."
      />

      <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <RevealItem key={industry.name}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-black/5 bg-white/40 px-5 py-5 transition-all duration-200 hover:-translate-y-1 hover:border-olive/30 hover:bg-white/70 hover:shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-olive-50 text-olive transition-colors duration-200 group-hover:bg-olive group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold leading-snug text-text-primary">
                  {industry.name}
                </span>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
