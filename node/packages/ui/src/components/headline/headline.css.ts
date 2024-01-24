import {
  flattenStyle,
  styleVariantsFromMap,
  styleWitRule,
} from "@/libs/vanillaExtract";
import {
  fontColorMap,
  textAlignMap,
  mMap,
  pMap,
  fontSizeMap,
} from "@/styles/ruleMap";

export const [headlineBase, headlineBaseRule] = styleWitRule(
  flattenStyle([
    fontColorMap["mono.900"],
    textAlignMap["left"],
    mMap[0],
    pMap[0],
  ]),
);

export const [headline, headlineMap] = styleVariantsFromMap({
  1: [headlineBaseRule, fontSizeMap[12]],
  2: [headlineBaseRule, fontSizeMap[8]],
  3: [headlineBaseRule, fontSizeMap[7]],
  4: [headlineBaseRule, fontSizeMap[6]],
  5: [headlineBaseRule, fontSizeMap[5]],
  6: [headlineBaseRule, fontSizeMap[4]],
});
