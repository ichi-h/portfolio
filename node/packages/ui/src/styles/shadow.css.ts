import { COLOR, COLOR_OPACITY, PX } from "@/constants";
import { styleVariantsFromMap } from "@/libs/vanillaExtract";

export const [dropShadow, dropShadowMap] = styleVariantsFromMap({
  md: {
    boxShadow: `0 0 ${PX[8]} ${COLOR["mono.900"] + COLOR_OPACITY["20"]}`,
  },
});
