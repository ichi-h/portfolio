import { styleVariants } from "@vanilla-extract/css";

import { COLOR, REM, RATIO } from "@/src/constants";

const fontSizeMap = {
  "0": REM[0],
  "1": REM[1],
  "2": REM[2],
  "3": REM[3],
  "4": REM[4],
  "5": REM[5],
  "6": REM[6],
  "7": REM[7],
  "8": REM[8],
  "12": REM[12],
  "16": REM[16],
  "32": REM[32],
};

export const fontSize = styleVariants(fontSizeMap, (value) => ({
  fontSize: value,
}));

export const fontColor = styleVariants(COLOR, (value) => ({
  color: value,
}));

export const fontWeight = styleVariants({
  normal: {
    fontWeight: 400,
  },
  bold: {
    fontWeight: 700,
  },
});

const lineHeightMap = {
  ...fontSizeMap,
  ...RATIO,
};

export const lineHeight = styleVariants(lineHeightMap, (value) => ({
  lineHeight: value,
}));

export const textAlign = styleVariants({
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
});

export const textOverflow = styleVariants({
  ellipsis: {
    textOverflow: "ellipsis",
  },
  clip: {
    textOverflow: "clip",
  },
});

export const textWhiteSpace = styleVariants({
  normal: {
    whiteSpace: "normal",
  },
  nowrap: {
    whiteSpace: "nowrap",
  },
  pre: {
    whiteSpace: "pre",
  },
  preWrap: {
    whiteSpace: "pre-wrap",
  },
  preLine: {
    whiteSpace: "pre-line",
  },
});

export const textDecoration = styleVariants({
  none: {
    textDecoration: "none",
  },
  underline: {
    textDecoration: "underline",
  },
  lineThrough: {
    textDecoration: "line-through",
  },
});

export const textVerticalAlign = styleVariants({
  baseline: {
    verticalAlign: "baseline",
  },
  top: {
    verticalAlign: "top",
  },
  middle: {
    verticalAlign: "middle",
  },
  bottom: {
    verticalAlign: "bottom",
  },
  textTop: {
    verticalAlign: "text-top",
  },
  textBottom: {
    verticalAlign: "text-bottom",
  },
});
