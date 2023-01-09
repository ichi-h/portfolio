import { useState } from "react";

import { COPY_WRITE } from "@/constants/copyright";
import { useMounted } from "@/lib/react/useMounted";
import { THEME } from "@/ui/base";
import { Fade } from "@/ui/parts/animation/fade";
import { Box } from "@/ui/parts/box/box";
import { Text } from "@/ui/parts/text/text";

import { FADE_MANAGER } from "./fade-manager";

export const HomeFooter = () => {
  const [isDisplay, setIsDisplay] = useState(false);

  useMounted(() => {
    setTimeout(() => setIsDisplay(true), FADE_MANAGER.CONTENT);
  });
  return (
    <Fade isDisplay={isDisplay} transition={FADE_MANAGER.ANIMATION_TIME}>
      <Box
        type="footer"
        position="absolute"
        bottom={THEME.size.md}
        width="100%"
        align="center"
      >
        <Text color={THEME.color.mono["900"]}>{COPY_WRITE}</Text>
      </Box>
    </Fade>
  );
};
