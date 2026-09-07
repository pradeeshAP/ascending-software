export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 12, suffix: "+", label: "Years of Engineering Craft" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 9, suffix: "", label: "Industries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];
