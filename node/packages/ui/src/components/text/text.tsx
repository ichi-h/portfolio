import clsx from "clsx";
import { ComponentProps } from "react";

import * as s from "@/styles";

type Props = {
  fontSize: keyof typeof s.fontSize;
  color: keyof typeof s.fontColor;
  weight: keyof typeof s.fontWeight;
  lineHeight: keyof typeof s.lineHeight;
  align: keyof typeof s.textAlign;
  decoration: keyof typeof s.textDecoration;
  verticalAlign: keyof typeof s.textVerticalAlign;
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
        s.fontSize[fontSize],
        s.fontColor[color],
        s.fontWeight[weight],
        s.lineHeight[lineHeight],
        s.textDecoration[decoration],
        s.textVerticalAlign[verticalAlign],
        className,
      ])}
      {...props}
    >
      {children}
    </span>
  );
};
