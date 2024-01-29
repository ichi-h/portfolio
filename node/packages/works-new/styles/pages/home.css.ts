import { style } from "@vanilla-extract/css";
import {
  w,
  h,
  position,
  flex,
  flexJustify,
  flexAlign,
  flexDirection,
  gap,
  bottom,
  animateZoomOnHover,
  dropShadow,
  applyMedia,
  flattenStyle,
  fontSize,
} from "portfolio-ui";

export const outer = style([
  position["relative"],
  flex,
  flexJustify["center"],
  flexAlign["center"],
  flexDirection["column"],
  gap[2],
  w["1/1"],
  h["vh"],
]);

export const avatar = style([
  animateZoomOnHover["md"],
  dropShadow["md"],
  applyMedia({ max: "768" }, flattenStyle([w[32], h[32]])),
]);

export const headline = style(
  applyMedia({ max: "768" }, flattenStyle([fontSize[12]])),
);

export const links = style([
  flex,
  gap[4],
  applyMedia({ max: "768" }, flattenStyle([flexDirection["column"], gap[2]])),
]);

export const link = style(
  applyMedia({ max: "768" }, flattenStyle([fontSize[6]])),
);

export const footer = style([position["absolute"], bottom[0], w["1/1"]]);
