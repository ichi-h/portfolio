import clsx from "clsx";
import { ComponentProps } from "react";

import {
  textAlign,
  overflow as overflowStyle,
  textOverflow as textOverflowStyle,
  textWhiteSpace,
} from "@/styles";

import * as styles from "./paragraph.css";

type Props = {
  align?: keyof typeof textAlign;
  overflow?: keyof typeof overflowStyle;
  textOverflow?: keyof typeof textOverflowStyle;
  whiteSpace?: keyof typeof textWhiteSpace;
} & ComponentProps<"p">;

export const Paragraph = ({
  children,
  className,
  align = "left",
  overflow = "visible",
  textOverflow = "clip",
  whiteSpace = "normal",
  ...props
}: Props) => {
  return (
    <p
      className={clsx([
        styles.paragraph,
        textAlign[align],
        overflowStyle[overflow],
        textOverflowStyle[textOverflow],
        textWhiteSpace[whiteSpace],
        className,
      ])}
      {...props}
    >
      {children}
    </p>
  );
};
