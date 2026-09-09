import type { IconComponent } from "@/types/icon";
import { AnimatedMail } from "@/components/ui/animated-icons/AnimatedMail";
import { AnimatedPhone } from "@/components/ui/animated-icons/AnimatedPhone";
import { AnimatedMapPin } from "@/components/ui/animated-icons/AnimatedMapPin";
import { AnimatedClock } from "@/components/ui/animated-icons/AnimatedClock";

export type ContactDetail = {
  icon: IconComponent;
  label: string;
  lines: string[];
  href?: string;
};

export const contactDetails: ContactDetail[] = [
  {
    icon: AnimatedMail,
    label: "Email Us",
    lines: ["info@ascendingsoftware.com"],
    href: "mailto:info@ascendingsoftware.com",
  },
  {
    icon: AnimatedPhone,
    label: "Call Us",
    lines: ["+91 88838 04379"],
    href: "tel:+918883804379",
  },
  {
    icon: AnimatedMapPin,
    label: "Visit Us",
    lines: ["D20 A, 'C' Colony, Perumalpuram,", "Tirunelveli — 627007, Tamil Nadu, India"],
  },
  {
    icon: AnimatedClock,
    label: "Business Hours",
    lines: ["Mon – Sat · 9:00 AM – 6:30 PM IST"],
  },
];

export const projectTypes = [
  "Website / Digital Experience",
  "Web or Mobile Application",
  "Cloud Enablement & DevOps",
  "AI & Intelligent Automation",
  "Data & Analytics",
  "Legacy Modernization",
  "Something else",
];
