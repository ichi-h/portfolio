import clsx from "clsx";
import { ComponentProps } from "react";

import * as styles from "./avatar.css";

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
