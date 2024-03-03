import { Background as Bg } from "portfolio-ui";
import { ComponentProps, FC } from "react";

import { backgroundParentStyle, backgroundChildStyle } from "./background.css";

type Props = ComponentProps<"div">;

export const Background: FC<Props> = ({ children }) => {
  return (
    <Bg
      className={backgroundParentStyle}
      classNameForBg={backgroundChildStyle}
      src="/bg.webp"
      opacity={80}
      layoutPosition="fixed"
    >
      {children}
    </Bg>
  );
};
