import { COLOR, PX, REM } from "@/constants";
import {
  styleVariantsFromData,
  styleVariantsFromMap,
} from "@/libs/vanillaExtract";

// Border

export const [border, borderMap] = styleVariantsFromData(PX, (value) => ({
  borderWidth: value,
}));

export const [borderX, borderXMap] = styleVariantsFromData(PX, (value) => ({
  borderLeftWidth: value,
  borderRightWidth: value,
}));

export const [borderY, borderYMap] = styleVariantsFromData(PX, (value) => ({
  borderTopWidth: value,
  borderBottomWidth: value,
}));

export const [borderT, borderTMap] = styleVariantsFromData(PX, (value) => ({
  borderTopWidth: value,
}));

export const [borderR, borderRMap] = styleVariantsFromData(PX, (value) => ({
  borderRightWidth: value,
}));

export const [borderB, borderBMap] = styleVariantsFromData(PX, (value) => ({
  borderBottomWidth: value,
}));

export const [borderL, borderLMap] = styleVariantsFromData(PX, (value) => ({
  borderLeftWidth: value,
}));

export const [borderColor, borderColorMap] = styleVariantsFromData(
  COLOR,
  (value) => ({
    borderColor: value,
  }),
);

export const [borderStyle, borderStyleMap] = styleVariantsFromMap({
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

export const [borderRadius, borderRadiusMap] = styleVariantsFromData(
  radiusMap,
  (value) => ({
    borderRadius: value,
  }),
);

// Outline

export const [outline, outlineMap] = styleVariantsFromData(PX, (value) => ({
  outlineWidth: value,
}));

export const [outlineColor, outlineColorMap] = styleVariantsFromData(
  COLOR,
  (value) => ({
    outlineColor: value,
  }),
);

export const [outlineStyle, outlineStyleMap] = styleVariantsFromMap({
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

export const [outlineOffset, outlineOffsetMap] = styleVariantsFromData(
  PX,
  (value) => ({
    outlineOffset: value,
  }),
);
