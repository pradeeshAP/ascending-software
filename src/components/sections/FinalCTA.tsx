"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] glass-panel px-8 py-16 text-center shadow-lift sm:px-16 sm:py-20"
      >
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-olive-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-olive/20 blur-3xl" />

        <span className="eyebrow relative">Let&apos;s Build What&apos;s Next</span>
        <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance text-text-primary sm:text-4xl lg:text-5xl">
          Ready to engineer your next competitive advantage?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          Tell us about your project and we&apos;ll show you how modern architecture and
          intelligent automation can move it forward, faster.
        </p>
        <div className="relative mt-8 flex justify-center">
          <Button href="/contact" size="lg">
            Start a Project <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
