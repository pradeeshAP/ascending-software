import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { solutions } from "@/data/solutions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";

export function SolutionsGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Our Solutions"
          title="Full-stack capability, from architecture to automation."
          description="Eight core practice areas that cover everything a modern, connected business needs to build and scale with confidence."
        />
        <Link
          href="/services"
          className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-olive sm:flex"
        >
          View all solutions
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution) => {
          const Icon = solution.icon;
          return (
            <RevealItem key={solution.slug}>
              <GlassCard className="flex h-full flex-col gap-4 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl olive-gradient text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold leading-snug text-text-primary">
                  {solution.name}
                </h3>
                <ul className="flex flex-col gap-2">
                  {solution.bullets.slice(0, 3).map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-text-secondary">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-olive" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <div className="mt-10 flex justify-center sm:hidden">
        <Link
          href="/services"
          className="group flex items-center gap-2 text-sm font-semibold text-olive"
        >
          View all solutions
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
