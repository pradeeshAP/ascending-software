"use client";

import { type MouseEvent, type RefObject } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Subtle "magnetic" pull toward the cursor while hovering an element —
 * the element eases a short distance toward the pointer, then springs back
 * to rest on mouse leave. Disabled under prefers-reduced-motion.
 */
export function useMagnetic(
  ref: RefObject<HTMLElement | null>,
  strength = 0.3,
  maxOffset = 14
) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 14, mass: 0.15 });
  const springY = useSpring(y, { stiffness: 150, damping: 14, mass: 0.15 });

  function handleMouseMove(e: MouseEvent) {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-maxOffset, Math.min(maxOffset, relX * strength)));
    y.set(Math.max(-maxOffset, Math.min(maxOffset, relY * strength)));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { x: springX, y: springY, handleMouseMove, handleMouseLeave };
}
