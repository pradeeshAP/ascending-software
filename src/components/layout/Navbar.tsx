"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full glass-panel px-4 py-2.5 shadow-soft sm:px-5">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/assets/logo.jpeg"
            alt="Ascending Software logo"
            width={36}
            height={36}
            className="rounded-lg mix-blend-multiply"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-[0.95rem] font-semibold text-text-primary">
              Ascending Software
            </span>
            <span className="text-[0.6rem] font-medium tracking-[0.18em] text-text-secondary">
              SOFTWARE &amp; DIGITAL SOLUTIONS
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary",
                  active && "text-text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button href="/contact" size="sm">
            Start a Project <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-text-primary lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 flex max-w-6xl flex-col gap-1 rounded-3xl glass-panel p-4 shadow-soft lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-white/50 hover:text-text-primary",
                  pathname === link.href && "bg-white/60 text-text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 px-1">
              <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                Start a Project <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
