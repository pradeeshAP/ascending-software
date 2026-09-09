"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useRef, type ReactNode } from "react";

const buttonStyles = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "olive-gradient text-text-inverse shadow-card",
        secondary: "glass-panel text-text-primary hover:bg-white/70",
        ghost: "text-text-primary hover:text-olive",
        dark: "bg-contrast-bg text-text-inverse hover:bg-olive-950",
      },
      size: {
        md: "px-6 py-3.5 text-sm",
        lg: "px-8 py-4 text-base",
        sm: "px-5 py-2.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> & {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
} & Omit<HTMLMotionProps<"button">, "children" | "onClick">;

export function Button({ href, children, className, variant, size, onClick, ...props }: ButtonProps) {
  const classes = cn(buttonStyles({ variant, size }), className);
  const magneticRef = useRef<HTMLDivElement & HTMLButtonElement>(null);
  const magnetic = useMagnetic(magneticRef);

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (href) {
    return (
      <motion.div
        ref={magneticRef}
        {...motionProps}
        style={{ x: magnetic.x, y: magnetic.y }}
        onMouseMove={magnetic.handleMouseMove}
        onMouseLeave={magnetic.handleMouseLeave}
        className="inline-block"
      >
        <Link href={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      ref={magneticRef}
      {...motionProps}
      style={{ x: magnetic.x, y: magnetic.y }}
      onMouseMove={magnetic.handleMouseMove}
      onMouseLeave={magnetic.handleMouseLeave}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
