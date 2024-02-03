import clsx from "clsx";
import { COLOR } from "portfolio-styles";
import { ComponentProps } from "react";

import { w, h } from "./icon.css";

import { TIcon } from ".";

type Props = {
  icon: TIcon;
  size?: keyof typeof w;
  color?: keyof typeof COLOR;
} & ComponentProps<"div">;

export const Icon = ({ className, icon, size = 4, color, ...props }: Props) => {
  const Component = icon;
  return (
    <div className={clsx([w[size], h[size], className])} {...props}>
      <Component color={color} />
    </div>
  );
};
