import {
  style,
  styleVariants,
  CSSProperties,
  ComplexStyleRule,
} from "@vanilla-extract/css";

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

export const flattenStyle = (styles: CSSProperties[]) => {
  return styles.reduce((acc, style) => {
    return {
      ...acc,
      ...style,
    };
  }, {} as CSSProperties);
};

export const styleWitRule = <Rule extends ComplexStyleRule>(
  rule: Rule,
): [string, Rule] => {
  return [style(rule), rule];
};
