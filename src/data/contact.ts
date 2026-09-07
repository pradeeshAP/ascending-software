import { Mail, Phone, MapPin, Clock, type LucideIcon } from "lucide-react";

export type ContactDetail = {
  icon: LucideIcon;
  label: string;
  lines: string[];
  href?: string;
};

export const contactDetails: ContactDetail[] = [
  {
    icon: Mail,
    label: "Email Us",
    lines: ["info@ascendingsoftware.com"],
    href: "mailto:info@ascendingsoftware.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+91 88838 04379"],
    href: "tel:+918883804379",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    lines: ["D20 A, 'C' Colony, Perumalpuram,", "Tirunelveli — 627007, Tamil Nadu, India"],
  },
  {
    icon: Clock,
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
