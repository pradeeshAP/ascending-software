import {
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingCart,
  Factory,
  Truck,
  Building2,
  HandHeart,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  name: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Finance & FinTech", icon: Landmark },
  { name: "Education & EdTech", icon: GraduationCap },
  { name: "Retail & E-commerce", icon: ShoppingCart },
  { name: "Manufacturing", icon: Factory },
  { name: "Logistics & Supply Chain", icon: Truck },
  { name: "Real Estate", icon: Building2 },
  { name: "Non-profit / NGO", icon: HandHeart },
  { name: "Enterprise Solutions", icon: Briefcase },
];
