import clsx from "clsx";
import { ComponentProps } from "react";

import * as styles from "./text.css";

type Props = {
  fontSize?: keyof (typeof styles)["fontSize"];
  color?: keyof (typeof styles)["fontColor"];
  weight?: keyof (typeof styles)["fontWeight"];
  lineHeight?: keyof (typeof styles)["lineHeight"];
  decoration?: keyof (typeof styles)["textDecoration"];
  verticalAlign?: keyof (typeof styles)["textVerticalAlign"];
} & ComponentProps<"span">;

export const Text = ({
  children,
  className,
  fontSize,
  color,
  weight,
  lineHeight,
  decoration,
  verticalAlign,
  ...props
}: Props) => {
  return (
    <span
      className={clsx([
        fontSize && styles.fontSize[fontSize],
        color && styles.fontColor[color],
        weight && styles.fontWeight[weight],
        lineHeight && styles.lineHeight[lineHeight],
        decoration && styles.textDecoration[decoration],
        verticalAlign && styles.textVerticalAlign[verticalAlign],
        className,
      ])}
      {...props}
    >
      {children}
    </span>
  );
};
