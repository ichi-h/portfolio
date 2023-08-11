export const PRIMARY_TAGS = [
  "Development",
  "Music",
  "Photograph",
  "Philosophy",
] as const;

export type PrimaryTag = (typeof PRIMARY_TAGS)[number];
