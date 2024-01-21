import { COLOR, REM, RATIO } from "@/constants";
import {
  styleVariantsFromData,
  styleVariantsFromMap,
} from "@/libs/vanillaExtract";

const fontSizeData = {
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

export const [fontSize, fontSizeMap] = styleVariantsFromData(
  fontSizeData,
  (value) => ({
    fontSize: value,
  }),
);

export const [fontColor, fontColorMap] = styleVariantsFromData(
  COLOR,
  (value) => ({
    color: value,
  }),
);

export const [fontWeight, fontWeightMap] = styleVariantsFromMap({
  normal: {
    fontWeight: 400,
  },
  bold: {
    fontWeight: 700,
  },
});

const lineHeightData = {
  ...fontSizeData,
  ...RATIO,
};

export const [lineHeight, lineHeightMap] = styleVariantsFromData(
  lineHeightData,
  (value) => ({
    lineHeight: value,
  }),
);

export const [textAlign, textAlignMap] = styleVariantsFromMap({
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

export const [textOverflow, textOverflowMap] = styleVariantsFromMap({
  ellipsis: {
    textOverflow: "ellipsis",
  },
  clip: {
    textOverflow: "clip",
  },
});

export const [textWhiteSpace, textWhiteSpaceMap] = styleVariantsFromMap({
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

export const [textDecoration, textDecorationMap] = styleVariantsFromMap({
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

export const [textVerticalAlign, textVerticalAlignMap] = styleVariantsFromMap({
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
