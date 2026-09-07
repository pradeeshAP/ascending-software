export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "We map your current systems, constraints and goals before proposing anything.",
  },
  {
    number: "02",
    title: "Design",
    description: "Architecture and UX decisions are made together, so the system is usable and scalable.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Agile sprints with visible progress — you see working software early and often.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "CI/CD pipelines and cloud-native infrastructure make releases routine, not risky.",
  },
  {
    number: "05",
    title: "Support",
    description: "Ongoing monitoring, iteration and a long-term partnership — not a hand-off and goodbye.",
  },
];
