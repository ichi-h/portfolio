import { ComponentProps } from "react";

import { COLOR } from "@/constants";

import { w, h } from "./icon.css";

type Props = {
  color?: keyof typeof COLOR;
} & ComponentProps<"svg">;

export const PublishIcon = ({ color = "mono.900", ...props }: Props) => {
  return (
    <svg
      width={w[4]}
      height={h[4]}
      fill={COLOR[color]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11 20v-8.15l-2.6 2.6L7 13l5-5 5 5-1.4 1.45-2.6-2.6V20ZM4 9V6q0-.825.588-1.412Q5.175 4 6 4h12q.825 0 1.413.588Q20 5.175 20 6v3h-2V6H6v3Z" />
    </svg>
  );
};
