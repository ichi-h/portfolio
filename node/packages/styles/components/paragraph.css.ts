import { style, styleVariants } from "@vanilla-extract/css";

import { flattenStyle, styleRule } from "../libs/vanillaExtract";
import {
  fontSize,
  fontColor,
  m,
  p,
  textAlign as textAlignRule,
  overflow as overflowRule,
  textOverflow as textOverflowRule,
  textWhiteSpace as textWhiteSpaceRule,
} from "../styles";

export const paragraphRule = styleRule(
  flattenStyle([fontSize[4], fontColor["mono.900"], m[0], p[0]]),
);

export const paragraph = style(paragraphRule);

export const textAlign = styleVariants(textAlignRule);

export const overflow = styleVariants(overflowRule);

export const textOverflow = styleVariants(textOverflowRule);

export const textWhiteSpace = styleVariants(textWhiteSpaceRule);
