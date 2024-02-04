import { styleMapFromData } from "../libs/vanillaExtract";

const overflowData = {
  visible: "visible",
  hidden: "hidden",
  scroll: "scroll",
  auto: "auto",
} as const;

export const overflow = styleMapFromData(overflowData, (value) => ({
  overflow: value,
}));

export const overflowX = styleMapFromData(overflowData, (value) => ({
  overflowX: value,
}));

export const overflowY = styleMapFromData(overflowData, (value) => ({
  overflowY: value,
}));
