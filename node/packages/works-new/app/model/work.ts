import * as z from "zod";

import { categorySchema } from "./category";

export const workSchema = z.object({
  slug: z.string().min(1),
  category: categorySchema,
  title: z.string().min(1),
  description: z.string(),
  body: z.string(),
  thumbnailUrl: z.string(),
  publishedAt: z.string().min(1),
  updatedAt: z.string().min(1),
});

export type Work = z.infer<typeof workSchema>;

export type SummarizedWork = Omit<Work, "body">;

export const INITIAL_WORK: Work = {
  slug: "",
  category: "philosophy",
  title: "",
  description: "",
  body: "",
  thumbnailUrl: "",
  publishedAt: "",
  updatedAt: "",
} as const;
