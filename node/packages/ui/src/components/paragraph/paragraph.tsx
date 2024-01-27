import clsx from "clsx";
import { ComponentProps } from "react";

import * as styles from "./paragraph.css";

type Props = {
  align?: keyof (typeof styles)["textAlign"];
  overflow?: keyof (typeof styles)["overflow"];
  textOverflow?: keyof (typeof styles)["textOverflow"];
  whiteSpace?: keyof (typeof styles)["textWhiteSpace"];
} & ComponentProps<"p">;

export const Paragraph = ({
  children,
  className,
  align,
  overflow,
  textOverflow,
  whiteSpace,
  ...props
}: Props) => {
  return (
    <p
      className={clsx([
        styles.paragraph,
        align && styles.textAlign[align],
        overflow && styles.overflow[overflow],
        textOverflow && styles.textOverflow[textOverflow],
        whiteSpace && styles.textWhiteSpace[whiteSpace],
        className,
      ])}
      {...props}
    >
      {children}
    </p>
  );
};
