import { Box } from "@/ui/parts/box/box";
import { Stack } from "@/ui/parts/stack/stack";
import { Link } from "@/ui/parts/text/link";

import { THEME } from "../base";

export const GlobalNav = () => {
  const links = [
    {
      to: "/works",
      text: "Works",
    },
    {
      to: "/me",
      text: "Me",
    },
    {
      to: "/contact",
      text: "Contact",
    },
  ];

  return (
    <Box
      type="nav"
      width="100%"
      padding={`${THEME.size.md} ${THEME.size.none}`}
    >
      <Stack justify="center">
        <Stack
          justify="between"
          align="center"
          width={`${THEME.breakPoint.lg}px`}
        >
          <Box>
            <Link
              to="/"
              fontSize={THEME.size.xl3}
              smFontSize={THEME.size.xl2}
              xsFontSize={THEME.size.xl}
              color={THEME.color.mono[900]}
            >
              ichi-h.com
            </Link>
          </Box>
          <Stack gap="lg">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                fontSize={THEME.size.xl3}
                smFontSize={THEME.size.xl2}
                xsFontSize={THEME.size.xl}
                color={THEME.color.mono[900]}
              >
                {link.text}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
