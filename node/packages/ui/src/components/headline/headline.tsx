import clsx from "clsx";
import * as styles from "portfolio-styles/components/headline.css";
import { ComponentProps } from "react";

type Props = {
  level: `${keyof typeof styles.headline}`;
} & ComponentProps<"h1">;

export const Headline = ({ children, className, level, ...props }: Props) => {
  const Component = `h${level}` as const;
  return (
    <Component className={clsx([styles.headline[level], className])} {...props}>
      {children}
    </Component>
  );
};
