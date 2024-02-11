import { style } from "@vanilla-extract/css";
import {
  animateZoomOnHover,
  applyMedia,
  bg,
  borderRadius,
  dropShadow,
  flattenStyle,
  flex,
  flexAlign,
  flexDirection,
  flexJustify,
  flexWrap,
  fontSize,
  gap,
  grid,
  gridCols,
  gridRows,
  h,
  lineHeight,
  p,
  textDecoration,
  w,
} from "portfolio-styles";

export const layout = style([flex, flexDirection["column"], gap[4]]);

export const radioGroup = style([
  flex,
  flexJustify["center"],
  flexWrap["wrap"],
  gap[4],
  applyMedia({ max: "480" }, flattenStyle([gap[2]])),
]);

export const radioLabel = style([
  fontSize[5],
  lineHeight[5],
  applyMedia({ max: "768" }, flattenStyle([fontSize[4], lineHeight[4]])),
]);

export const hr = style([
  {
    height: "1px",
  },
  w["1/1"],
  bg["mono.300"],
]);

export const cardGrid = style([
  grid,
  gridCols[3],
  gridRows[1],
  gap[6],
  applyMedia({ max: "1024" }, flattenStyle([gridCols[2]])),
  applyMedia({ max: "480" }, flattenStyle([gridCols[1]])),
]);

export const card = style([borderRadius[4], dropShadow["md"], h["1/1"]]);

export const cardLayout = style([flex, flexDirection["column"], gap[3], p[5]]);

export const cardLink = style([animateZoomOnHover["md"]]);

export const cardThumbnail = style([
  w["1/1"],
  h["auto"],
  {
    objectFit: "cover",
  },
]);

export const cardTitle = style([
  fontSize[5],
  lineHeight[5],
  textDecoration["none"],
  applyMedia({ max: "768" }, flattenStyle([fontSize[4], lineHeight[4]])),
]);

export const cardPublishedAt = style([flex, flexAlign["center"], gap[1]]);
