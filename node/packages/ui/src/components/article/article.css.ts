import { style, globalStyle } from "@vanilla-extract/css";

import { headlineMap } from "@/components/headline/headline.css";
import { linkHoverRule, linkRule } from "@/components/link/link.css";
import { paragraphRule } from "@/components/paragraph/paragraph.css";
import { flattenStyle } from "@/libs/vanillaExtract";
import { flex, flexDirection, gap, w, fontSize, fontColor } from "@/styles";
import {
  mMap,
  mlMap,
  mrMap,
  myMap,
  bgMap,
  borderColorMap,
  borderStyleMap,
  borderMap,
  borderLMap,
  pMap,
  dropShadowMap,
  textAlignMap,
  fontColorMap,
  fontWeightMap,
  textDecorationMap,
  fontSizeMap,
  maxWMap,
} from "@/styles/ruleMap";

export const article = style([
  flex,
  flexDirection["column"],
  gap[5],
  w["1/1"],
  fontSize[4],
  fontColor["mono.900"],
]);

globalStyle(`${article} *`, mMap[0]);

globalStyle(`${article} p`, flattenStyle(paragraphRule));

globalStyle(`${article} h1`, flattenStyle(headlineMap[1]));
globalStyle(`${article} h2`, flattenStyle(headlineMap[2]));
globalStyle(`${article} h3`, flattenStyle(headlineMap[3]));
globalStyle(`${article} h4`, flattenStyle(headlineMap[4]));
globalStyle(`${article} h5`, flattenStyle(headlineMap[5]));
globalStyle(`${article} h6`, flattenStyle(headlineMap[6]));

globalStyle(`${article} ul`, mMap[0]);

globalStyle(
  `${article} img`,
  flattenStyle([
    mlMap["auto"],
    mrMap["auto"],
    myMap[0],
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
    bgMap["mono.50"],
    borderColorMap["mono.300"],
    borderStyleMap["solid"],
    borderMap[0],
    borderLMap[8],
    pMap[3],
    mMap[0],
    dropShadowMap["md"],
  ]),
);

globalStyle(`${article} .text-center`, textAlignMap["center"]);
globalStyle(`${article} .text-right`, textAlignMap["right"]);
globalStyle(`${article} .text-left`, textAlignMap["left"]);
globalStyle(`${article} .text-blue`, fontColorMap["blue.500"]);
globalStyle(`${article} .text-red`, fontColorMap["red.500"]);
globalStyle(`${article} .text-gray`, fontColorMap["mono.400"]);
globalStyle(`${article} .text-bold`, fontWeightMap["bold"]);
globalStyle(`${article} .text-underline`, textDecorationMap["underline"]);
globalStyle(`${article} .text-3`, fontSizeMap[3]);
globalStyle(`${article} .text-4`, fontSizeMap[4]);
globalStyle(`${article} .text-5`, fontSizeMap[5]);
globalStyle(`${article} .text-6`, fontSizeMap[6]);
globalStyle(`${article} .text-7`, fontSizeMap[7]);
globalStyle(`${article} .text-8`, fontSizeMap[8]);
globalStyle(`${article} .text-12`, fontSizeMap[12]);
globalStyle(`${article} .text-16`, fontSizeMap[16]);
globalStyle(`${article} .text-32`, fontSizeMap[32]);

globalStyle(
  `${article} iframe[src*="youtube.com"]`,
  flattenStyle([
    {
      aspectRatio: "16 / 9",
    },
    maxWMap[192],
    mlMap["auto"],
    mrMap["auto"],
    myMap[0],
  ]),
);
