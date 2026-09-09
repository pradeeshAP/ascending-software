import Image from "next/image";
import type { ReactNode } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import RollingText from "@/components/ui/rolling-text";

const rollingProps = {
  minCycles: 8,
  cycleVariance: 3,
  duration: 6,
  durationVariance: 2,
};

export function PageHero({
  eyebrow,
  title,
  titleLines,
  description,
  children,
  animateTitle = false,
  fullBleed = false,
}: {
  eyebrow: string;
  title: string;
  /**
   * Short, non-wrapping lines to animate instead of `title`. Keeping each
   * line short and forcing the break point (rather than letting one long
   * sentence wrap inside the rolling-text effect) avoids any risk of the
   * animated reels misaligning at a line seam.
   */
  titleLines?: string[];
  description: string;
  children?: ReactNode;
  /** Reveal the title with the letter-rolling effect instead of plain text. */
  animateTitle?: boolean;
  /** Full-bleed background image (matches the Home hero) instead of a boxed image aside. */
  fullBleed?: boolean;
}) {
  const renderedTitle = animateTitle ? (
    titleLines ? (
      titleLines.map((line) => (
        <RollingText key={line} text={line} className="block leading-[1.4]! whitespace-nowrap" {...rollingProps} />
      ))
    ) : (
      <RollingText text={title} className="leading-[1.4]!" {...rollingProps} />
    )
  ) : (
    title
  );

  if (fullBleed) {
    return (
      <section className="relative isolate w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/hero-background.png"
            alt="Ascending Software — a modern architectural courtyard with a glass sculpture representing intelligent, connected technology"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-bg-primary/25 sm:via-bg-primary/65 lg:via-bg-primary/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28 lg:min-h-[600px] lg:py-0 lg:flex lg:items-center">
          <RevealOnScroll className="flex max-w-xl flex-col items-start gap-5">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-[3.2rem]">
              {renderedTitle}
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
              {description}
            </p>
            {children}
          </RevealOnScroll>
        </div>

        <div className="absolute bottom-8 right-6 hidden animate-float rounded-2xl glass-panel px-4 py-3 shadow-card sm:right-8 md:block">
          <span className="text-xs font-semibold tracking-[0.15em] text-olive">
            A SMARTER TOMORROW
          </span>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <RevealOnScroll className="flex flex-col items-start gap-5">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-text-primary sm:text-5xl lg:text-[3.2rem]">
            {renderedTitle}
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
