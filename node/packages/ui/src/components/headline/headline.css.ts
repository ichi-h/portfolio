import {
  applyMedia,
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
  textDecorationMap,
  fontWeightMap,
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
  1: [
    headlineBaseRule,
    fontSizeMap[12],
    applyMedia({ max: "768" }, flattenStyle([fontSizeMap[8]])),
    applyMedia({ max: "480" }, flattenStyle([fontSizeMap[7]])),
  ],
  2: [
    headlineBaseRule,
    fontSizeMap[8],
    applyMedia({ max: "768" }, flattenStyle([fontSizeMap[7]])),
  ],
  3: [
    headlineBaseRule,
    fontSizeMap[7],
    applyMedia({ max: "768" }, flattenStyle([fontSizeMap[6]])),
  ],
  4: [
    headlineBaseRule,
    fontSizeMap[6],
    applyMedia({ max: "768" }, flattenStyle([fontSizeMap[5]])),
  ],
  5: [
    headlineBaseRule,
    fontSizeMap[5],
    applyMedia({ max: "768" }, flattenStyle([fontSizeMap[4]])),
  ],
  6: [
    headlineBaseRule,
    fontSizeMap[4],
    applyMedia(
      { max: "768" },
      flattenStyle([textDecorationMap["underline"], fontWeightMap["normal"]]),
    ),
  ],
});
