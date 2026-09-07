"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { useLoading } from "./LoadingContext";

export function LoadingScreen() {
  const { isLoading, finish } = useLoading();
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    if (!isLoading || ran.current) return;
    ran.current = true;

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        gsap.delayedCall(0.15, finish);
      },
    });

    if (logoRef.current) {
      tl.fromTo(
        logoRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.55 }
      );
    }
    if (progressRef.current) {
      tl.fromTo(
        progressRef.current,
        { width: "0%" },
        { width: "100%", duration: 0.85, ease: "power1.inOut" },
        "-=0.2"
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary"
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <div ref={logoRef} className="relative flex items-center justify-center opacity-0">
              <div className="absolute inset-0 -z-10 rounded-full bg-olive-300/50 animate-glow-pulse" />
              <Image
                src="/assets/logo.jpeg"
                alt="Ascending Software"
                width={88}
                height={88}
                className="rounded-2xl mix-blend-multiply"
                priority
              />
            </div>
            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-olive-100">
              <div ref={progressRef} className="h-full w-0 olive-gradient" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
