import { style, globalStyle } from "@vanilla-extract/css";

import { flattenStyle } from "../libs/vanillaExtract";
import {
  flex,
  flexDirection,
  gap,
  w,
  m,
  ml,
  mr,
  my,
  bg,
  borderColor,
  borderStyle,
  border,
  borderL,
  p,
  dropShadow,
  textAlign,
  fontColor,
  fontWeight,
  textDecoration,
  fontSize,
  maxW,
  borderRadius,
} from "../styles";

import { headlineRule } from "./headline.css";
import { defaultFontColor, linkHoverRule, linkRule } from "./link.css";
import { paragraphRule } from "./paragraph.css";

export const article = style([
  flex,
  flexDirection["column"],
  gap[5],
  w["1/1"],
  fontSize[4],
  fontColor["mono.900"],
]);

globalStyle(`${article} *`, m[0]);

globalStyle(`${article} p`, paragraphRule);

globalStyle(`${article} h1`, headlineRule[1]);
globalStyle(`${article} h2`, headlineRule[2]);
globalStyle(`${article} h3`, headlineRule[3]);
globalStyle(`${article} h4`, headlineRule[4]);
globalStyle(`${article} h5`, headlineRule[5]);
globalStyle(`${article} h6`, headlineRule[6]);

globalStyle(`${article} ul`, m[0]);

globalStyle(
  `${article} img`,
  flattenStyle([
    ml["auto"],
    mr["auto"],
    my[0],
    w["1/1"],
    maxW[192],
    {
      display: "block",
    },
  ]),
);

globalStyle(
  `${article} a`,
  flattenStyle([linkRule, fontColor[defaultFontColor]]),
);
globalStyle(`${article} a:hover`, linkHoverRule);

globalStyle(
  `${article} blockquote`,
  flattenStyle([
    bg["mono.50"],
    borderColor["mono.300"],
    borderStyle["solid"],
    border[0],
    borderL[8],
    borderRadius[1],
    p[3],
    m[0],
    dropShadow["md"],
  ]),
);

globalStyle(
  `${article} code`,
  flattenStyle([
    {
      display: "block",
    },
    bg["mono.800"],
    fontColor["mono.50"],
    borderRadius[1],
    p[3],
    m[0],
    dropShadow["md"],
  ]),
);

globalStyle(`${article} .text-center`, textAlign["center"]);
globalStyle(`${article} .text-right`, textAlign["right"]);
globalStyle(`${article} .text-left`, textAlign["left"]);
globalStyle(`${article} .text-blue`, fontColor["blue.500"]);
globalStyle(`${article} .text-red`, fontColor["red.500"]);
globalStyle(`${article} .text-gray`, fontColor["mono.400"]);
globalStyle(`${article} .text-bold`, fontWeight["bold"]);
globalStyle(`${article} .text-underline`, textDecoration["underline"]);
globalStyle(`${article} .text-3`, fontSize[3]);
globalStyle(`${article} .text-4`, fontSize[4]);
globalStyle(`${article} .text-5`, fontSize[5]);
globalStyle(`${article} .text-6`, fontSize[6]);
globalStyle(`${article} .text-7`, fontSize[7]);
globalStyle(`${article} .text-8`, fontSize[8]);
globalStyle(`${article} .text-12`, fontSize[12]);
globalStyle(`${article} .text-16`, fontSize[16]);
globalStyle(`${article} .text-32`, fontSize[32]);

globalStyle(
  `${article} iframe[src*="youtube.com"]`,
  flattenStyle([
    {
      aspectRatio: "16 / 9",
    },
    maxW[192],
    ml["auto"],
    mr["auto"],
    my[0],
  ]),
);
