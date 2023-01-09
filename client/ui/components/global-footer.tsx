import { THEME } from "@/ui/base";
import { Box } from "@/ui/parts/box/box";
import { Stack } from "@/ui/parts/stack/stack";
import { Anchor } from "@/ui/parts/text/anchor";
import { Text } from "@/ui/parts/text/text";

export const GlobalFooter = () => {
  return (
    <Box
      type="footer"
      width="100%"
      padding={`${THEME.size.md} ${THEME.size.none}`}
      align="center"
    >
      <Stack direction="column" gap={THEME.size.xs3}>
        <Anchor
          href="http://creativecommons.org/licenses/by/4.0/"
          rel="license"
          blank={true}
        >
          <img
            alt="Creative Commons License"
            src="https://i.creativecommons.org/l/by/4.0/88x31.png"
          />
        </Anchor>
        <Text color={THEME.color.mono[900]}>
          This work is licensed under a{" "}
          <Anchor
            href="http://creativecommons.org/licenses/by/4.0/"
            rel="license"
            blank={true}
          >
            Creative Commons Attribution 4.0 International License
          </Anchor>
          .
        </Text>
        <Text color={THEME.color.mono[900]}>
          Copyright © {new Date().getFullYear()} ichi-h All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
};
