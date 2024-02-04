import { style, styleVariants } from "@vanilla-extract/css";

import { flattenStyle } from "../libs/vanillaExtract";
import {
  fontColor,
  border,
  borderStyle,
  borderColor,
  py,
  fontSize,
  px,
  borderRadius,
  bg,
} from "../styles";

export const button = style([
  {
    background: "none",
    cursor: "pointer",
    ":hover": flattenStyle([bg["mono.100"]]),
    ":active": flattenStyle([bg["mono.200"]]),
  },
  fontColor["mono.900"],
  border["1"],
  borderStyle["solid"],
  borderColor["mono.900"],
  py["1"],
]);

export const buttonSize = styleVariants({
  xs: [fontSize[3], px[2]],
  sm: [fontSize[4], px[2]],
  md: [fontSize[5], px[3]],
  lg: [fontSize[6], px[4]],
  xl: [fontSize[7], px[5]],
});

export const buttonRound = styleVariants({
  default: [borderRadius[2]],
  rounded: [borderRadius["full"]],
});
