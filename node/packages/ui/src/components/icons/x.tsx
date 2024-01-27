import { ComponentProps } from "react";

import { COLOR } from "@/constants";

import { w, h } from "./icon.css";

type Props = {
  color?: keyof typeof COLOR;
} & ComponentProps<"svg">;

export const XIcon = ({ color = "mono.900", ...props }: Props) => {
  return (
    <svg
      width={w[4]}
      height={h[4]}
      fill="none"
      viewBox="0 0 1800 1800"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect height="100%" width="100%" />
      <path
        d="m1014.2 805.8 446.7-519.3h-105.9l-387.9 450.9-309.8-450.9h-357.3l468.5 681.8-468.5 544.6h105.9l409.6-476.2 327.2 476.2h357.3zm-145 168.5-47.5-67.9-377.7-540.2h162.6l304.8 436 47.5 67.9 396.2 566.7h-162.6z"
        fill={COLOR[color]}
      />
    </svg>
  );
};
