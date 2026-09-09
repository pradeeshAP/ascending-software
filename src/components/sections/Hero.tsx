"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import type { IconComponent } from "@/types/icon";
import { Button } from "@/components/ui/Button";
import { useLoading } from "@/components/layout/LoadingContext";
import RollingText from "@/components/ui/rolling-text";
import { AnimatedCloud } from "@/components/ui/animated-icons/AnimatedCloud";
import { AnimatedBarChart } from "@/components/ui/animated-icons/AnimatedBarChart";
import { AnimatedSettings } from "@/components/ui/animated-icons/AnimatedSettings";
import { AnimatedBox } from "@/components/ui/animated-icons/AnimatedBox";

type HeroCard = { label: string; sub: string; icon: IconComponent };

const heroCards: HeroCard[] = [
  { label: "Cloud", sub: "Ready", icon: AnimatedCloud },
  { label: "Data", sub: "Driven", icon: AnimatedBarChart },
  { label: "AI", sub: "Automation", icon: AnimatedSettings },
  { label: "Scalable", sub: "Solutions", icon: AnimatedBox },
];

// Tuned to sit directly on top of each glass panel in hero-background.png, centered
// horizontally on the panel (coordinates are % of the full-bleed image box; each
// entry is centered via translateX(-50%) since the panels sit past the midline).
const cardPositions = [
  { top: "17%", left: "75%" },
  { top: "32%", left: "74%" },
  { top: "45%", left: "73%" },
  { top: "59%", left: "77%" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const { isLoading } = useLoading();

  return (
    <section className="relative isolate w-full overflow-hidden">
      {/* Full-bleed background image (desktop layout only — mobile uses its own image card below) */}
      <div className="absolute inset-0 -z-10 hidden lg:block">
        <Image
          src="/assets/hero-background.png"
          alt="Ascending Software — a modern architectural courtyard with a glass sculpture representing intelligent, connected technology"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/85 to-transparent sm:via-bg-primary/60 lg:via-bg-primary/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 via-transparent to-transparent" />
      </div>

      {/* Overlay layer — shares the same box as the image so % positions line up */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute left-[47%] top-[24%] flex flex-col gap-2.5 border-l border-white/50 pl-4 text-[0.65rem] font-semibold tracking-[0.2em] text-white/85 [text-shadow:0_1px_3px_rgba(0,0,0,0.45)]">
          <span>IDEAS</span>
          <span>TECHNOLOGY</span>
          <span>PEOPLE</span>
          <span>IMPACT</span>
        </div>
        <div className="absolute right-[2%] top-[28%] hidden flex-col items-end gap-2.5 text-[0.65rem] font-semibold tracking-[0.2em] text-white/75 [text-shadow:0_1px_3px_rgba(0,0,0,0.45)] xl:flex">
          <span>BUILD</span>
          <span>AUTOMATE</span>
          <span>SCALE</span>
          <span>TOGETHER</span>
        </div>
        <div className="absolute left-[76%] top-[73%] w-[220px] -translate-x-1/2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.45)]">
          A Smarter Tomorrow
          <br />
          Together
        </div>

        {heroCards.map((card, i) => {
          const Icon = card.icon;
          const pos = cardPositions[i];
          return (
            <div
              key={card.label + card.sub}
              className="absolute -translate-x-1/2"
              style={{ top: pos.top, left: pos.left }}
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isLoading ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex animate-float items-center gap-3 whitespace-nowrap"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <Icon className="h-7 w-7 shrink-0 text-text-primary drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]" />
                <span className="text-base font-semibold leading-tight text-text-primary [text-shadow:0_1px_2px_rgba(255,255,255,0.8),0_0_10px_rgba(255,255,255,0.5)]">
                  {card.label}
                  <br />
                  {card.sub}
                </span>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="relative mx-auto max-w-[1680px] px-6 pb-14 pt-28 sm:px-10 sm:pt-36 lg:h-[760px] lg:pb-24 lg:pt-44">
        <motion.div
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
          variants={container}
          className="flex max-w-xl flex-col items-start gap-5 sm:gap-6"
        >
          <motion.span variants={item} className="eyebrow">
            EVENT-DRIVEN &middot; MICROSERVICES &middot; INTELLIGENT
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-[2.75rem] font-semibold tracking-tight text-text-primary sm:text-6xl lg:text-[4rem]"
          >
            <RollingText
              text="Technology"
              className="block leading-[1.4]! whitespace-nowrap"
              minCycles={8}
              cycleVariance={3}
              duration={6}
              durationVariance={2}
            />
            <RollingText
              text="that moves"
              textColor="var(--olive)"
              className="block leading-[1.4]! whitespace-nowrap"
              minCycles={8}
              cycleVariance={3}
              duration={6}
              durationVariance={2}
            />
            <RollingText
              text="what's next."
              className="block leading-[1.4]! whitespace-nowrap"
              minCycles={8}
              cycleVariance={3}
              duration={6}
              durationVariance={2}
            />
          </motion.h1>

          <motion.p variants={item} className="max-w-md text-base leading-relaxed text-text-secondary sm:text-lg">
            At Ascending Software, we engineer future-ready technology solutions using modern
            architectures, cloud-native platforms and intelligent automation — helping businesses
            innovate, scale and stay ahead in a connected world.
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button href="/#contact" size="lg">
              Start a Project <ArrowRight className="h-4 w-4 group-hover:animate-icon-nudge" />
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-olive/40">
                <Play className="h-3 w-3 fill-olive text-olive group-hover:animate-icon-press" />
              </span>
              See Our Solutions
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile / tablet: simplified image + 2x2 card grid */}
        <div className="mt-10 lg:hidden">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] shadow-lift">
            <Image
              src="/assets/hero-background.png"
              alt=""
              fill
              sizes="90vw"
              className="object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {heroCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label + card.sub}
                  className="group glass-panel flex items-center gap-2.5 rounded-xl !bg-white/80 px-3 py-3 shadow-soft"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg olive-gradient text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold leading-tight text-text-primary">
                    {card.label}
                    <br />
                    {card.sub}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
