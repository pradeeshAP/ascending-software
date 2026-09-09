"use client";

import { Warp } from "@paper-design/shaders-react";
import { solutions } from "@/data/solutions";
import { RevealGroup, RevealItem } from "@/components/ui/RevealOnScroll";
import { getShaderPalette } from "@/lib/shaderPalettes";

export function SolutionsList() {
  return (
    <RevealGroup className="mx-auto flex max-w-5xl flex-col gap-5 px-6 sm:px-8">
      {solutions.map((solution, i) => {
        const Icon = solution.icon;
        const palette = getShaderPalette(i);
        return (
          <RevealItem key={solution.slug}>
            <div
              id={solution.slug}
              className="relative scroll-mt-32 overflow-hidden rounded-3xl border border-white/15"
            >
              <div className="absolute inset-0">
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

              <div className="relative z-10 bg-contrast-bg/85 p-7 sm:p-9">
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-7">
                  <div className="flex shrink-0 items-start gap-4 sm:flex-col sm:items-center sm:gap-3">
                    <span className="font-display text-sm font-semibold text-olive-300/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-3">
                    <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                      {solution.name}
                    </h3>
                    <p className="max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                      {solution.description}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {solution.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white sm:text-sm"
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
