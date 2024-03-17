import * as z from "zod";

export const categorySchema = z.enum([
  "philosophy",
  "development",
  "music",
  "photograph",
]);

export type Category = z.infer<typeof categorySchema>;

export const CATEGORY: Record<Category, Category> = {
  philosophy: "philosophy",
  development: "development",
  music: "music",
  photograph: "photograph",
} as const;

export const createCategory = (input: unknown): Category | null => {
  const res = categorySchema.safeParse(String(input));
  if (res.success) {
    return res.data;
  }
  return null;
};
