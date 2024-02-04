import clsx from "clsx";
import * as styles from "portfolio-styles/components/avatar.css";
import { ComponentProps } from "react";

type Props = {
  src: string;
  size: keyof typeof styles.avatar;
} & ComponentProps<"img">;

export const Avatar = ({ className, src, size, ...props }: Props) => {
  return (
    <img
      className={clsx([styles.avatar[size], className])}
      src={src}
      {...props}
    />
  );
};
