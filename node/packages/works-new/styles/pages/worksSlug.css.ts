import { style } from "@vanilla-extract/css";
import {
  flex,
  flexDirection,
  flexJustify,
  flexWrap,
  gap,
} from "portfolio-styles";

export const layout = style([flex, flexDirection["column"], gap[2]]);

export const heading = style([flex, flexJustify["center"]]);

export const matter = style([
  flex,
  flexJustify["end"],
  flexWrap["wrap"],
  gap[2],
]);

export const date = style([flex, gap[1]]);
