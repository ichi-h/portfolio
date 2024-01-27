import { COLOR, REM } from "@/constants";
import { styleMapFromData, styleMap } from "@/libs/vanillaExtract";

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

export const fontSize = styleMapFromData(fontSizeData, (value) => ({
  fontSize: value,
}));

export const fontColor = styleMapFromData(COLOR, (value) => ({
  color: value,
}));

export const fontWeight = styleMap({
  normal: {
    fontWeight: 400,
  },
  bold: {
    fontWeight: 700,
  },
});

const lineHeightData = {
  normal: "normal",
  ...fontSizeData,
};

export const lineHeight = styleMapFromData(lineHeightData, (value) => ({
  lineHeight: value,
}));

export const textAlign = styleMap({
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

export const textOverflow = styleMap({
  ellipsis: {
    textOverflow: "ellipsis",
  },
  clip: {
    textOverflow: "clip",
  },
});

export const textWhiteSpace = styleMap({
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

export const textDecoration = styleMap({
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

export const textVerticalAlign = styleMap({
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
