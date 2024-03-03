import { style } from "@vanilla-extract/css";
import {
  w,
  flex,
  gap,
  applyMedia,
  flattenStyle,
  fontSize,
  flexJustify,
} from "portfolio-styles";

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
