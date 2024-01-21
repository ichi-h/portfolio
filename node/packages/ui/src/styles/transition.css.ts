import { styleVariantsFromMap } from "@/libs/vanillaExtract";

export const [duration, durationMap] = styleVariantsFromMap({
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

export const [timingFunction, timingFunctionMap] = styleVariantsFromMap({
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

export const [delay, delayMap] = styleVariantsFromMap({
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
