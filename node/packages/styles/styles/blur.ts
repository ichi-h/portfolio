import { PX } from "../constants/px";
import { styleMapFromData } from "../libs/vanillaExtract";

export const blur = styleMapFromData(PX, (value) => ({
  filter: `blur(${value})`,
  WebkitFilter: `blur(${value})`,
  webkitFilter: `blur(${value})`,
  msFilter: `blur(${value})`,
}));
