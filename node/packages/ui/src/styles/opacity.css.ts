import { styleVariantsFromMap } from "@/libs/vanillaExtract";

export const [opacity, opacityMap] = styleVariantsFromMap({
  0: {
    opacity: 0,
  },
  20: {
    opacity: 0.2,
  },
  40: {
    opacity: 0.4,
  },
  60: {
    opacity: 0.6,
  },
  80: {
    opacity: 0.8,
  },
  100: {
    opacity: 1,
  },
});
