import { style, styleVariants } from "@vanilla-extract/css";

import { flattenStyle, styleRule } from "../libs/vanillaExtract";
import { textDecoration, fontColor as fontColorRule } from "../styles";

export const linkHoverRule = flattenStyle([textDecoration["underline"]]);

export const fontColor = styleVariants(fontColorRule);

export const defaultFontColor = "blue.500";

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
