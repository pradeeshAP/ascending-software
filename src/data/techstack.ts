export type TechGroup = {
  label: string;
  items: string[];
};

export const techStack: TechGroup[] = [
  {
    label: "Cloud & Infrastructure",
    items: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Kafka", "RabbitMQ"],
  },
  {
    label: "Application & Data",
    items: ["Python", "Java", ".NET", "Node.js", "React", "Angular", "PostgreSQL", "MongoDB", "Redis"],
  },
];

export const techStackTrailingLabel = "and more...";
