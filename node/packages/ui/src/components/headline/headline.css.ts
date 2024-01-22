import {
  flattenStyle,
  styleVariantsFromMap,
  styleWitRule,
} from "@/libs/vanillaExtract";
import * as srm from "@/styles/ruleMap";

export const [headlineBase, headlineBaseRule] = styleWitRule(
  flattenStyle([
    srm.fontColorMap["mono.900"],
    srm.textAlignMap["left"],
    srm.mMap[0],
    srm.pMap[0],
  ]),
);

export const [headline, headlineMap] = styleVariantsFromMap({
  1: [headlineBaseRule, srm.fontSizeMap[12]],
  2: [headlineBaseRule, srm.fontSizeMap[8]],
  3: [headlineBaseRule, srm.fontSizeMap[7]],
  4: [headlineBaseRule, srm.fontSizeMap[6]],
  5: [headlineBaseRule, srm.fontSizeMap[5]],
  6: [headlineBaseRule, srm.fontSizeMap[4]],
});
