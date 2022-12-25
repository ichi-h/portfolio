import { z } from "zod";

import { TAGS } from "../tags";

const uidRegex = /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}$/;
const requiredDateRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
const optionalDateRegex = /(^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$|^$)/;

export const articleSchema = z.object({
  uid: z.string().regex(uidRegex),
  slug: z.string(),
  title: z.string(),
  content: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  createdAt: z.string().regex(requiredDateRegex),
  publishedAt: z.string().regex(requiredDateRegex),
  revisedAt: z.string().regex(requiredDateRegex),
  unpublishedAt: z.string().regex(optionalDateRegex),
  tags: z.array(z.enum([TAGS.TAG1, TAGS.TAG2, TAGS.TAG3])),
  isDraft: z.boolean(),
});

export type Article = z.infer<typeof articleSchema>;
