import { globalStyle } from "@vanilla-extract/css";
import { bg, flattenStyle, m } from "portfolio-styles";

globalStyle("*", {
  fontFamily: '"Zen Kaku Gothic New", sans-serif',
});

globalStyle("html", flattenStyle([bg["mono.900"], m[0]]));

globalStyle("body", m[0]);
