export const TAGS = {
  TAG1: "tag1",
  TAG2: "tag2",
  TAG3: "tag3",
} as const;

export type Tag = typeof TAGS[keyof typeof TAGS];
