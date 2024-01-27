import { style, styleVariants } from "@vanilla-extract/css";

import {
  bg as bgRule,
  opacity as opacityRule,
  bgPosition as bgPositionRule,
  bgSize as bgSizeRule,
  position,
  zIndex,
  w,
  h,
} from "@/styles";

export const backgroundParent = style(position["relative"]);

export const background = style([
  position["absolute"],
  zIndex["-1"],
  w["1/1"],
  h["1/1"],
]);

export const bg = styleVariants(bgRule);

export const opacity = styleVariants(opacityRule);

export const bgPosition = styleVariants(bgPositionRule);

export const bgSize = styleVariants(bgSizeRule);
