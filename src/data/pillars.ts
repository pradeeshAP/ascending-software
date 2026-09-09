import type { IconComponent } from "@/types/icon";
import { AnimatedTarget } from "@/components/ui/animated-icons/AnimatedTarget";
import { AnimatedEye } from "@/components/ui/animated-icons/AnimatedEye";
import { AnimatedWorkflow } from "@/components/ui/animated-icons/AnimatedWorkflow";
import { AnimatedUsersRound } from "@/components/ui/animated-icons/AnimatedUsersRound";

export type Pillar = {
  title: string;
  description: string;
  icon: IconComponent;
};

export const pillars: Pillar[] = [
  {
    title: "Our Mission",
    description:
      "Engineer reliable, intelligent software that removes friction from how businesses operate — and helps them scale with confidence.",
    icon: AnimatedTarget,
  },
  {
    title: "Our Vision",
    description:
      "To be the long-term technology partner behind the systems that quietly keep ambitious businesses running.",
    icon: AnimatedEye,
  },
  {
    title: "How We Work",
    description:
      "Agile, transparent delivery with direct access to the engineers building your system — no black boxes, no hand-offs.",
    icon: AnimatedWorkflow,
  },
  {
    title: "Who We Serve",
    description:
      "From healthcare and fintech to manufacturing and NGOs — teams that need software built around how they actually operate.",
    icon: AnimatedUsersRound,
  },
];
