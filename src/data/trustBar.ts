import { Users, Layers3, Zap, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type TrustItem = {
  icon: LucideIcon;
  line1: string;
  line2: string;
};

export const trustItems: TrustItem[] = [
  { icon: Users, line1: "Trusted by", line2: "Innovative Businesses" },
  { icon: Layers3, line1: "Modern", line2: "Technology Stack" },
  { icon: Zap, line1: "Faster", line2: "Time to Value" },
  { icon: ShieldCheck, line1: "Secure & Scalable", line2: "by Design" },
];
