import { REM } from "@/constants";
import { styleMapFromData } from "@/libs/vanillaExtract";

export const p = styleMapFromData(REM, (value) => ({
  padding: value,
}));

export const pt = styleMapFromData(REM, (value) => ({
  paddingTop: value,
}));

export const pr = styleMapFromData(REM, (value) => ({
  paddingRight: value,
}));

export const pb = styleMapFromData(REM, (value) => ({
  paddingBottom: value,
}));

export const pl = styleMapFromData(REM, (value) => ({
  paddingLeft: value,
}));

export const px = styleMapFromData(REM, (value) => ({
  paddingLeft: value,
  paddingRight: value,
}));

export const py = styleMapFromData(REM, (value) => ({
  paddingTop: value,
  paddingBottom: value,
}));

const marginData = {
  ...REM,
  auto: "auto",
};

export const m = styleMapFromData(marginData, (value) => ({
  margin: value,
}));

export const mt = styleMapFromData(marginData, (value) => ({
  marginTop: value,
}));

export const mr = styleMapFromData(marginData, (value) => ({
  marginRight: value,
}));

export const mb = styleMapFromData(marginData, (value) => ({
  marginBottom: value,
}));

export const ml = styleMapFromData(marginData, (value) => ({
  marginLeft: value,
}));

export const mx = styleMapFromData(marginData, (value) => ({
  marginLeft: value,
  marginRight: value,
}));

export const my = styleMapFromData(marginData, (value) => ({
  marginTop: value,
  marginBottom: value,
}));
