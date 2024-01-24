import { ComplexStyleRule, style, styleVariants } from "@vanilla-extract/css";

import { borderRadius, bgSize, w, h } from "@/styles";

const avatarBase = style([borderRadius["full"], bgSize["cover"]]);

const size = Object.keys(w) as Array<keyof typeof w>;

export const avatar = styleVariants(
  size.reduce(
    (acc, size) => ({
      ...acc,
      [size]: [avatarBase, w[size], h[size]],
    }),
    {} as Record<(typeof size)[number], ComplexStyleRule>,
  ),
);
