import Furin from "@/public/assets/images/furin.webp";
import Me from "@/public/assets/images/me.jpg";
import { THEME } from "@/ui/base";
import { Avatar } from "@/ui/parts/image/avatar";
import { BgImageLayout } from "@/ui/parts/layouts/bg-image-layout";
import { Stack } from "@/ui/parts/stack/stack";
import { Anchor } from "@/ui/parts/text/anchor";
import { Headline } from "@/ui/parts/text/headline";

export const HomeTemplate = () => {
  return (
    <BgImageLayout src={Furin.src}>
      <Stack
        direction="column"
        justify="center"
        align="center"
        gap={THEME.size.md}
        height="100vh"
      >
        <Avatar
          src={Me.src}
          width="180px"
          height="180px"
          shadow={`4px 4px 8px ${THEME.color.mono["000"]}`}
        />
        <Headline level={1} color={THEME.color.mono["900"]}>
          ichi-h
        </Headline>
        <Stack gap={THEME.size.md}>
          <Anchor
            type="link"
            to="/blog"
            color={THEME.color.mono["900"]}
            fontSize={THEME.size.xl2}
          >
            Blog
          </Anchor>
          <Anchor
            type="link"
            to="#"
            color={THEME.color.mono["900"]}
            fontSize={THEME.size.xl2}
          >
            Development
          </Anchor>
          <Anchor
            type="link"
            to="#"
            color={THEME.color.mono["900"]}
            fontSize={THEME.size.xl2}
          >
            Music
          </Anchor>
          <Anchor
            type="link"
            to="#"
            color={THEME.color.mono["900"]}
            fontSize={THEME.size.xl2}
          >
            Photograph
          </Anchor>
        </Stack>
      </Stack>
    </BgImageLayout>
  );
};
