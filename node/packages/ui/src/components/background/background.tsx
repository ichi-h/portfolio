import clsx from "clsx";
import * as styles from "portfolio-styles/components/background.css";
import { ComponentProps } from "react";

type Props = {
  classNameForBg?: ComponentProps<"div">["className"];
  styleForBg?: ComponentProps<"div">["style"];
  children?: React.ReactNode;
  color?: keyof (typeof styles)["bg"];
  opacity?: keyof (typeof styles)["opacity"];
  src?: string;
  position?: keyof (typeof styles)["bgPosition"];
  size?: keyof (typeof styles)["bgSize"];
} & ComponentProps<"div">;

export const Background = ({
  className,
  classNameForBg,
  styleForBg,
  children,
  color,
  opacity,
  src,
  position = "center",
  size = "cover",
  ...props
}: Props) => {
  return (
    <div className={clsx([styles.backgroundParent, className])} {...props}>
      <div
        className={clsx([
          styles.background,
          color && styles.bg[color],
          opacity && styles.opacity[opacity],
          position && styles.bgPosition[position],
          size && styles.bgSize[size],
          classNameForBg,
        ])}
        style={{
          ...styleForBg,
          backgroundImage: src && `url(${src})`,
        }}
      />
      {children}
    </div>
  );
};
