import { RATIO, REM } from "@/constants";
import { styleVariantsFromData } from "@/libs/vanillaExtract";

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

export const [w, wMap] = styleVariantsFromData(sizing, (value) => ({
  width: value,
}));

export const [h, hMap] = styleVariantsFromData(sizing, (value) => ({
  height: value,
}));

export const [minW, minWMap] = styleVariantsFromData(REM, (value) => ({
  minWidth: value,
}));

export const [minH, minHMap] = styleVariantsFromData(REM, (value) => ({
  minHeight: value,
}));

export const [maxW, maxWMap] = styleVariantsFromData(REM, (value) => ({
  maxWidth: value,
}));

export const [maxH, maxHMap] = styleVariantsFromData(REM, (value) => ({
  maxHeight: value,
}));
