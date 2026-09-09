import type { IconComponent } from "@/types/icon";
import { AnimatedUsers } from "@/components/ui/animated-icons/AnimatedUsers";
import { AnimatedLayers } from "@/components/ui/animated-icons/AnimatedLayers";
import { AnimatedZap } from "@/components/ui/animated-icons/AnimatedZap";
import { AnimatedShieldCheck } from "@/components/ui/animated-icons/AnimatedShieldCheck";

export type TrustItem = {
  icon: IconComponent;
  line1: string;
  line2: string;
};

export const trustItems: TrustItem[] = [
  { icon: AnimatedUsers, line1: "Trusted by", line2: "Innovative Businesses" },
  { icon: AnimatedLayers, line1: "Modern", line2: "Technology Stack" },
  { icon: AnimatedZap, line1: "Faster", line2: "Time to Value" },
  { icon: AnimatedShieldCheck, line1: "Secure & Scalable", line2: "by Design" },
];
