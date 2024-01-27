import { style } from "@vanilla-extract/css";

import { flattenStyle, styleRule } from "@/libs/vanillaExtract";
import { textDecoration, fontColor } from "@/styles";

export const linkHoverRule = flattenStyle([textDecoration["underline"]]);

export const linkRule = styleRule(
  flattenStyle([
    textDecoration["none"],
    fontColor["blue.500"],
    {
      fontSize: "initial",
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
