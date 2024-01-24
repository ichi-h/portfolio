import clsx from "clsx";
import { ComponentProps } from "react";

import {
  bg,
  opacity as opacityStyle,
  bgPosition,
  bgSize,
  position as positionStyle,
  zIndex,
  w,
  h,
} from "@/styles";

type Props = {
  classNameForBg?: ComponentProps<"div">["className"];
  children?: React.ReactNode;
  color?: keyof typeof bg;
  opacity?: keyof typeof opacityStyle;
  src?: string;
  position?: keyof typeof bgPosition;
  size?: keyof typeof bgSize;
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
    <div className={clsx([positionStyle["relative"], className])}>
      <div
        className={clsx([
          positionStyle["absolute"],
          zIndex["-1"],
          w["1/1"],
          h["1/1"],
          bg[color],
          opacityStyle[opacity],
          bgPosition[position],
          bgSize[size],
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
