"use client";

import type { IconComponent } from "@/types/icon";
import { Warp } from "@paper-design/shaders-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/RevealOnScroll";
import { getShaderPalette } from "@/lib/shaderPalettes";
import { AnimatedLayers } from "@/components/ui/animated-icons/AnimatedLayers";
import { AnimatedCloud } from "@/components/ui/animated-icons/AnimatedCloud";
import { AnimatedBrainCircuit } from "@/components/ui/animated-icons/AnimatedBrainCircuit";
import { AnimatedShieldCheck } from "@/components/ui/animated-icons/AnimatedShieldCheck";
import { AnimatedBarChart } from "@/components/ui/animated-icons/AnimatedBarChart";
import { AnimatedTrendingUp } from "@/components/ui/animated-icons/AnimatedTrendingUp";

interface Feature {
  title: string;
  description: string;
  icon: IconComponent;
}

const features: Feature[] = [
  {
    title: "Modern Architecture",
    description:
      "Event-driven, microservices-based systems built to handle real-time data and scale on demand.",
    icon: AnimatedLayers,
  },
  {
    title: "Cloud-Native by Default",
    description:
      "Infrastructure and delivery pipelines built for elasticity, resilience, and fast iteration.",
    icon: AnimatedCloud,
  },
  {
    title: "AI-Ready Systems",
    description:
      "Generative AI and automation woven into workflows, not bolted on as an afterthought.",
    icon: AnimatedBrainCircuit,
  },
  {
    title: "Secure by Design",
    description:
      "Identity, data protection, and compliance built into the architecture from day one.",
    icon: AnimatedShieldCheck,
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Real-time analytics and governed data platforms your team can actually act on.",
    icon: AnimatedBarChart,
  },
  {
    title: "Built to Scale",
    description: "Systems designed to absorb growth instead of being rebuilt because of it.",
    icon: AnimatedTrendingUp,
  },
];

export default function FeaturesCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Engineering Capabilities"
        title="Built on capability, not just code."
        description="Six things that shape every system we deliver — from first architecture decision to long-term support."
        align="center"
        className="mb-14"
      />

      <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const shaderConfig = getShaderPalette(index);
          const Icon = feature.icon;
          return (
            <RevealItem key={feature.title}>
              <div className="group relative h-80">
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape}
                    shapeScale={shaderConfig.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.8}
                    colors={shaderConfig.colors}
                  />
                </div>

                <div className="relative z-10 flex h-full flex-col rounded-3xl border border-white/15 bg-contrast-bg/85 p-8">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display mb-3 text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="flex-grow leading-relaxed text-white/70">{feature.description}</p>
                </div>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
