import { style, styleVariants } from "@vanilla-extract/css";
import { flattenStyle, styleRule } from "portfolio-styles";
import { textDecoration, fontColor as fontColorRule } from "portfolio-styles";

export const linkHoverRule = flattenStyle([textDecoration["underline"]]);

export const fontColor = styleVariants(fontColorRule);

export const linkRule = styleRule(
  flattenStyle([
    textDecoration["none"],
    {
      cursor: "pointer",
    },
  ]),
);

export const link = style(linkRule);

export const linkHover = style({
  selectors: {
    "&:hover": linkHoverRule,
  },
});
