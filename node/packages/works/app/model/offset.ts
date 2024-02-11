import * as z from "zod";

export const offsetSchema = z
  .number()
  .int()
  .gte(0, "offset must be positive")
  .default(0);

export type Offset = z.infer<typeof offsetSchema>;

export const createOffset = (offset: number): Offset =>
  offsetSchema.parse(offset);
