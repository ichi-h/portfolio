import { styleVariantsFromData } from "@/libs/vanillaExtract";

const overflowData = {
  visible: "visible",
  hidden: "hidden",
  scroll: "scroll",
  auto: "auto",
} as const;

export const [overflow, overflowMap] = styleVariantsFromData(
  overflowData,
  (value) => ({
    overflow: value,
  }),
);

export const [overflowX, overflowXMap] = styleVariantsFromData(
  overflowData,
  (value) => ({
    overflowX: value,
  }),
);

export const [overflowY, overflowYMap] = styleVariantsFromData(
  overflowData,
  (value) => ({
    overflowY: value,
  }),
);
