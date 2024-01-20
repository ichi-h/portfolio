import { styleVariants } from "@vanilla-extract/css";

import { COLOR, COLOR_OPACITY, PX } from "@/constants";

export const dropShadow = styleVariants({
  md: {
    boxShadow: `0 0 ${PX[8]} ${COLOR["mono.900"] + COLOR_OPACITY["20"]}`,
  },
});
