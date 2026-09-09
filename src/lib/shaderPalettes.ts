export type ShaderPalette = {
  proportion: number;
  softness: number;
  distortion: number;
  swirl: number;
  swirlIterations: number;
  shape: "checks" | "stripes" | "edge";
  shapeScale: number;
  colors: string[];
};

// Warp shader palettes kept within the brand's olive family — each entry is a
// slightly different hue/lightness so a grid of cards doesn't read as flat
// repetition, while still feeling like one cohesive, on-brand surface.
export const oliveShaderPalettes: ShaderPalette[] = [
  {
    proportion: 0.3,
    softness: 0.8,
    distortion: 0.15,
    swirl: 0.6,
    swirlIterations: 8,
    shape: "checks",
    shapeScale: 0.08,
    colors: ["hsl(85, 45%, 18%)", "hsl(85, 55%, 42%)", "hsl(90, 40%, 28%)", "hsl(80, 60%, 52%)"],
  },
  {
    proportion: 0.4,
    softness: 1.2,
    distortion: 0.2,
    swirl: 0.9,
    swirlIterations: 12,
    shape: "stripes",
    shapeScale: 0.12,
    colors: ["hsl(95, 40%, 16%)", "hsl(95, 50%, 40%)", "hsl(100, 35%, 26%)", "hsl(90, 55%, 48%)"],
  },
  {
    proportion: 0.35,
    softness: 0.9,
    distortion: 0.18,
    swirl: 0.7,
    swirlIterations: 10,
    shape: "checks",
    shapeScale: 0.1,
    colors: ["hsl(70, 45%, 18%)", "hsl(65, 55%, 42%)", "hsl(75, 40%, 28%)", "hsl(60, 60%, 52%)"],
  },
  {
    proportion: 0.45,
    softness: 1.1,
    distortion: 0.22,
    swirl: 0.8,
    swirlIterations: 15,
    shape: "stripes",
    shapeScale: 0.09,
    colors: ["hsl(100, 40%, 14%)", "hsl(105, 50%, 33%)", "hsl(95, 35%, 20%)", "hsl(110, 45%, 43%)"],
  },
  {
    proportion: 0.38,
    softness: 0.95,
    distortion: 0.16,
    swirl: 0.85,
    swirlIterations: 11,
    shape: "checks",
    shapeScale: 0.11,
    colors: ["hsl(85, 30%, 24%)", "hsl(85, 40%, 52%)", "hsl(90, 25%, 33%)", "hsl(80, 45%, 62%)"],
  },
  {
    proportion: 0.42,
    softness: 1.0,
    distortion: 0.19,
    swirl: 0.75,
    swirlIterations: 9,
    shape: "stripes",
    shapeScale: 0.13,
    colors: ["hsl(80, 45%, 14%)", "hsl(80, 55%, 33%)", "hsl(85, 40%, 20%)", "hsl(75, 50%, 43%)"],
  },
  {
    proportion: 0.33,
    softness: 1.05,
    distortion: 0.17,
    swirl: 0.65,
    swirlIterations: 13,
    shape: "edge",
    shapeScale: 0.1,
    colors: ["hsl(78, 42%, 16%)", "hsl(78, 52%, 38%)", "hsl(82, 38%, 24%)", "hsl(74, 58%, 48%)"],
  },
  {
    proportion: 0.37,
    softness: 0.85,
    distortion: 0.21,
    swirl: 0.95,
    swirlIterations: 14,
    shape: "edge",
    shapeScale: 0.12,
    colors: ["hsl(92, 38%, 15%)", "hsl(92, 48%, 36%)", "hsl(96, 33%, 22%)", "hsl(88, 52%, 46%)"],
  },
];

export function getShaderPalette(index: number): ShaderPalette {
  return oliveShaderPalettes[index % oliveShaderPalettes.length];
}
