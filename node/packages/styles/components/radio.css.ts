import { style } from "@vanilla-extract/css";

import { flattenStyle } from "../libs/vanillaExtract";
import {
  position,
  fontSize,
  pl,
  top,
  left,
  translateY,
  w,
  h,
  borderRadius,
  p,
  m,
  border,
  borderStyle,
  borderColor,
  translate,
  bg,
} from "../styles";

export const radioLabel = style([
  position["relative"],
  fontSize[4],
  pl[5],
  {
    cursor: "pointer",
  },
]);

const radioMarkerShape = style([
  position["absolute"],
  top["1/2"],
  left[0],
  translateY["-1/2"],
  w[3],
  h[3],
  borderRadius["full"],
]);

export const radio = style([
  radioMarkerShape,
  p[0],
  m[0],
  {
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
  },
]);

export const radioMarker = style([
  radioMarkerShape,
  border[1],
  borderStyle["solid"],
  borderColor["mono.900"],
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
        position["absolute"],
        top["1/2"],
        left["1/2"],
        translate["-1/2"],
        bg["mono.900"],
        w[2],
        h[2],
        borderRadius["full"],
      ]),
    },
  },
]);
