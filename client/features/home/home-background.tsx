import { useState } from "react";

import { useMounted } from "@/lib/react/useMounted";
import HomeImage from "@/public/assets/images/home.jpg";
import { Fade } from "@/ui/parts/animation/fade";
import { BgImageLayout } from "@/ui/parts/layouts/bg-image-layout";

import { DISPLAY_AT } from "./display-at";

interface Props {
  children: React.ReactNode;
}

export const HomeBackground = (props: Props) => {
  const [isDisplay, setIsDisplay] = useState(false);

  useMounted(() => {
    setTimeout(() => setIsDisplay(true), DISPLAY_AT.BACKGROUND);
  });

  return (
    <Fade isDisplay={isDisplay} transition="1s">
      <BgImageLayout src={HomeImage.src}>{props.children}</BgImageLayout>
    </Fade>
  );
};
