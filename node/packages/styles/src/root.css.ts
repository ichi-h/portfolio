import { style } from "@vanilla-extract/css";
import { bg, m } from "portfolio-ui";

export const htmlStyle = style([m[0]]);

export const bodyStyle = style([
  bg["primary.900"],
  m[0],
  {
    fontFamily: '"Zen Kaku Gothic New", sans-serif',
  },
]);
