import {
  style,
  styleVariants,
  CSSProperties,
  ComplexStyleRule,
  StyleRule,
} from "@vanilla-extract/css";

import { BREAK_POINT } from "@/constants";

const createStyleMap = <
  Data extends Record<string | number, unknown>,
  Key extends keyof Data,
>(
  data: Data,
  mapData: (value: Data[Key], key: Key) => CSSProperties,
): Record<keyof Data, CSSProperties> => {
  return Object.entries(data).reduce(
    (acc, [key, value]) => {
      acc[key as Key] = mapData(value as Data[Key], key as Key);
      return acc;
    },
    {} as Record<keyof Data, CSSProperties>,
  );
};

export const styleVariantsFromData = <
  Data extends Record<string | number, unknown>,
  Key extends keyof Data,
>(
  data: Data,
  mapData: (value: Data[Key], key: Key) => CSSProperties,
): [Record<keyof Data, string>, Record<keyof Data, CSSProperties>] => {
  const styleMap = createStyleMap(data, mapData);
  const variants = styleVariants(styleMap);
  return [variants, styleMap];
};

export const styleVariantsFromMap = <
  StyleMap extends Record<string | number, ComplexStyleRule>,
>(
  styleMap: StyleMap,
): [Record<keyof StyleMap, string>, StyleMap] => {
  const variants = styleVariants(styleMap);
  return [variants, styleMap];
};

export const flattenStyle = (styles: StyleRule[]) => {
  return styles.reduce((acc, style) => {
    return {
      ...acc,
      ...style,
    };
  }, {} as StyleRule);
};

export const styleWitRule = <Rule extends ComplexStyleRule>(
  rule: Rule,
): [string, Rule] => {
  return [style(rule), rule];
};

export const applyMedia = (
  breakPoint: {
    min?: keyof typeof BREAK_POINT;
    max?: keyof typeof BREAK_POINT;
  },
  style: CSSProperties,
) => {
  const minWidth = breakPoint.min
    ? `and (min-width: ${BREAK_POINT[breakPoint.min]})`
    : "";
  const maxWidth = breakPoint.max
    ? `and (max-width: ${BREAK_POINT[breakPoint.max]})`
    : "";
  return {
    "@media": {
      [`only screen ${minWidth} ${maxWidth}`]: style,
    },
  };
};
