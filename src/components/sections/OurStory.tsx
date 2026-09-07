import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function OurStory() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 sm:px-8">
      <RevealOnScroll className="flex flex-col gap-5">
        <span className="eyebrow">Our Story</span>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-balance text-text-primary sm:text-4xl">
          Started as a website studio. Grown into a full engineering partner.
        </h2>
        <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
          Ascending Software has been providing complete brand and technology solutions across
          industries since day one. What began with responsive, brand-first websites has grown
          into a full-stack engineering practice — spanning cloud architecture, data platforms,
          and intelligent automation.
        </p>
        <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
          We&apos;re an innovative, enthusiastic team that treats every engagement as a long-term
          partnership, not a one-off project. Whether you&apos;re a startup shipping your first
          product or an enterprise modernizing a decade of legacy systems, we build for what your
          business becomes next — not just what it is today.
        </p>
      </RevealOnScroll>
    </section>
  );
}
