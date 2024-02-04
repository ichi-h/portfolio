import clsx from "clsx";
import * as styles from "portfolio-styles/components/radio.css";
import { ComponentProps, forwardRef } from "react";

type Props = {
  children?: React.ReactNode;
} & ComponentProps<"input">;

const _Radio = forwardRef<HTMLInputElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <label className={styles.radioLabel}>
        <input
          {...props}
          ref={ref}
          type="radio"
          className={clsx([styles.radio, className])}
        />
        <div className={styles.radioMarker} />
        {children}
      </label>
    );
  },
);

_Radio.displayName = "Radio";

export const Radio = _Radio;
