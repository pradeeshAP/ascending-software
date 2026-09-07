import { stats } from "@/data/stats";
import { CountUp } from "@/components/ui/CountUp";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function StatsBar() {
  return (
    <RevealOnScroll className="mx-auto max-w-6xl px-6 sm:px-8">
      <div className="grid grid-cols-2 gap-6 rounded-[2rem] glass-panel px-8 py-10 shadow-soft sm:grid-cols-4 sm:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <span className="font-display text-4xl font-semibold text-olive sm:text-5xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-xs font-medium leading-snug text-text-secondary sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </RevealOnScroll>
  );
}
