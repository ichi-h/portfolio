import { REM } from "@/constants/rem";
import { styleVariantsFromData } from "@/libs/vanillaExtract";

export const [p, pMap] = styleVariantsFromData(REM, (value) => ({
  padding: value,
}));

export const [pt, ptMap] = styleVariantsFromData(REM, (value) => ({
  paddingTop: value,
}));

export const [pr, prMap] = styleVariantsFromData(REM, (value) => ({
  paddingRight: value,
}));

export const [pb, pbMap] = styleVariantsFromData(REM, (value) => ({
  paddingBottom: value,
}));

export const [pl, plMap] = styleVariantsFromData(REM, (value) => ({
  paddingLeft: value,
}));

export const [px, pxMap] = styleVariantsFromData(REM, (value) => ({
  paddingLeft: value,
  paddingRight: value,
}));

export const [py, pyMap] = styleVariantsFromData(REM, (value) => ({
  paddingTop: value,
  paddingBottom: value,
}));

const marginData = {
  ...REM,
  auto: "auto",
};

export const [m, mMap] = styleVariantsFromData(marginData, (value) => ({
  margin: value,
}));

export const [mt, mtMap] = styleVariantsFromData(marginData, (value) => ({
  marginTop: value,
}));

export const [mr, mrMap] = styleVariantsFromData(marginData, (value) => ({
  marginRight: value,
}));

export const [mb, mbMap] = styleVariantsFromData(marginData, (value) => ({
  marginBottom: value,
}));

export const [ml, mlMap] = styleVariantsFromData(marginData, (value) => ({
  marginLeft: value,
}));

export const [mx, mxMap] = styleVariantsFromData(marginData, (value) => ({
  marginLeft: value,
  marginRight: value,
}));

export const [my, myMap] = styleVariantsFromData(marginData, (value) => ({
  marginTop: value,
  marginBottom: value,
}));
