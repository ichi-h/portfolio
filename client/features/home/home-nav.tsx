import { useState } from "react";

import { useMounted } from "@/lib/react/useMounted";
import Me from "@/public/assets/images/me.jpg";
import { THEME } from "@/ui/base";
import { Fade } from "@/ui/parts/animation/fade";
import { Hover } from "@/ui/parts/animation/hover";
import { Box } from "@/ui/parts/box/box";
import { Avatar } from "@/ui/parts/image/avatar";
import { Stack } from "@/ui/parts/stack/stack";
import { Headline } from "@/ui/parts/text/headline";
import { Link } from "@/ui/parts/text/link";

import { FADE_MANAGER } from "./fade-manager";

export const HomeNav = () => {
  const [isDisplay, setIsDisplay] = useState(false);

  useMounted(() => {
    setTimeout(() => setIsDisplay(true), FADE_MANAGER.CONTENT);
  });

  return (
    <Fade isDisplay={isDisplay} transition={FADE_MANAGER.ANIMATION_TIME}>
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transformTranslate="translate(-50%, -50%)"
      >
        <Stack direction="column" justify="center" align="center" gap="md">
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
          <Stack gap="md">
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
          </Stack>
        </Stack>
      </Box>
    </Fade>
  );
};
