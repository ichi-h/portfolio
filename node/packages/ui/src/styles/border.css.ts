import { styleVariants } from "@vanilla-extract/css";

import { COLOR, PX, REM } from "@/src/constants";

// Border

export const border = styleVariants(PX, (value) => ({
  borderWidth: value,
}));

export const borderX = styleVariants(PX, (value) => ({
  borderLeftWidth: value,
  borderRightWidth: value,
}));

export const borderY = styleVariants(PX, (value) => ({
  borderTopWidth: value,
  borderBottomWidth: value,
}));

export const borderT = styleVariants(PX, (value) => ({
  borderTopWidth: value,
}));

export const borderR = styleVariants(PX, (value) => ({
  borderRightWidth: value,
}));

export const borderB = styleVariants(PX, (value) => ({
  borderBottomWidth: value,
}));

export const borderL = styleVariants(PX, (value) => ({
  borderLeftWidth: value,
}));

export const borderColor = styleVariants(COLOR, (value) => ({
  borderColor: value,
}));

export const borderStyle = styleVariants({
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

export const borderRadius = styleVariants(radiusMap, (value) => ({
  borderRadius: value,
}));

// Outline

export const outline = styleVariants(PX, (value) => ({
  outlineWidth: value,
}));

export const outlineColor = styleVariants(COLOR, (value) => ({
  outlineColor: value,
}));

export const outlineStyle = styleVariants({
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

export const outlineOffset = styleVariants(PX, (value) => ({
  outlineOffset: value,
}));
