"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Warp } from "@paper-design/shaders-react";
import { solutions } from "@/data/solutions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/RevealOnScroll";
import { getShaderPalette } from "@/lib/shaderPalettes";

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
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          const palette = getShaderPalette(index);
          return (
            <RevealItem key={solution.slug}>
              <div className="relative h-80">
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={palette.proportion}
                    softness={palette.softness}
                    distortion={palette.distortion}
                    swirl={palette.swirl}
                    swirlIterations={palette.swirlIterations}
                    shape={palette.shape}
                    shapeScale={palette.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.8}
                    colors={palette.colors}
                  />
                </div>

                <div className="relative z-10 flex h-full flex-col gap-4 rounded-2xl border border-white/15 bg-contrast-bg/85 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold leading-snug text-white">
                    {solution.name}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {solution.bullets.slice(0, 3).map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-white/70">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-olive-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
