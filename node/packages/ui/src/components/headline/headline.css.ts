import { style, styleVariants } from "@vanilla-extract/css";

import * as s from "@/styles";

const headlineBase = style([
  s.fontColor["mono.900"],
  s.textAlign["left"],
  s.m[0],
  s.p[0],
]);

export const headline = styleVariants({
  1: [headlineBase, s.fontSize[12]],
  2: [headlineBase, s.fontSize[8]],
  3: [headlineBase, s.fontSize[7]],
  4: [headlineBase, s.fontSize[6]],
  5: [headlineBase, s.fontSize[5]],
  6: [headlineBase, s.fontSize[4]],
});
