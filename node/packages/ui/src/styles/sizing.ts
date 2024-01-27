import { RATIO, REM } from "@/constants";
import { styleMapFromData } from "@/libs/vanillaExtract";

const sizing = {
  ...RATIO,
  ...REM,
  auto: "auto",
  vw: "100vw",
  vh: "100vh",
  svw: "100svw",
  lvw: "100lvw",
  dvw: "100dvw",
  svh: "100svh",
  lvh: "100lvh",
  dvh: "100dvh",
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
} as const;

export const w = styleMapFromData(sizing, (value) => ({
  width: value,
}));

export const h = styleMapFromData(sizing, (value) => ({
  height: value,
}));

export const minW = styleMapFromData(REM, (value) => ({
  minWidth: value,
}));

export const minH = styleMapFromData(REM, (value) => ({
  minHeight: value,
}));

export const maxW = styleMapFromData(REM, (value) => ({
  maxWidth: value,
}));

export const maxH = styleMapFromData(REM, (value) => ({
  maxHeight: value,
}));
