import HomeImage from "@/public/assets/images/home.jpg";
import { THEME } from "@/ui/base";
import { GlobalNav } from "@/ui/components/global-nav";
import { Box } from "@/ui/parts/box/box";
import { BgImageLayout } from "@/ui/parts/layouts/bg-image-layout";
import { Stack } from "@/ui/parts/stack/stack";

import { GlobalFooter } from "../global-footer";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BgImageLayout src={HomeImage.src}>
      <Stack direction="column" gap={THEME.size.md}>
        <Box>
          <GlobalNav />
          <Stack justify="center" align="center" width="100%">
            <Stack
              direction="column"
              gap={THEME.size.md}
              backgroundColor={`${THEME.color.mono[900]}${THEME.color.opacity[700]}`}
              borderRadius={THEME.size.xs3}
              padding={`${THEME.size.xl3}`}
              width="100%"
              maxWidth={`${THEME.breakPoint.lg}px`}
            >
              {children}
            </Stack>
          </Stack>
        </Box>
        <GlobalFooter />
      </Stack>
    </BgImageLayout>
  );
};
