export const SECONDARY_TAGS = [
  "TypeScript",
  "DTM",
  "キルケゴール",
  "ポストモダン",
] as const;

export type SecondaryTag = (typeof SECONDARY_TAGS)[number];
