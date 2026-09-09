import type { IconComponent } from "@/types/icon";
import { AnimatedHeartPulse } from "@/components/ui/animated-icons/AnimatedHeartPulse";
import { AnimatedLandmark } from "@/components/ui/animated-icons/AnimatedLandmark";
import { AnimatedGraduationCap } from "@/components/ui/animated-icons/AnimatedGraduationCap";
import { AnimatedShoppingCart } from "@/components/ui/animated-icons/AnimatedShoppingCart";
import { AnimatedFactory } from "@/components/ui/animated-icons/AnimatedFactory";
import { AnimatedTruck } from "@/components/ui/animated-icons/AnimatedTruck";
import { AnimatedBuilding2 } from "@/components/ui/animated-icons/AnimatedBuilding2";
import { AnimatedHandHeart } from "@/components/ui/animated-icons/AnimatedHandHeart";
import { AnimatedBriefcase } from "@/components/ui/animated-icons/AnimatedBriefcase";

export type Industry = {
  name: string;
  icon: IconComponent;
};

export const industries: Industry[] = [
  { name: "Healthcare", icon: AnimatedHeartPulse },
  { name: "Finance & FinTech", icon: AnimatedLandmark },
  { name: "Education & EdTech", icon: AnimatedGraduationCap },
  { name: "Retail & E-commerce", icon: AnimatedShoppingCart },
  { name: "Manufacturing", icon: AnimatedFactory },
  { name: "Logistics & Supply Chain", icon: AnimatedTruck },
  { name: "Real Estate", icon: AnimatedBuilding2 },
  { name: "Non-profit / NGO", icon: AnimatedHandHeart },
  { name: "Enterprise Solutions", icon: AnimatedBriefcase },
];
