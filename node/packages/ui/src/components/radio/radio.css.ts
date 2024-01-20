import { style } from "@vanilla-extract/css";

import * as s from "@/styles";

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
      [`${radio}:checked + &::before`]: {
        content: "",
        display: "block",
        ...s.positionStyleMap["absolute"],
        ...s.topStyleMap["1/2"],
        ...s.leftStyleMap["1/2"],
        ...s.translateStyleMap["-1/2"],
        ...s.bgStyleMap["mono.900"],
        ...s.wStyleMap[2],
        ...s.hStyleMap[2],
        ...s.borderRadiusStyleMap["full"],
      },
    },
  },
]);
