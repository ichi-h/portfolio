import clsx from "clsx";
import { ComponentProps } from "react";

import * as s from "@/styles";

import * as styles from "./paragraph.css";

type Props = {
  align?: keyof typeof s.textAlign;
  overflow?: keyof typeof s.overflow;
  textOverflow?: keyof typeof s.textOverflow;
  whiteSpace?: keyof typeof s.textWhiteSpace;
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
        s.textAlign[align],
        s.overflow[overflow],
        s.textOverflow[textOverflow],
        s.textWhiteSpace[whiteSpace],
        className,
      ])}
      {...props}
    >
      {children}
    </p>
  );
};
