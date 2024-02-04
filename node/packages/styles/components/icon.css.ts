import { styleVariants } from "@vanilla-extract/css";

import { h as hRule, w as wRule } from "../styles";

export const w = styleVariants(wRule);

export const h = styleVariants(hRule);
