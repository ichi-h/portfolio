import { PX } from "@/constants";
import { styleMapFromData } from "@/libs/vanillaExtract";

export const blur = styleMapFromData(PX, (value) => ({
  filter: `blur(${value})`,
  WebkitFilter: `blur(${value})`,
  webkitFilter: `blur(${value})`,
  msFilter: `blur(${value})`,
}));
