import { style } from "@vanilla-extract/css";

import { flattenStyle } from "@/libs/vanillaExtract";
import * as s from "@/styles";
import * as srm from "@/styles/ruleMap";

export const radioLabel = style([
  s.position["relative"],
  s.fontSize[4],
  s.pl[5],
  {
    cursor: "pointer",
  },
]);

const radioMarkerShape = style([
  s.position["absolute"],
  s.top["1/2"],
  s.left[0],
  s.translateY["-1/2"],
  s.w[3],
  s.h[3],
  s.borderRadius["full"],
]);

export const radio = style([
  radioMarkerShape,
  s.p[0],
  s.m[0],
  {
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
  },
]);

export const radioMarker = style([
  radioMarkerShape,
  s.border[1],
  s.borderStyle["solid"],
  s.borderColor["mono.900"],
  {
    boxSizing: "border-box",
  },
  {
    selectors: {
      [`${radio}:checked + &::before`]: flattenStyle([
        {
          content: "",
          display: "block",
        },
        srm.positionMap["absolute"],
        srm.topMap["1/2"],
        srm.leftMap["1/2"],
        srm.translateMap["-1/2"],
        srm.bgMap["mono.900"],
        srm.wMap[2],
        srm.hMap[2],
        srm.borderRadiusMap["full"],
      ]),
    },
  },
]);
