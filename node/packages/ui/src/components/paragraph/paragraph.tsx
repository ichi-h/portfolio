import clsx from "clsx";
import * as styles from "portfolio-styles/components/paragraph.css";
import { ComponentProps } from "react";

type Props = {
  align?: keyof (typeof styles)["textAlign"];
  overflow?: keyof (typeof styles)["overflow"];
  textOverflow?: keyof (typeof styles)["textOverflow"];
  whiteSpace?: keyof (typeof styles)["textWhiteSpace"];
  lineClamp?: number;
} & ComponentProps<"p">;

export const Paragraph = ({
  children,
  className,
  align,
  overflow,
  textOverflow,
  whiteSpace,
  lineClamp,
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
      style={
        lineClamp
          ? {
              display: "-webkit-box",
              lineClamp: lineClamp,
              WebkitLineClamp: lineClamp,
              WebkitBoxOrient: "vertical",
            }
          : undefined
      }
      {...props}
    >
      {children}
    </p>
  );
};
