import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { TinySearchResult, customSearch } from "@/lib/tinysearch";
import { Box } from "@/ui/parts/box/box";
import { Dialog } from "@/ui/parts/dialog";
import { TextBox } from "@/ui/parts/form/textbox";
import { SearchIcon } from "@/ui/parts/icons/search";
import { Stack } from "@/ui/parts/stack/stack";
import { Link } from "@/ui/parts/text/link";

import { THEME } from "../base";
import { Hover } from "../parts/animation/hover";
import { NoStyleButton } from "../parts/button/no-style-button";
import { PageIcon } from "../parts/icons";
import { Text } from "../parts/text/text";

export const GlobalNav = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState<TinySearchResult[]>([]);

  const openSearchDialog = () => setIsOpen(true);
  const closeSearchDialog = () => setIsOpen(false);

  const searchWorks = (word: string) => {
    setSearchWord(word);
    const result = customSearch(word, 30);
    setSearchResult(result);
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", closeSearchDialog);
    return () => {
      router.events.off("routeChangeComplete", closeSearchDialog);
    };
  }, [router.events]);

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
            <Dialog
              isOpen={isOpen}
              onClose={closeSearchDialog}
              top="100px"
              transform="translateX(-50%)"
            >
              <Stack gap="md" direction="column">
                <TextBox
                  value={searchWord}
                  onChange={searchWorks}
                  icon={<SearchIcon />}
                  placeholder="Search works"
                />
                {searchWord === "" && searchResult.length === 0 && (
                  <Stack
                    justify="center"
                    align="center"
                    direction="column"
                    width="100%"
                    minHeight="100px"
                  >
                    <Text>検索したいワードを入力してください。</Text>
                  </Stack>
                )}
                {searchWord !== "" && searchResult.length === 0 && (
                  <Stack
                    justify="center"
                    align="center"
                    direction="column"
                    width="100%"
                    minHeight="100px"
                  >
                    <Text>お探しのものは見つかりませんでした。</Text>
                  </Stack>
                )}
                {searchResult.length !== 0 && (
                  <Stack
                    direction="column"
                    gap="md"
                    width="100%"
                    minHeight="100px"
                    maxHeight="calc(100vh - 300px)"
                  >
                    {searchResult.map((result) => (
                      <Hover key={result.url}>
                        <Link
                          to={result.url}
                          color={THEME.color.mono["000"]}
                          textDecoration="none"
                        >
                          <Stack
                            isShadow={true}
                            padding={THEME.size.md}
                            borderRadius="xs3"
                            gap="xs3"
                          >
                            <PageIcon color={THEME.color.mono["300"]} />
                            {result.title}
                          </Stack>
                        </Link>
                      </Hover>
                    ))}
                  </Stack>
                )}
              </Stack>
            </Dialog>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
