import { style } from "@vanilla-extract/css";
import {
  animateZoomOnHover,
  applyMedia,
  dropShadow,
  flattenStyle,
  flex,
  flexAlign,
  flexDirection,
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

export const avatar = style([
  dropShadow["md"],
  applyMedia({ max: "768" }, flattenStyle([w[32], h[32]])),
]);

export const snsLinks = style([flex, gap[4]]);

export const snsLink = style([animateZoomOnHover["lg"]]);
