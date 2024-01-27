import { RATIO, NEGATIVE_RATIO, REM, NEGATIVE_REM } from "@/constants";
import { styleRule, styleMapFromData, styleMap } from "@/libs/vanillaExtract";

export const gap = styleMapFromData(REM, (value) => ({
  gap: value,
}));

// Flexible box layout
// see: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout

export const flex = styleRule({
  display: "flex",
});

export const flexDirection = styleMap({
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
  columnReverse: {
    flexDirection: "column-reverse",
  },
});

export const flexJustify = styleMap({
  start: {
    justifyContent: "flex-start",
  },
  end: {
    justifyContent: "flex-end",
  },
  center: {
    justifyContent: "center",
  },
  between: {
    justifyContent: "space-between",
  },
});

export const flexAlign = styleMap({
  start: {
    alignItems: "flex-start",
  },
  end: {
    alignItems: "flex-end",
  },
  center: {
    alignItems: "center",
  },
  baseline: {
    alignItems: "baseline",
  },
});

export const flexWrap = styleMap({
  wrap: {
    flexWrap: "wrap",
  },
  nowrap: {
    flexWrap: "nowrap",
  },
  wrapReverse: {
    flexWrap: "wrap-reverse",
  },
});

// Grid layout
// see: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout

export const grid = styleRule({
  display: "grid",
});

export const gridCols = styleMap({
  1: {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  },
  2: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  3: {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
  4: {
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  },
  5: {
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  },
  6: {
    gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
  },
  7: {
    gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
  },
  8: {
    gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
  },
  9: {
    gridTemplateColumns: "repeat(9, minmax(0, 1fr))",
  },
  10: {
    gridTemplateColumns: "repeat(10, minmax(0, 1fr))",
  },
});

export const gridRows = styleMap({
  1: {
    gridTemplateRows: "repeat(1, minmax(0, 1fr))",
  },
  2: {
    gridTemplateRows: "repeat(2, minmax(0, 1fr))",
  },
  3: {
    gridTemplateRows: "repeat(3, minmax(0, 1fr))",
  },
  4: {
    gridTemplateRows: "repeat(4, minmax(0, 1fr))",
  },
  5: {
    gridTemplateRows: "repeat(5, minmax(0, 1fr))",
  },
  6: {
    gridTemplateRows: "repeat(6, minmax(0, 1fr))",
  },
  7: {
    gridTemplateRows: "repeat(7, minmax(0, 1fr))",
  },
  8: {
    gridTemplateRows: "repeat(8, minmax(0, 1fr))",
  },
  9: {
    gridTemplateRows: "repeat(9, minmax(0, 1fr))",
  },
  10: {
    gridTemplateRows: "repeat(10, minmax(0, 1fr))",
  },
});

// Positioned layout
// see: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout

const sizing = {
  ...RATIO,
  ...NEGATIVE_RATIO,
  ...REM,
  ...NEGATIVE_REM,
} as const;

export const position = styleMap({
  relative: {
    position: "relative",
  },
  absolute: {
    position: "absolute",
  },
  fixed: {
    position: "fixed",
  },
  sticky: {
    position: "sticky",
  },
});

export const top = styleMapFromData(sizing, (value) => ({
  top: value,
}));

export const bottom = styleMapFromData(sizing, (value) => ({
  bottom: value,
}));

export const left = styleMapFromData(sizing, (value) => ({
  left: value,
}));

export const right = styleMapFromData(sizing, (value) => ({
  right: value,
}));

export const zIndex = styleMap({
  "-1": {
    zIndex: -1,
  },
  0: {
    zIndex: 0,
  },
  10: {
    zIndex: 10,
  },
  20: {
    zIndex: 20,
  },
  30: {
    zIndex: 30,
  },
  40: {
    zIndex: 40,
  },
  50: {
    zIndex: 50,
  },
  60: {
    zIndex: 60,
  },
  70: {
    zIndex: 70,
  },
  80: {
    zIndex: 80,
  },
  90: {
    zIndex: 90,
  },
  100: {
    zIndex: 100,
  },
});

export const translate = styleMapFromData(sizing, (value) => ({
  transform: `translateX(${value}) translateY(${value})`,
}));

export const translateX = styleMapFromData(sizing, (value) => ({
  transform: `translateX(${value})`,
}));

export const translateY = styleMapFromData(sizing, (value) => ({
  transform: `translateY(${value})`,
}));
