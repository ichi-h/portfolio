import { style } from "@vanilla-extract/css";

import { flattenStyle } from "@/libs/vanillaExtract";
import * as s from "@/styles";
import * as srm from "@/styles/ruleMap";

export const link = style([
  s.textDecoration["none"],
  s.fontColor["blue.500"],
  {
    fontSize: "initial",
    cursor: "pointer",
    selectors: {
      "&:hover": flattenStyle([srm.textDecorationMap["underline"]]),
    },
  },
]);
