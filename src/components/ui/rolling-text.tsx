"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FONT_FAMILY = "var(--font-display), Helvetica Neue, Arial Narrow, system-ui, sans-serif";

// Default styling used when no className is passed — matches the component's
// original full-viewport demo look. Pass className to inherit a heading's own
// size/weight instead (e.g. embedding this inline inside an <h1>).
const DEFAULT_CLASS_NAME =
  "text-9xl max-[1025px]:text-6xl max-md:text-5xl font-light! leading-[1.2]! tracking-[0.02em] whitespace-nowrap";

interface RollingTextProps {
  text?: string;
  textColor?: string;
  className?: string;
  /** Minimum whole letter-heights a character travels before landing. */
  minCycles?: number;
  /** Extra random cycles added on top of minCycles. */
  cycleVariance?: number;
  /** Base spin duration in seconds. */
  duration?: number;
  /** Extra random duration added per character, in seconds. */
  durationVariance?: number;
  /** Re-roll a letter when the cursor passes over it. */
  hoverReroll?: boolean;
}

/** Deterministic PRNG so the server and client build identical reels. */
const mulberry32 = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

type Reel = { copies: number; to: number; duration: number };
type ReelConfig = {
  minCycles: number;
  cycleVariance: number;
  duration: number;
  durationVariance: number;
};

// A few extra identical copies beyond the mount target so a hover re-roll has
// room to spin further without running out of reel to show.
const HOVER_OVERSHOOT_COPIES = 3;

const buildReel = (charIndex: number, config: ReelConfig): Reel => {
  const rand = mulberry32(charIndex * 1013 + 7);
  const cycles = config.minCycles + Math.floor(rand() * config.cycleVariance);

  return {
    copies: cycles + 1 + HOVER_OVERSHOOT_COPIES,
    to: cycles,
    duration: config.duration + rand() * config.durationVariance,
  };
};

const RollingText = ({
  text = "HYPERIUX",
  textColor,
  className,
  minCycles = 3,
  cycleVariance = 3,
  duration = 2.4,
  durationVariance = 1.2,
  hoverReroll = true,
}: RollingTextProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const letters = gsap.utils.toArray<HTMLElement>("[data-letter]", containerRef.current);
      const cleanups: Array<() => void> = [];

      letters.forEach((letter) => {
        const reel = letter.querySelector<HTMLElement>("[data-reel]");
        if (!reel) return;
        const to = Number(reel.dataset.to);

        // A step size shorter than the font's natural line height (the
        // original 0.8em, and even a full 1em, both proved too short) isn't
        // tall enough for every glyph's metrics — descenders (g, y) and
        // characters like commas visually extend past that box, bleeding
        // into the neighboring copy's slot and showing as a stray mark once
        // the reel settles. 1.2em gives every glyph safe room. Re-measuring
        // the actual rendered font-size and rounding to a whole pixel also
        // keeps the copy height and translate step in exact agreement
        // (fractional pixel values can otherwise leave a hairline sliver of
        // the neighboring copy visible at the clip edge).
        const fontSizePx = parseFloat(getComputedStyle(letter).fontSize);
        const stepPx = Math.max(1, Math.round(fontSizePx * 1.2));
        const invisible = letter.querySelector<HTMLElement>("[data-invisible]");
        const copies = reel.querySelectorAll<HTMLElement>("[data-copy]");
        if (invisible) invisible.style.height = `${stepPx}px`;
        copies.forEach((copy) => {
          copy.style.height = `${stepPx}px`;
        });
        reel.style.setProperty("--step", `${stepPx}px`);

        if (reduced) {
          reel.style.setProperty("--k", String(to));
          return;
        }

        const scroll = { k: 0 };
        reel.style.setProperty("--k", "0");

        gsap.to(scroll, {
          k: to,
          duration: Number(reel.dataset.duration),
          ease: "expo.out",
          onUpdate: () => reel.style.setProperty("--k", String(scroll.k)),
        });

        if (hoverReroll) {
          const onEnter = () => {
            gsap.killTweensOf(scroll);
            gsap.to(scroll, {
              k: `+=${1 + Math.random()}`,
              duration: 0.55 + Math.random() * 0.3,
              ease: "power2.out",
              onUpdate: () => reel.style.setProperty("--k", String(scroll.k)),
              onComplete: () => {
                // All reel copies are identical, so snapping back to the base
                // resting position is visually seamless — this just keeps k
                // from growing without bound across repeated hovers.
                scroll.k = to;
                reel.style.setProperty("--k", String(to));
              },
            });
          };
          letter.addEventListener("mouseenter", onEnter);
          cleanups.push(() => letter.removeEventListener("mouseenter", onEnter));
        }
      });

      return () => cleanups.forEach((fn) => fn());
    },
    {
      scope: containerRef,
      dependencies: [text, minCycles, cycleVariance, duration, durationVariance, hoverReroll],
    }
  );

  // Split into alternating word / whitespace tokens so wrapping can only ever
  // happen at a real space — each word's letters are grouped into a single
  // non-breaking unit (otherwise every individual letter, being its own
  // inline-block, would be a valid — and often taken — line-break point).
  const tokens = text.split(/(\s+)/);

  const renderLetter = (char: string, seed: number) => {
    const reel = buildReel(seed, { minCycles, cycleVariance, duration, durationVariance });

    return (
      <span key={seed} data-letter="" className="relative inline-block align-top" aria-hidden>
        {/* Invisible copy of the letter: it alone sets the cell box, so
            the landed word matches plain text exactly. Height starts at the
            em-based fallback for the pre-JS/SSR paint, then gets replaced
            with a measured, rounded pixel value on mount (see useGSAP). */}
        <span
          data-invisible=""
          className="invisible flex leading-none items-center justify-center"
          style={{ height: "1.2em" }}
        >
          {char}
        </span>

        <span className="absolute inset-0 overflow-hidden">
          <span
            data-reel=""
            data-to={reel.to}
            data-duration={reel.duration}
            className="block will-change-transform"
            style={{ transform: "translateY(calc(var(--k, 0) * -1 * var(--step, 1.2em)))" }}
          >
            {Array.from({ length: reel.copies }, (_, copy) => (
              <span
                key={copy}
                data-copy=""
                className="flex w-full leading-none items-center justify-center"
                style={{ height: "1.2em" }}
              >
                {char}
              </span>
            ))}
          </span>
        </span>
      </span>
    );
  };

  return (
    <span
      ref={containerRef}
      aria-label={text}
      style={{ ...(textColor ? { color: textColor } : {}), fontFamily: FONT_FAMILY }}
      className={`select-none ${className ?? DEFAULT_CLASS_NAME}`}
    >
      {tokens.map((token, tokenIndex) => {
        if (token === "") return null;
        if (/^\s+$/.test(token)) {
          // A real, breakable space — this is the only valid line-break point.
          return token;
        }
        return (
          <span key={tokenIndex} className="inline-block whitespace-nowrap align-top">
            {token.split("").map((char, letterIndex) => renderLetter(char, tokenIndex * 97 + letterIndex))}
          </span>
        );
      })}
    </span>
  );
};

export default RollingText;
