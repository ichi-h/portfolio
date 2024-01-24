import clsx from "clsx";
import { ComponentProps } from "react";

import {
  fontSize as fontSizeStyle,
  fontColor,
  fontWeight,
  lineHeight as lineHeightStyle,
  textDecoration,
  textVerticalAlign,
} from "@/styles";

type Props = {
  fontSize?: keyof typeof fontSizeStyle;
  color?: keyof typeof fontColor;
  weight?: keyof typeof fontWeight;
  lineHeight?: keyof typeof lineHeightStyle;
  decoration?: keyof typeof textDecoration;
  verticalAlign?: keyof typeof textVerticalAlign;
} & ComponentProps<"span">;

export const Text = ({
  children,
  className,
  fontSize = "4",
  color = "mono.900",
  weight = "normal",
  lineHeight = "normal",
  decoration = "none",
  verticalAlign = "baseline",
  ...props
}: Props) => {
  return (
    <span
      className={clsx([
        fontSizeStyle[fontSize],
        fontColor[color],
        fontWeight[weight],
        lineHeightStyle[lineHeight],
        textDecoration[decoration],
        textVerticalAlign[verticalAlign],
        className,
      ])}
      {...props}
    >
      {children}
    </span>
  );
};
