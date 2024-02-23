import { style } from "@vanilla-extract/css";
import {
  animateZoomOnHover,
  applyMedia,
  dropShadow,
  flattenStyle,
  flex,
  flexAlign,
  flexDirection,
  fontSize,
  gap,
  h,
  w,
} from "portfolio-styles";

export const layout = style([
  flex,
  flexDirection["column"],
  flexAlign["center"],
  gap[4],
]);

export const name = style([
  fontSize["12"],
  applyMedia({ max: "768" }, fontSize["8"]),
]);

export const subtext = style([
  fontSize["6"],
  applyMedia({ max: "768" }, fontSize["4"]),
]);

export const avatar = style([
  dropShadow["md"],
  applyMedia({ max: "768" }, flattenStyle([w[32], h[32]])),
]);

export const snsLinks = style([flex, gap[4]]);

export const snsLink = style([animateZoomOnHover["lg"]]);

export const snsIcon = style([
  h[12],
  w[12],
  applyMedia({ max: "768" }, flattenStyle([h[8], w[8]])),
]);
