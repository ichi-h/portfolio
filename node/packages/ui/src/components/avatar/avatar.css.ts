import { ComplexStyleRule, style, styleVariants } from "@vanilla-extract/css";

import * as s from "@/styles";

const avatarBase = style([s.borderRadius["full"], s.bgSize["cover"]]);

const size = Object.keys(s.w) as Array<keyof typeof s.w>;

export const avatar = styleVariants(
  size.reduce(
    (acc, size) => ({
      ...acc,
      [size]: [avatarBase, s.w[size], s.h[size]],
    }),
    {} as Record<(typeof size)[number], ComplexStyleRule>,
  ),
);
