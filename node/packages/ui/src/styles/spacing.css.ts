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

export const [m, mMap] = styleVariantsFromData(REM, (value) => ({
  margin: value,
}));

export const [mt, mtMap] = styleVariantsFromData(REM, (value) => ({
  marginTop: value,
}));

export const [mr, mrMap] = styleVariantsFromData(REM, (value) => ({
  marginRight: value,
}));

export const [mb, mbMap] = styleVariantsFromData(REM, (value) => ({
  marginBottom: value,
}));

export const [ml, mlMap] = styleVariantsFromData(REM, (value) => ({
  marginLeft: value,
}));

export const [mx, mxMap] = styleVariantsFromData(REM, (value) => ({
  marginLeft: value,
  marginRight: value,
}));

export const [my, myMap] = styleVariantsFromData(REM, (value) => ({
  marginTop: value,
  marginBottom: value,
}));
