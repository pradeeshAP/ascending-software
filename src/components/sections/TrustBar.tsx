"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trustItems } from "@/data/trustBar";

export function TrustBar() {
  return (
    <section className="px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[2rem] glass-panel px-6 py-6 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-8"
      >
        <div className="grid grid-cols-2 gap-5 sm:flex sm:flex-1 sm:flex-wrap sm:items-center sm:gap-8">
          {trustItems.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.line1} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-olive">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-text-primary">{t.line1}</span>
                  <span className="text-xs text-text-secondary">{t.line2}</span>
                </span>
              </div>
            );
          })}
        </div>

        <Link
          href="/#contact"
          className="group flex items-center gap-3 border-t border-black/5 pt-5 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-text-primary">Let&apos;s Build</span>
            <span className="text-xs text-text-secondary">What&apos;s Next Together</span>
          </span>
          <span className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-text-primary transition-colors group-hover:border-olive group-hover:text-olive">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
