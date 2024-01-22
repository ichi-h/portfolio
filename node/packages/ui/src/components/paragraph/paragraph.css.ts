import { styleWitRule } from "@/libs/vanillaExtract";
import * as srm from "@/styles/ruleMap";

export const [paragraph, paragraphRule] = styleWitRule([
  srm.fontSizeMap[4],
  srm.fontColorMap["mono.900"],
  srm.mMap[0],
  srm.pMap[0],
]);
