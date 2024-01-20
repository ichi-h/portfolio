import clsx from "clsx";
import { ComponentProps } from "react";

import * as styles from "./button.css";

type Props = {
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: boolean;
} & ComponentProps<"button">;

export const Button = ({
  className,
  children,
  size = "md",
  rounded = false,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={clsx([
        styles.button,
        styles.buttonSize[size],
        styles.buttonRound[rounded ? "rounded" : "default"],
        className,
      ])}
    >
      {children}
    </button>
  );
};
