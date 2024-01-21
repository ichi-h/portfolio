import { PX } from "@/constants";
import { styleVariantsFromData } from "@/libs/vanillaExtract";

export const [blur, blurMap] = styleVariantsFromData(PX, (value) => ({
  filter: `blur(${value})`,
  WebkitFilter: `blur(${value})`,
  webkitFilter: `blur(${value})`,
  msFilter: `blur(${value})`,
}));
