import { useState } from "react";

import { useMounted } from "@/hooks/use-mounted";
import Me from "@/public/assets/images/me.jpg";
import { THEME } from "@/ui/base";
import { Fade } from "@/ui/parts/animation/fade";
import { Hover } from "@/ui/parts/animation/hover";
import { Avatar } from "@/ui/parts/image/avatar";
import { Headline } from "@/ui/parts/text/headline";
import { Link } from "@/ui/parts/text/link";

import { FADE_MANAGER } from "./fade-manager";
import * as style from "./home-nav.style";

export const HomeNav = () => {
  const [isDisplay, setIsDisplay] = useState(false);

  useMounted(() => {
    setTimeout(() => setIsDisplay(true), FADE_MANAGER.CONTENT);
  });

  return (
    <Fade isDisplay={isDisplay} transition={FADE_MANAGER.ANIMATION_TIME}>
      <div className={style.homeNavWrapperStyle}>
        <div className={style.homeNavStyle}>
          <Hover>
            <Link to="/me">
              <Avatar
                src={Me.src}
                width="180px"
                height="180px"
                isShadow={true}
              />
            </Link>
          </Hover>
          <Headline level={1} color={THEME.color.mono["900"]}>
            ichi-h.com
          </Headline>
          <div className={style.homeNavLinksStyle}>
            <Link
              to="/works?tags=development"
              color={THEME.color.mono["900"]}
              fontSize={THEME.size.xl3}
            >
              Development
            </Link>
            <Link
              to="/works?tags=music"
              color={THEME.color.mono["900"]}
              fontSize={THEME.size.xl3}
            >
              Music
            </Link>
            <Link
              to="/works?tags=photograph"
              color={THEME.color.mono["900"]}
              fontSize={THEME.size.xl3}
            >
              Photograph
            </Link>
            <Link
              to="/works?tags=thought"
              color={THEME.color.mono["900"]}
              fontSize={THEME.size.xl3}
            >
              Thought
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};
