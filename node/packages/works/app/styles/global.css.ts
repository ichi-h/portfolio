import { globalStyle, style } from "@vanilla-extract/css";
import { bg, m } from "portfolio-styles";

export const html = style([bg["mono.900"], m[0]]);

globalStyle(`${html} *`, {
  fontFamily: '"Zen Kaku Gothic New", sans-serif',
});

globalStyle(`${html} body`, m[0]);

globalStyle(`${html} code`, {
  fontFamily: "monospace",
});
