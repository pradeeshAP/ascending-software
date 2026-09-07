"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function SolidCTA({
  eyebrow,
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] bg-contrast-bg px-8 py-16 text-center sm:px-16 sm:py-20"
      >
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-olive-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-olive/25 blur-3xl" />

        <span className="eyebrow relative text-olive-300">{eyebrow}</span>
        <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance text-text-inverse sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            {description}
          </p>
        )}
        <div className="relative mt-8 flex justify-center">
          <Button href={buttonHref} size="lg">
            {buttonLabel} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
