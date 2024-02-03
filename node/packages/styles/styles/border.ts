import { COLOR, PX, REM } from "@/constants";
import { styleMapFromData, styleMap } from "@/libs/vanillaExtract";

// Border

export const border = styleMapFromData(PX, (value) => ({
  borderWidth: value,
}));

export const borderX = styleMapFromData(PX, (value) => ({
  borderLeftWidth: value,
  borderRightWidth: value,
}));

export const borderY = styleMapFromData(PX, (value) => ({
  borderTopWidth: value,
  borderBottomWidth: value,
}));

export const borderT = styleMapFromData(PX, (value) => ({
  borderTopWidth: value,
}));

export const borderR = styleMapFromData(PX, (value) => ({
  borderRightWidth: value,
}));

export const borderB = styleMapFromData(PX, (value) => ({
  borderBottomWidth: value,
}));

export const borderL = styleMapFromData(PX, (value) => ({
  borderLeftWidth: value,
}));

export const borderColor = styleMapFromData(COLOR, (value) => ({
  borderColor: value,
}));

export const borderStyle = styleMap({
  solid: {
    borderStyle: "solid",
  },
  dashed: {
    borderStyle: "dashed",
  },
  dotted: {
    borderStyle: "dotted",
  },
  double: {
    borderStyle: "double",
  },
  hidden: {
    borderStyle: "hidden",
  },
  none: {
    borderStyle: "none",
  },
});

const radiusMap = {
  0: REM[0],
  1: REM[1],
  2: REM[2],
  3: REM[3],
  4: REM[4],
  5: REM[5],
  6: REM[6],
  full: "9999px",
};

export const borderRadius = styleMapFromData(radiusMap, (value) => ({
  borderRadius: value,
}));

// Outline

export const outline = styleMapFromData(PX, (value) => ({
  outlineWidth: value,
}));

export const outlineColor = styleMapFromData(COLOR, (value) => ({
  outlineColor: value,
}));

export const outlineStyle = styleMap({
  solid: {
    outlineStyle: "solid",
  },
  dashed: {
    outlineStyle: "dashed",
  },
  dotted: {
    outlineStyle: "dotted",
  },
  double: {
    outlineStyle: "double",
  },
  hidden: {
    outlineStyle: "hidden",
  },
  none: {
    outlineStyle: "none",
  },
});

export const outlineOffset = styleMapFromData(PX, (value) => ({
  outlineOffset: value,
}));
