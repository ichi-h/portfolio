import { style } from "@vanilla-extract/css";

import { BREAK_POINT, COLOR, COLOR_OPACITY } from "@/constants";
import { flattenStyle } from "@/libs/vanillaExtract";
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
} from "@/styles";
import { wMap } from "@/styles/ruleMap";

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
  {
    "@media": {
      [`screen and (max-width: ${BREAK_POINT.md})`]: flattenStyle([
        wMap["2/3"],
      ]),
    },
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
