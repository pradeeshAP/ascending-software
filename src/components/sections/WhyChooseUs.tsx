import { CheckCircle2 } from "lucide-react";
import { whyChooseUs } from "@/data/whyChooseUs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

export function WhyChooseUs({ narrative = false }: { narrative?: boolean }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
      <div className="overflow-hidden rounded-[2rem] bg-contrast-bg px-6 py-14 sm:px-12 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A partner built for the long run."
            description="We combine deep technical craft with a delivery model that keeps you informed, involved, and ahead of schedule."
            className="[&_.eyebrow]:text-olive-300 [&_h2]:text-text-inverse [&_p]:text-white/60"
          />

          <RevealGroup
            className={cn(
              "grid grid-cols-1 gap-x-8 gap-y-6",
              narrative ? "sm:grid-cols-1" : "sm:grid-cols-2"
            )}
          >
            {whyChooseUs.map((reason) => (
              <RevealItem key={reason.title} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-olive-300" />
                <div className="flex flex-col gap-1">
                  <span className="font-display text-sm font-semibold text-text-inverse sm:text-base">
                    {reason.title}
                  </span>
                  {narrative && (
                    <span className="text-sm leading-relaxed text-white/55">{reason.detail}</span>
                  )}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
