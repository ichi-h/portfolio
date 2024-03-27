import { style } from "@vanilla-extract/css";
import {
  w,
  flex,
  flexDirection,
  gap,
  applyMedia,
  flattenStyle,
  flexJustify,
  borderRadius,
  minW,
  pt,
  m,
  RATIO,
  REM,
  h,
} from "portfolio-styles";

export const layoutParentStyle = style([
  flex,
  flexJustify["center"],
  w["1/1"],
  h["svh"],
  {
    overflowY: "scroll",
  },
]);

export const layoutStyle = style([
  flex,
  flexDirection["column"],
  gap[6],
  w["1/2"],
  minW[224],
  pt[6],
  applyMedia(
    { max: "1280" },
    flattenStyle([
      {
        width: `calc(${REM[192]} - ${REM[8]})`,
      },
      minW["auto"],
      pt[4],
    ]),
  ),
  applyMedia(
    { max: "768" },
    flattenStyle([
      {
        width: `calc(${RATIO["1/1"]} - ${REM[8]})`,
      },
    ]),
  ),
  applyMedia({ max: "480" }, flattenStyle([gap[4]])),
]);

export const layoutBgStyle = style([borderRadius[4]]);

export const layoutContentStyle = style([m[8]]);
