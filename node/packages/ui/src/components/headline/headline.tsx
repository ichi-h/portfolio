import clsx from "clsx";
import { ComponentProps } from "react";

import * as styles from "./headline.css";

type Props = {
  level: "1" | "2" | "3" | "4" | "5" | "6";
} & ComponentProps<"h1">;

export const Headline = ({ children, className, level, ...props }: Props) => {
  const Component = `h${level}` as const;
  return (
    <Component className={clsx([styles.headline[level], className])} {...props}>
      {children}
    </Component>
  );
};
