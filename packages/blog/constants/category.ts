export const CATEGORY = [
  "philosophy",
  "development",
  "music",
  "photograph",
] as const;
export type Category = (typeof CATEGORY)[number];
