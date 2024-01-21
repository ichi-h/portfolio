import clsx from "clsx";
import { ComponentProps } from "react";

import { COLOR } from "@/constants";
import * as s from "@/styles";

import { TIcon } from ".";

type Props = {
  icon: TIcon;
  size?: keyof typeof s.w;
  color?: keyof typeof COLOR;
} & ComponentProps<"div">;

export const Icon = ({ className, icon, size = 4, color, ...props }: Props) => {
  const Component = icon;
  return (
    <div className={clsx([s.w[size], s.h[size], className])} {...props}>
      <Component color={color} />
    </div>
  );
};
