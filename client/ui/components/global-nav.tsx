import { Box } from "@/ui/parts/box/box";
import { Stack } from "@/ui/parts/stack/stack";
import { Link } from "@/ui/parts/text/link";

import { THEME } from "../base";

export const GlobalNav = () => {
  return (
    <Box
      type="nav"
      width="100%"
      padding={`${THEME.size.md} ${THEME.size.none}`}
    >
      <Stack justify="center">
        <Stack
          justify="space-between"
          align="center"
          width={`${THEME.breakPoint.lg}px`}
        >
          <Box>
            <Link
              to="/"
              fontSize={THEME.size.xl3}
              color={THEME.color.mono[900]}
            >
              ichi-h.com
            </Link>
          </Box>
          <Stack gap={THEME.size.lg}>
            <Link
              to="/works"
              fontSize={THEME.size.xl3}
              color={THEME.color.mono[900]}
            >
              Works
            </Link>
            <Link
              to="/me"
              fontSize={THEME.size.xl3}
              color={THEME.color.mono[900]}
            >
              Me
            </Link>
            <Link
              to="/contact"
              fontSize={THEME.size.xl3}
              color={THEME.color.mono[900]}
            >
              Contact
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
