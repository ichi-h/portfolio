import { style } from "@vanilla-extract/css";
import { COLOR, COLOR_OPACITY } from "portfolio-styles";
import { applyMedia, flattenStyle } from "portfolio-styles";
import {
  top,
  left,
  translate,
  border,
  bg,
  borderRadius,
  p,
  m,
  w,
} from "portfolio-styles";

export const dialog = style([
  top["1/2"],
  left["1/2"],
  translate["-1/2"],
  border[0],
  bg["mono.50"],
  borderRadius[2],
  w[160],
  p[0],
  m[0],
  applyMedia({ max: "768" }, flattenStyle([w["1/1"]])),
  {
    selectors: {
      "&::backdrop": flattenStyle([
        {
          cursor: "pointer",
          background: COLOR["mono.900"] + COLOR_OPACITY[60],
        },
      ]),
    },
  },
]);

export const dialogBody = style([p[6]]);
