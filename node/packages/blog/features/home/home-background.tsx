import { useState } from "react";

import { useMounted } from "@/hooks/use-mounted";
import { DefaultLayout } from "@/ui/components/layouts";
import { Fade } from "@/ui/parts/animation/fade";

import { FADE_MANAGER } from "./fade-manager";

interface Props {
  children: React.ReactNode;
}

export const HomeBackground = (props: Props) => {
  const [isDisplay, setIsDisplay] = useState(false);

  useMounted(() => {
    setTimeout(() => setIsDisplay(true), FADE_MANAGER.BACKGROUND);
  });

  return (
    <Fade isDisplay={isDisplay} transition={FADE_MANAGER.ANIMATION_TIME}>
      <DefaultLayout>{props.children}</DefaultLayout>
    </Fade>
  );
};
