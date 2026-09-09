import type { IconComponent } from "@/types/icon";
import { AnimatedBox } from "@/components/ui/animated-icons/AnimatedBox";
import { AnimatedCloud } from "@/components/ui/animated-icons/AnimatedCloud";
import { AnimatedBrainCircuit } from "@/components/ui/animated-icons/AnimatedBrainCircuit";
import { AnimatedDatabase } from "@/components/ui/animated-icons/AnimatedDatabase";
import { AnimatedBraces } from "@/components/ui/animated-icons/AnimatedBraces";
import { AnimatedMonitorSmartphone } from "@/components/ui/animated-icons/AnimatedMonitorSmartphone";
import { AnimatedShieldCheck } from "@/components/ui/animated-icons/AnimatedShieldCheck";
import { AnimatedLayers } from "@/components/ui/animated-icons/AnimatedLayers";

export type Solution = {
  slug: string;
  name: string;
  icon: IconComponent;
  summary: string;
  description: string;
  bullets: string[];
};

export const solutions: Solution[] = [
  {
    slug: "microservices-event-driven",
    name: "Microservices & Event-Driven Systems",
    icon: AnimatedBox,
    summary: "Distributed architectures built to move data and events in real time.",
    description:
      "Architecture that decouples your systems so teams can ship independently, and your platform keeps running under real load.",
    bullets: [
      "Scalable architecture",
      "Real-time data processing",
      "Message brokers (Kafka, RabbitMQ)",
      "Distributed systems",
    ],
  },
  {
    slug: "cloud-enablement-devops",
    name: "Cloud Enablement & DevOps",
    icon: AnimatedCloud,
    summary: "Cloud-native foundations with automated delivery from commit to production.",
    description:
      "We move you to the cloud deliberately — with the pipelines and infrastructure code that make deployment routine, not risky.",
    bullets: [
      "Cloud strategy & migration",
      "Containerization (Docker, K8s)",
      "Infrastructure as Code (IaC)",
      "CI/CD pipelines",
    ],
  },
  {
    slug: "ai-intelligent-automation",
    name: "AI & Intelligent Automation",
    icon: AnimatedBrainCircuit,
    summary: "Generative AI and automation that remove manual work from your operations.",
    description:
      "Generative AI and automation applied where it actually removes manual work — not bolted on for the sake of it.",
    bullets: [
      "Generative AI solutions",
      "Process automation",
      "Predictive analytics",
      "Intelligent document processing",
    ],
  },
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    icon: AnimatedDatabase,
    summary: "Turning raw data into governed, real-time, decision-ready insight.",
    description:
      "From pipelines to dashboards — we turn scattered data into decisions your team can actually act on in real time.",
    bullets: [
      "Data engineering",
      "Real-time analytics",
      "Data lake & warehouse",
      "Business intelligence",
      "Data visualization",
    ],
  },
  {
    slug: "api-management-integration",
    name: "API Management & Integration",
    icon: AnimatedBraces,
    summary: "Connective tissue between your systems, partners, and platforms.",
    description:
      "Clean, documented APIs that connect your systems to each other and to the third parties your business depends on.",
    bullets: [
      "REST & GraphQL APIs",
      "System integration",
      "Third-party connectors",
      "Event-based integration",
    ],
  },
  {
    slug: "digital-experience-platforms",
    name: "Digital Experience & Platforms",
    icon: AnimatedMonitorSmartphone,
    summary: "Web, mobile, and SaaS products designed around real user needs.",
    description:
      "Web and mobile products designed around your users first, built on platforms that can grow into full enterprise systems.",
    bullets: [
      "Web & mobile applications",
      "SaaS product development",
      "User-centric design",
      "Custom enterprise platforms",
    ],
  },
  {
    slug: "security-compliance",
    name: "Security & Compliance",
    icon: AnimatedShieldCheck,
    summary: "Secure by design, compliant by default, resilient under pressure.",
    description:
      "Security designed in from the architecture up — identity, data protection and the compliance posture regulated industries need.",
    bullets: [
      "Secure architecture",
      "Identity & access management",
      "Data protection",
      "Compliance (GDPR, HIPAA, etc.)",
    ],
  },
  {
    slug: "legacy-modernization",
    name: "Legacy Modernization",
    icon: AnimatedLayers,
    summary: "Modernizing what already works so it keeps working for years to come.",
    description:
      "We untangle aging systems and move them onto cloud-native foundations — without breaking what already works.",
    bullets: [
      "Modernize existing systems",
      "Migrate to cloud-native",
      "Improve performance",
      "Extend system lifecycle",
    ],
  },
];
