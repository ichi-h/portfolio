import Me from "@/public/assets/images/me.jpg";
import { THEME } from "@/ui/base";
import { ArticleHtml } from "@/ui/components/article-html";
import { Hover } from "@/ui/parts/animation/hover";
import { HorizonRole } from "@/ui/parts/horizon-role";
import { GitHubIcon } from "@/ui/parts/icons/github";
import { TwitterIcon } from "@/ui/parts/icons/twitter";
import { Avatar } from "@/ui/parts/image/avatar";
import { Stack } from "@/ui/parts/stack/stack";
import { Anchor } from "@/ui/parts/text/anchor";
import { Headline } from "@/ui/parts/text/headline";
import { Text } from "@/ui/parts/text/text";

interface Props {
  html: string;
}

export const MeTemplate = ({ html }: Props) => {
  return (
    <>
      <Headline level={1}>About me</Headline>
      <Stack align="center" direction="column" gap="md">
        <Avatar src={Me.src} width="180px" height="180px" isShadow={true} />
        <Headline level={2} fontSize={THEME.size.xl4}>
          ichi-h
        </Headline>
        <Text fontSize={THEME.size.lg} align="center">
          考えること。作ること。
          <br />
          To live is to think and create.
        </Text>
        <Stack gap="xl">
          <Hover scale="lg">
            <Anchor href="https://github.com/ichi-h" blank={true}>
              <GitHubIcon width="32" height="32" />
            </Anchor>
          </Hover>
          <Hover scale="lg">
            <Anchor href="https://twitter.com/ichi_h3" blank={true}>
              <TwitterIcon width="32" height="32" />
            </Anchor>
          </Hover>
        </Stack>
      </Stack>
      <HorizonRole />
      <ArticleHtml html={html} />
    </>
  );
};
