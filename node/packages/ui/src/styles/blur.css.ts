import { styleVariants } from "@vanilla-extract/css";

import { PX } from "@/constants";

export const blur = styleVariants(PX, (value) => ({
  filter: `blur(${value})`,
  WebkitFilter: `blur(${value})`,
  webkitFilter: `blur(${value})`,
  msFilter: `blur(${value})`,
}));
