import { styleVariants } from "@vanilla-extract/css";

import { REM } from "@/src/constants/rem";

export const p = styleVariants(REM, (value) => ({
  padding: value,
}));

export const pt = styleVariants(REM, (value) => ({
  paddingTop: value,
}));

export const pr = styleVariants(REM, (value) => ({
  paddingRight: value,
}));

export const pb = styleVariants(REM, (value) => ({
  paddingBottom: value,
}));

export const pl = styleVariants(REM, (value) => ({
  paddingLeft: value,
}));

export const px = styleVariants(REM, (value) => ({
  paddingLeft: value,
  paddingRight: value,
}));

export const py = styleVariants(REM, (value) => ({
  paddingTop: value,
  paddingBottom: value,
}));

export const m = styleVariants(REM, (value) => ({
  margin: value,
}));

export const mt = styleVariants(REM, (value) => ({
  marginTop: value,
}));

export const mr = styleVariants(REM, (value) => ({
  marginRight: value,
}));

export const mb = styleVariants(REM, (value) => ({
  marginBottom: value,
}));

export const ml = styleVariants(REM, (value) => ({
  marginLeft: value,
}));

export const mx = styleVariants(REM, (value) => ({
  marginLeft: value,
  marginRight: value,
}));

export const my = styleVariants(REM, (value) => ({
  marginTop: value,
  marginBottom: value,
}));
