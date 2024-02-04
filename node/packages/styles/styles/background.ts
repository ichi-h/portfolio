import { COLOR } from "../constants/color";
import { styleMap, styleMapFromData } from "../libs/vanillaExtract";

export const bg = styleMapFromData(COLOR, (value) => ({
  backgroundColor: value,
}));

export const bgSize = styleMap({
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

export const bgPosition = styleMap({
  center: {
    backgroundPosition: "center",
  },
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
