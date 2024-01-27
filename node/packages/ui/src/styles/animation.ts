import { flattenStyle, styleMap, styleRule } from "@/libs/vanillaExtract";

import { opacity } from "./opacity";

export const duration = styleMap({
  75: {
    transitionDuration: "75ms",
  },
  100: {
    transitionDuration: "100ms",
  },
  150: {
    transitionDuration: "150ms",
  },
  200: {
    transitionDuration: "200ms",
  },
  300: {
    transitionDuration: "300ms",
  },
  500: {
    transitionDuration: "500ms",
  },
  700: {
    transitionDuration: "700ms",
  },
  1000: {
    transitionDuration: "1000ms",
  },
});

export const timingFunction = styleMap({
  easeIn: {
    transitionTimingFunction: "ease-in",
  },
  easeOut: {
    transitionTimingFunction: "ease-out",
  },
  easeInOut: {
    transitionTimingFunction: "ease-in-out",
  },
  linear: {
    transitionTimingFunction: "linear",
  },
  stepStart: {
    transitionTimingFunction: "step-start",
  },
  stepEnd: {
    transitionTimingFunction: "step-end",
  },
});

export const delay = styleMap({
  75: {
    transitionDelay: "75ms",
  },
  100: {
    transitionDelay: "100ms",
  },
  150: {
    transitionDelay: "150ms",
  },
  200: {
    transitionDelay: "200ms",
  },
  300: {
    transitionDelay: "300ms",
  },
  500: {
    transitionDelay: "500ms",
  },
  700: {
    transitionDelay: "700ms",
  },
  1000: {
    transitionDelay: "1000ms",
  },
});

export const animateZoomOnHover = styleMap({
  md: {
    ":hover": flattenStyle([
      duration[100],
      {
        scale: 1.02,
      },
    ]),
  },
  lg: {
    ":hover": flattenStyle([
      duration[100],
      {
        scale: 1.06,
      },
    ]),
  },
});

export const animateFadeOut = styleRule(
  flattenStyle([
    {
      visibility: "hidden",
    },
    opacity[0],
    duration[300],
    timingFunction.easeInOut,
  ]),
);

export const animateFadeIn = styleRule(
  flattenStyle([
    {
      visibility: "visible",
    },
    opacity[100],
    duration[300],
    timingFunction.easeInOut,
  ]),
);
