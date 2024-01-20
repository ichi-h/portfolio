import { styleVariants } from "@vanilla-extract/css";

import { RATIO, REM } from "@/constants";
import { createStyleMap } from "@/libs/vanillaExtract";

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

export const wStyleMap = createStyleMap(sizing, (value) => ({
  width: value,
}));
export const w = styleVariants(wStyleMap);

export const hStyleMap = createStyleMap(sizing, (value) => ({
  height: value,
}));
export const h = styleVariants(hStyleMap);

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
