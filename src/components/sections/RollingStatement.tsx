import RollingText from "@/components/ui/rolling-text";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function RollingStatement({
  eyebrow,
  word,
  description,
  textColor,
}: {
  eyebrow: string;
  word: string;
  description?: string;
  textColor?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center sm:px-8 sm:py-20">
      <RevealOnScroll className="flex flex-col items-center gap-6">
        <span className="eyebrow">{eyebrow}</span>
        <RollingText text={word} fullScreen={false} minCycles={2} cycleVariance={2} duration={1.8} durationVariance={0.8} textColor={textColor} />
        {description && (
          <p className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {description}
          </p>
        )}
      </RevealOnScroll>
    </section>
  );
}
