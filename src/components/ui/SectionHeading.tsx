import { cn } from "@/lib/utils";
import { RevealOnScroll } from "./RevealOnScroll";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <RevealOnScroll
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center mx-auto",
        className
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={cn(
          "font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance text-text-primary max-w-2xl",
          align === "center" && "mx-auto",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-text-secondary text-lg max-w-xl leading-relaxed",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
