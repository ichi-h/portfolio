import { COLOR, COLOR_OPACITY, PX } from "@/constants";
import { styleMap } from "@/libs/vanillaExtract";

export const dropShadow = styleMap({
  md: {
    boxShadow: `0 0 ${PX[8]} ${COLOR["mono.900"] + COLOR_OPACITY["20"]}`,
  },
});
