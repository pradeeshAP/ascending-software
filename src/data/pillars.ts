import { Target, Eye, Workflow, Users2, type LucideIcon } from "lucide-react";

export type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const pillars: Pillar[] = [
  {
    title: "Our Mission",
    description:
      "Engineer reliable, intelligent software that removes friction from how businesses operate — and helps them scale with confidence.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To be the long-term technology partner behind the systems that quietly keep ambitious businesses running.",
    icon: Eye,
  },
  {
    title: "How We Work",
    description:
      "Agile, transparent delivery with direct access to the engineers building your system — no black boxes, no hand-offs.",
    icon: Workflow,
  },
  {
    title: "Who We Serve",
    description:
      "From healthcare and fintech to manufacturing and NGOs — teams that need software built around how they actually operate.",
    icon: Users2,
  },
];
