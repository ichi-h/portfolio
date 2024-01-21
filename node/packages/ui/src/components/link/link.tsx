import clsx from "clsx";
import { ComponentProps, ElementType } from "react";

import * as styles from "./link.css";

type Props<T extends ElementType> = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & (
  | {
      href: string;
      as?: never;
      asProps?: never;
      openInNewTab?: boolean;
    }
  | {
      href?: never;
      as: T;
      asProps: ComponentProps<T>;
      openInNewTab?: never;
    }
);

export const Link = <T extends ElementType>({
  className,
  style,
  children,
  openInNewTab,
  ...props
}: Props<T>) => {
  const isAnchor = "href" in props;
  const Component = isAnchor || !props.as ? "a" : props.as;
  const anchorProps = isAnchor
    ? {
        href: props.href,
        target: openInNewTab ? "_blank" : undefined,
        rel: openInNewTab ? "noopener noreferrer" : undefined,
      }
    : {};

  return (
    <Component
      className={clsx([styles.link, className])}
      style={style}
      {...anchorProps}
      {...props.asProps}
    >
      {children}
    </Component>
  );
};
