import clsx from "clsx";
import { ComponentProps } from "react";

import * as styles from "./article.css";

type Props = {
  dangerouslySetInnerHTML: {
    __html: string | TrustedHTML;
  };
} & ComponentProps<"div">;

export const Article = ({
  className,
  dangerouslySetInnerHTML,
  ...props
}: Props) => {
  return (
    <div
      className={clsx([styles.article, className])}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      {...props}
    />
  );
};
