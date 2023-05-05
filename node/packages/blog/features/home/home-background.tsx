import { useState } from "react";

import { useMounted } from "@/hooks/use-mounted";
import HomeImage from "@/public/assets/images/home.jpg";
import { Fade } from "@/ui/parts/animation/fade";
import { BgImageLayout } from "@/ui/parts/layouts/bg-image-layout";

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
      <BgImageLayout src={HomeImage.src}>{props.children}</BgImageLayout>
    </Fade>
  );
};
