import clsx from "clsx";
import { ComponentProps } from "react";

import * as s from "@/styles";

type Props = {
  classNameForBg?: ComponentProps<"div">["className"];
  children?: React.ReactNode;
  color?: keyof typeof s.bg;
  opacity?: keyof typeof s.opacity;
  src?: string;
  position?: keyof typeof s.bgPosition;
  size?: keyof typeof s.bgSize;
} & ComponentProps<"div">;

export const Background = ({
  className,
  classNameForBg,
  children,
  color = "inherit",
  opacity = 100,
  src,
  position = "center",
  size = "cover",
  ...props
}: Props) => {
  return (
    <div className={clsx([s.position["relative"], className])}>
      <div
        className={clsx([
          s.position["absolute"],
          s.zIndex["-1"],
          s.w["1/1"],
          s.h["1/1"],
          s.bg[color],
          s.opacity[opacity],
          s.bgPosition[position],
          s.bgSize[size],
          classNameForBg,
        ])}
        style={{
          backgroundImage: src && `url(${src})`,
        }}
        {...props}
      />
      {children}
    </div>
  );
};
