import { useState } from "react";

import { useMounted } from "@/hooks/use-mounted";
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
  const links = [
    {
      to: "/works?tags=development",
      text: "Development",
    },
    {
      to: "/works?tags=music",
      text: "Music",
    },
    {
      to: "/works?tags=photograph",
      text: "Photograph",
    },
    {
      to: "/works?tags=thought",
      text: "Thought",
    },
  ];

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
        width="100%"
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
          <Stack gap="md" mDirection="column">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                color={THEME.color.mono["900"]}
                fontSize={THEME.size.xl3}
              >
                {link.text}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Fade>
  );
};
