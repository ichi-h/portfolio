import { RecordValues } from "@/types/record-values";
import { THEME } from "@/ui/base";

export type BreakPoint = RecordValues<typeof THEME.breakPoint>;
export type Color = RecordValues<typeof THEME.color>;
export type Size = RecordValues<typeof THEME.size>;
export type SizeKey = keyof typeof THEME.size;
