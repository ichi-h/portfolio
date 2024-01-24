import { style } from "@vanilla-extract/css";

import { flattenStyle, styleWitRule } from "@/libs/vanillaExtract";
import { textDecorationMap, fontColorMap } from "@/styles/ruleMap";

export const linkHoverRule = flattenStyle([textDecorationMap["underline"]]);

export const [link, linkRule] = styleWitRule(
  flattenStyle([
    textDecorationMap["none"],
    fontColorMap["blue.500"],
    {
      fontSize: "initial",
      cursor: "pointer",
    },
  ]),
);

export const linkHover = style({
  selectors: {
    "&:hover": linkHoverRule,
  },
});
