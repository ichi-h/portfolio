import {
  CSSProperties,
  ComplexStyleRule,
  StyleRule,
} from "@vanilla-extract/css";

import { BREAK_POINT } from "@/constants";

export const styleMapFromData = <
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

export const styleMap = <
  StyleMap extends Record<string | number, ComplexStyleRule>,
>(
  styleMap: StyleMap,
): StyleMap => {
  return styleMap;
};

export const styleRule = <Rule extends CSSProperties>(rule: Rule): Rule => {
  return rule;
};

export const flattenStyle = (styles: StyleRule[]) => {
  return styles.reduce((acc, style) => {
    return {
      ...acc,
      ...style,
    };
  }, {} as StyleRule);
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
