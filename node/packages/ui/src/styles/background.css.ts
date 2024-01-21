import { COLOR } from "@/constants";
import {
  styleVariantsFromData,
  styleVariantsFromMap,
} from "@/libs/vanillaExtract";

export const [bg, bgMap] = styleVariantsFromData(COLOR, (value) => ({
  backgroundColor: value,
}));

export const [bgSize, bgSizeMap] = styleVariantsFromMap({
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

export const [bgPosition, bgPositionMap] = styleVariantsFromMap({
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
