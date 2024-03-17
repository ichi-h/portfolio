import * as z from "zod";

export const limitNumberSchema = z.number().int().gte(1).lte(50).default(18);

export type LimitNumber = z.infer<typeof limitNumberSchema>;

export const createLimitNumber = (input: unknown = 18): LimitNumber => {
  const res = limitNumberSchema.safeParse(Number(input));
  if (res.success) {
    return res.data;
  }
  return 18;
};
