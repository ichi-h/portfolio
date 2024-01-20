import { styleVariants } from "@vanilla-extract/css";

import { RATIO, REM } from "@/src/constants";

const sizing = {
  ...RATIO,
  ...REM,
  auto: "auto",
  screen: "100vw",
  svw: "100svw",
  lvw: "100lvw",
  dvw: "100dvw",
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
} as const;

export const w = styleVariants(sizing, (value) => ({
  width: value,
}));

export const h = styleVariants(sizing, (value) => ({
  height: value,
}));

export const minW = styleVariants(REM, (value) => ({
  minWidth: value,
}));

export const minH = styleVariants(REM, (value) => ({
  minHeight: value,
}));

export const maxW = styleVariants(REM, (value) => ({
  maxWidth: value,
}));

export const maxH = styleVariants(REM, (value) => ({
  maxHeight: value,
}));
