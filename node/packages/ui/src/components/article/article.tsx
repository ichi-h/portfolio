import clsx from "clsx";
import * as styles from "portfolio-styles/components/article.css";
import { ComponentProps } from "react";

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
