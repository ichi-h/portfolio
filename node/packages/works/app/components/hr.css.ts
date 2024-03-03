import { style } from "@vanilla-extract/css";
import { bg, w } from "portfolio-styles";
import { PX } from "portfolio-styles/constants";

export const hr = style([
  {
    height: PX[1],
  },
  w["1/1"],
  bg["mono.300"],
]);
