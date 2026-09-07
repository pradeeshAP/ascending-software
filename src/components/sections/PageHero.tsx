import Image from "next/image";
import type { ReactNode } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <RevealOnScroll className="flex flex-col items-start gap-5">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-text-primary sm:text-5xl lg:text-[3.2rem]">
            {title}
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
            {description}
          </p>
          {children}
        </RevealOnScroll>

        <RevealOnScroll delay={0.15} className="relative aspect-[5/4] w-full">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src="/assets/hero-background.png"
              alt="Ascending Software — glass sculpture representing intelligent, connected technology"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden animate-float rounded-2xl glass-panel px-4 py-3 shadow-card sm:block">
            <span className="text-xs font-semibold tracking-[0.15em] text-olive">
              A SMARTER TOMORROW
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
