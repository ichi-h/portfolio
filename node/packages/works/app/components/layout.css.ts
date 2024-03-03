import { style } from "@vanilla-extract/css";
import {
  m,
  w,
  flex,
  flexDirection,
  gap,
  mx,
  applyMedia,
  flattenStyle,
  flexJustify,
  borderRadius,
  minW,
  pt,
} from "portfolio-styles";

export const layoutParentStyle = style([
  flex,
  flexJustify["center"],
  w["1/1"],
  pt[6],
  applyMedia({ max: "480" }, flattenStyle([pt[4]])),
]);

export const layoutStyle = style([
  flex,
  flexDirection["column"],
  gap[6],
  w["1/2"],
  minW[256],
  applyMedia({ max: "1280" }, flattenStyle([w["3/4"], minW["auto"]])),
  applyMedia({ max: "768" }, flattenStyle([w["1/1"], mx[4]])),
  applyMedia({ max: "480" }, flattenStyle([gap[4]])),
]);

export const layoutBgStyle = style([borderRadius[4]]);

export const layoutContentStyle = style([m[6]]);
