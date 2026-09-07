import { contactDetails } from "@/data/contact";
import { RevealGroup, RevealItem } from "@/components/ui/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";

export function ContactInfoGrid() {
  return (
    <RevealGroup className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
      {contactDetails.map((detail) => {
        const Icon = detail.icon;
        const content = (
          <GlassCard className="flex h-full flex-col gap-4 p-6" hover={false}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl olive-gradient text-white">
              <Icon className="h-5 w-5" />
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-display text-base font-semibold text-text-primary">
                {detail.label}
              </span>
              {detail.lines.map((line) => (
                <span key={line} className="text-sm leading-relaxed text-text-secondary">
                  {line}
                </span>
              ))}
            </div>
          </GlassCard>
        );
        return (
          <RevealItem key={detail.label}>
            {detail.href ? (
              <a href={detail.href} className="block transition-opacity hover:opacity-80">
                {content}
              </a>
            ) : (
              content
            )}
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
