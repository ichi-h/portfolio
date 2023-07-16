import { Box } from "@/ui/parts/box/box";

import { HomeBackground } from "./home-background";
import { HomeFooter } from "./home-footer";
import { HomeNav } from "./home-nav";

export const HomeTemplate = () => {
  return (
    <HomeBackground>
      <Box position="relative" height="100vh">
        <HomeNav />
        <HomeFooter />
      </Box>
    </HomeBackground>
  );
};
