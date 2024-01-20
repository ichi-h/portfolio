import { styleVariants } from "@vanilla-extract/css";

import { COLOR } from "@/src/constants";

export const bg = styleVariants(COLOR, (value) => ({
  backgroundColor: value,
}));

export const bgSize = styleVariants({
  auto: {
    backgroundSize: "auto",
  },
  cover: {
    backgroundSize: "cover",
  },
  contain: {
    backgroundSize: "contain",
  },
});

export const bgPosition = styleVariants({
  top: {
    backgroundPosition: "top",
  },
  right: {
    backgroundPosition: "right",
  },
  bottom: {
    backgroundPosition: "bottom",
  },
  left: {
    backgroundPosition: "left",
  },
  topRight: {
    backgroundPosition: "top right",
  },
  topLeft: {
    backgroundPosition: "top left",
  },
  bottomRight: {
    backgroundPosition: "bottom right",
  },
  bottomLeft: {
    backgroundPosition: "bottom left",
  },
});
