import { style } from "@vanilla-extract/css";

import { flattenStyle, styleWitRule } from "@/libs/vanillaExtract";
import * as srm from "@/styles/ruleMap";

export const linkHoverRule = flattenStyle([srm.textDecorationMap["underline"]]);

export const [link, linkRule] = styleWitRule(
  flattenStyle([
    srm.textDecorationMap["none"],
    srm.fontColorMap["blue.500"],
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
