import { style } from "@vanilla-extract/css";
import {
  animateZoomOnHover,
  applyMedia,
  bg,
  bgPosition,
  bgSize,
  border,
  borderColor,
  borderRadius,
  dropShadow,
  flattenStyle,
  flex,
  flexAlign,
  flexDirection,
  flexJustify,
  gap,
  h,
  maxW,
  minH,
  p,
  w,
} from "portfolio-styles";

export const linkCardStyles = {
  hoverAnimation: style([animateZoomOnHover["sm"]]),
  linkCard: style([
    border["1"],
    borderColor["mono.500"],
    borderRadius["1"],
    dropShadow["md"],
    p[4],
  ]),
  layout: style([flex, flexJustify["between"], w["1/1"], h["1/1"], gap[4]]),
  thumbnail: style([
    flex,
    flexJustify["center"],
    flexAlign["center"],
    w["1/1"],
    h["auto"],
    bgSize["cover"],
    bgPosition["center"],
    maxW["1/4"],
    minH["24"],
    bg["mono.200"],
    applyMedia({ max: "1280" }, { display: "none" }),
  ]),
  content: style([
    flex,
    flexDirection["column"],
    gap[2],
    maxW["3/4"],
    applyMedia({ max: "1280" }, flattenStyle([maxW["1/1"]])),
  ]),
  unstyledAnchor: style([
    {
      textDecoration: "none !important",
      color: "inherit !important",
      cursor: "pointer !important",
      ":before": {
        textDecoration: "none !important",
      },
    },
  ]),
};
