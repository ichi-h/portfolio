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
