import { style } from "@vanilla-extract/css";

import { BREAK_POINT, COLOR, COLOR_OPACITY } from "@/constants";
import { flattenStyle } from "@/libs/vanillaExtract";
import * as s from "@/styles";
import * as srm from "@/styles/ruleMap";

export const dialog = style([
  s.top["1/2"],
  s.left["1/2"],
  s.translate["-1/2"],
  s.border[0],
  s.bg["mono.50"],
  s.borderRadius[2],
  s.w[160],
  s.p[0],
  s.m[0],
  {
    "@media": {
      [`screen and (max-width: ${BREAK_POINT.md})`]: flattenStyle([
        srm.wMap["2/3"],
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

export const dialogBody = style([s.p[6]]);
