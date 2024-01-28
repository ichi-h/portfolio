import { backgroundParentStyle, backgroundChildStyle } from "portfolio-styles";
import { Background as Bg } from "portfolio-ui";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<"div">;

export const Background: FC<Props> = ({ children }) => {
  return (
    <Bg
      className={backgroundParentStyle}
      classNameForBg={backgroundChildStyle}
      src="/bg.webp"
    >
      {children}
    </Bg>
  );
};
