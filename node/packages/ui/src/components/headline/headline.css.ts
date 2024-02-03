import { styleVariants } from "@vanilla-extract/css";
import {
  applyMedia,
  flattenStyle,
  styleMap,
  styleRule,
} from "portfolio-styles";
import {
  fontColor,
  textAlign,
  m,
  p,
  fontSize,
  textDecoration,
  fontWeight,
} from "portfolio-styles";

const headlineBaseRule = styleRule(
  flattenStyle([fontColor["mono.900"], textAlign["left"], m[0], p[0]]),
);

export const headlineRule = styleMap({
  1: flattenStyle([
    headlineBaseRule,
    fontSize[12],
    applyMedia({ max: "768" }, flattenStyle([fontSize[8]])),
  ]),
  2: flattenStyle([
    headlineBaseRule,
    fontSize[8],
    applyMedia({ max: "768" }, flattenStyle([fontSize[7]])),
  ]),
  3: flattenStyle([
    headlineBaseRule,
    fontSize[7],
    applyMedia({ max: "768" }, flattenStyle([fontSize[6]])),
  ]),
  4: flattenStyle([
    headlineBaseRule,
    fontSize[6],
    applyMedia({ max: "768" }, flattenStyle([fontSize[5]])),
  ]),
  5: flattenStyle([
    headlineBaseRule,
    fontSize[5],
    applyMedia({ max: "768" }, flattenStyle([fontSize[4]])),
  ]),
  6: flattenStyle([
    headlineBaseRule,
    fontSize[4],
    applyMedia(
      { max: "768" },
      flattenStyle([textDecoration["underline"], fontWeight["normal"]]),
    ),
  ]),
});

export const headline = styleVariants(headlineRule);
