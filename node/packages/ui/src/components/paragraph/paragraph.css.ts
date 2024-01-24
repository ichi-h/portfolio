import { styleWitRule } from "@/libs/vanillaExtract";
import { fontSizeMap, fontColorMap, mMap, pMap } from "@/styles/ruleMap";

export const [paragraph, paragraphRule] = styleWitRule([
  fontSizeMap[4],
  fontColorMap["mono.900"],
  mMap[0],
  pMap[0],
]);
