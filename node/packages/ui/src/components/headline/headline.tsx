import clsx from "clsx";
import { ComponentProps } from "react";

import { headline } from "./headline.css";

type Props = {
  level: `${keyof typeof headline}`;
} & ComponentProps<"h1">;

export const Headline = ({ children, className, level, ...props }: Props) => {
  const Component = `h${level}` as const;
  return (
    <Component className={clsx([headline[level], className])} {...props}>
      {children}
    </Component>
  );
};
