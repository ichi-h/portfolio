import * as styles from "portfolio-styles/components/icon.css";
import { COLOR } from "portfolio-styles/constants";
import { ComponentProps } from "react";

type Props = {
  color?: keyof typeof COLOR;
} & ComponentProps<"svg">;

export const OpenInNewIcon = ({ color = "mono.900", ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={styles.w[4]}
      height={styles.h[4]}
      fill={COLOR[color]}
      viewBox="0 -960 960 960"
      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H200v560h560v-240q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v240q0 33-23.5 56.5T760-120H200Zm560-584L416-360q-11 11-28 11t-28-11q-11-11-11-28t11-28l344-344H600q-17 0-28.5-11.5T560-800q0-17 11.5-28.5T600-840h240v240q0 17-11.5 28.5T800-560q-17 0-28.5-11.5T760-600v-104Z" />
    </svg>
  );
};
