import { styleVariants } from "@vanilla-extract/css";

import {
  fontSize as fontSizeRule,
  fontColor as fontColorRule,
  fontWeight as fontWeightRule,
  lineHeight as lineHeightRule,
  textDecoration as textDecorationRule,
  textVerticalAlign as textVerticalAlignRule,
} from "@/styles";

export const fontSize = styleVariants(fontSizeRule);

export const fontColor = styleVariants(fontColorRule);

export const fontWeight = styleVariants(fontWeightRule);

export const lineHeight = styleVariants(lineHeightRule);

export const textDecoration = styleVariants(textDecorationRule);

export const textVerticalAlign = styleVariants(textVerticalAlignRule);
