import { Background } from "portfolio-ui";
import { ComponentProps, FC } from "react";

import { Footer } from "./footer";
import {
  layoutParentStyle,
  layoutStyle,
  layoutBgStyle,
  layoutContentStyle,
} from "./layout.css";
import { Nav } from "./nav";

type Props = ComponentProps<"div">;

export const Layout: FC<Props> = ({ children }) => (
  <div className={layoutParentStyle}>
    <div className={layoutStyle}>
      <Nav />
      <Background
        classNameForBg={layoutBgStyle}
        color="mono.50"
        layoutPosition="absolute"
      >
        <div className={layoutContentStyle}>{children}</div>
      </Background>
      <Footer useCC={true} />
    </div>
  </div>
);
