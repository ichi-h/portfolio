import HomeImage from "@/public/assets/images/home.jpg";
import { THEME } from "@/ui/base";
import { GlobalNav } from "@/ui/components/global-nav";
import { HorizonRole } from "@/ui/parts/horizon-role";
import { BgImageLayout } from "@/ui/parts/layouts/bg-image-layout";
import { Stack } from "@/ui/parts/stack/stack";
import { Headline } from "@/ui/parts/text/headline";

import { WorksList } from "./works-list";
import { WorksSearch } from "./works-search";
import { WorksTags } from "./works-tags";

export const WorksTemplate = () => {
  return (
    <BgImageLayout src={HomeImage.src}>
      <GlobalNav />
      <Stack justify="center" align="center" width="100%">
        <Stack
          direction="column"
          gap={THEME.size.md}
          backgroundColor={`${THEME.color.mono[900]}${THEME.color.opacity[700]}`}
          borderRadius={THEME.size.xs3}
          padding={`${THEME.size.xl3}`}
          width="100%"
          maxWidth={THEME.size.pcMaxWidth}
        >
          <Headline level={1}>Works</Headline>
          <WorksTags />
          <WorksSearch />
          <HorizonRole />
          <WorksList />
        </Stack>
      </Stack>
    </BgImageLayout>
  );
};
