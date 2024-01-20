import { CSSProperties } from "@vanilla-extract/css";

export const createStyleMap = <
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
