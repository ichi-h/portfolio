import { Box } from "@/ui/parts/box/box";
import { SearchIcon } from "@/ui/parts/icons/search";
import { Stack } from "@/ui/parts/stack/stack";
import { Link } from "@/ui/parts/text/link";

import { THEME } from "../base";
import { NoStyleButton } from "../parts/button/no-style-button";

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

  const openSearchDialog = () => console.log("open");

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
          sDirection="column"
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
          <Stack gap="lg" align="center">
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
            <NoStyleButton onClick={openSearchDialog}>
              <SearchIcon
                width={THEME.size.xl3}
                height={THEME.size.xl3}
                color={THEME.color.mono[900]}
              />
            </NoStyleButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
