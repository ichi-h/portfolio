import { style, globalStyle } from "@vanilla-extract/css";

import { headlineMap } from "@/components/headline/headline.css";
import { linkHoverRule, linkRule } from "@/components/link/link.css";
import { paragraphRule } from "@/components/paragraph/paragraph.css";
import { flattenStyle } from "@/libs/vanillaExtract";
import * as s from "@/styles";
import * as srm from "@/styles/ruleMap";

export const article = style([
  s.flex,
  s.flexDirection["column"],
  s.gap[5],
  s.w["1/1"],
  s.fontSize[4],
  s.fontColor["mono.900"],
]);

globalStyle(`${article} p`, flattenStyle(paragraphRule));

globalStyle(`${article} h1`, flattenStyle(headlineMap[1]));
globalStyle(`${article} h2`, flattenStyle(headlineMap[2]));
globalStyle(`${article} h3`, flattenStyle(headlineMap[3]));
globalStyle(`${article} h4`, flattenStyle(headlineMap[4]));
globalStyle(`${article} h5`, flattenStyle(headlineMap[5]));
globalStyle(`${article} h6`, flattenStyle(headlineMap[6]));

globalStyle(`${article} ul`, srm.mMap[0]);

globalStyle(
  `${article} img`,
  flattenStyle([
    srm.mlMap["auto"],
    srm.mrMap["auto"],
    srm.myMap[0],
    {
      display: "block",
    },
  ]),
);

globalStyle(`${article} a`, linkRule);
globalStyle(`${article} a:hover`, linkHoverRule);

globalStyle(
  `${article} blockquote`,
  flattenStyle([
    srm.bgMap["mono.50"],
    srm.borderColorMap["mono.300"],
    srm.borderStyleMap["solid"],
    srm.borderMap[0],
    srm.borderLMap[8],
    srm.pMap[3],
    srm.mMap[0],
    srm.dropShadowMap["md"],
  ]),
);

globalStyle(`${article} .text-center`, srm.textAlignMap["center"]);
globalStyle(`${article} .text-right`, srm.textAlignMap["right"]);
globalStyle(`${article} .text-left`, srm.textAlignMap["left"]);
globalStyle(`${article} .text-blue`, srm.fontColorMap["blue.500"]);
globalStyle(`${article} .text-red`, srm.fontColorMap["red.500"]);
globalStyle(`${article} .text-gray`, srm.fontColorMap["mono.400"]);
globalStyle(`${article} .text-bold`, srm.fontWeightMap["bold"]);
globalStyle(`${article} .text-underline`, srm.textDecorationMap["underline"]);
globalStyle(`${article} .text-3`, srm.fontSizeMap[3]);
globalStyle(`${article} .text-4`, srm.fontSizeMap[4]);
globalStyle(`${article} .text-5`, srm.fontSizeMap[5]);
globalStyle(`${article} .text-6`, srm.fontSizeMap[6]);
globalStyle(`${article} .text-7`, srm.fontSizeMap[7]);
globalStyle(`${article} .text-8`, srm.fontSizeMap[8]);
globalStyle(`${article} .text-12`, srm.fontSizeMap[12]);
globalStyle(`${article} .text-16`, srm.fontSizeMap[16]);
globalStyle(`${article} .text-32`, srm.fontSizeMap[32]);

globalStyle(
  `${article} iframe[src*="youtube.com"]`,
  flattenStyle([
    {
      aspectRatio: "16 / 9",
    },
    srm.maxWMap[192],
    srm.mlMap["auto"],
    srm.mrMap["auto"],
    srm.myMap[0],
  ]),
);
