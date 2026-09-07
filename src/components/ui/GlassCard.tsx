"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  hover = true,
  id,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      className={cn("glass-panel rounded-2xl", className)}
      whileHover={hover ? { y: -4, boxShadow: "var(--shadow-lift)" } : undefined}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
