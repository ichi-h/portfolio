import { style } from "@vanilla-extract/css";
import {
  bg,
  m,
  w,
  minH,
  blur,
  flex,
  flexAlign,
  flexDirection,
  textAlign,
  gap,
  my,
  mx,
  applyMedia,
  flattenStyle,
  fontSize,
  flexJustify,
  borderRadius,
  minW,
  pt,
} from "portfolio-ui";

export const htmlStyle = style([m[0]]);

export const bodyStyle = style([
  bg["mono.900"],
  m[0],
  {
    fontFamily: '"Zen Kaku Gothic New", sans-serif',
  },
]);

export const backgroundParentStyle = style([w["lvw"], minH["lvh"]]);

export const backgroundChildStyle = style([blur[8]]);

export const footerStyle = style([
  flex,
  flexAlign["center"],
  flexDirection["column"],
  gap[1],
  w["1/1"],
  my[4],
  mx[0],
  textAlign["center"],
  applyMedia({ max: "768" }, flattenStyle([fontSize[3]])),
]);

export const navStyle = style([flex, flexJustify["between"], w["1/1"]]);

export const navLinksStyle = style([
  flex,
  gap[6],
  applyMedia({ max: "480" }, flattenStyle([gap[3]])),
]);

export const navLinkStyle = style([
  fontSize[8],
  applyMedia({ max: "480" }, flattenStyle([fontSize[6]])),
  applyMedia({ max: "375" }, flattenStyle([fontSize[5]])),
]);

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
  applyMedia({ max: "768" }, flattenStyle([w["1/1"], mx[6]])),
  applyMedia({ max: "480" }, flattenStyle([gap[4]])),
]);

export const layoutBgStyle = style([borderRadius[4]]);

export const layoutContentStyle = style([m[6]]);
