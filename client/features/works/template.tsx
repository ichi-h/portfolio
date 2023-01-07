import { Article } from "@/api/articles/getAllArticles";
import HomeImage from "@/public/assets/images/home.jpg";
import { THEME } from "@/ui/base";
import { GlobalNav } from "@/ui/components/global-nav";
import { Hover } from "@/ui/parts/animation/hover";
import { Box } from "@/ui/parts/box/box";
import { Grid } from "@/ui/parts/grid/grid";
import { UpdateIcon } from "@/ui/parts/icons/update";
import { Thumbnail } from "@/ui/parts/image/thumbnail";
import { BgImageLayout } from "@/ui/parts/layouts/bg-image-layout";
import { Stack } from "@/ui/parts/stack/stack";
import { Headline } from "@/ui/parts/text/headline";
import { Link } from "@/ui/parts/text/link";
import { Text } from "@/ui/parts/text/text";

interface Props {
  articles: Article[];
}

export const WorksTemplate = (props: Props) => {
  const revisedAt = (date: string) => {
    const d = new Date(date);
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
  };

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
          <Grid
            gridTemplateColumns="repeat(4, 1fr)"
            gridTemplateRows="1fr"
            gap={THEME.size.xl2}
            width="100%"
          >
            {props.articles.map((article) => (
              <Hover key={article.id} transition="0.1s">
                <Link
                  to={`/works/${article.category}/${article.slug}`}
                  color={THEME.color.mono["000"]}
                  textDecoration="none"
                >
                  <Box
                    isShadow={true}
                    padding={THEME.size.md}
                    borderRadius={THEME.size.xs3}
                    width="100%"
                  >
                    <Thumbnail
                      src={article.thumbnailUrl}
                      alt={article.title}
                      width="100%"
                      height="100px"
                    />
                    <Headline level={2} fontSize={THEME.size.xl}>
                      {article.title}
                    </Headline>
                    <Box align="right">
                      <Text fontSize={THEME.size.xs}>
                        <UpdateIcon
                          width={THEME.size.sm}
                          height={THEME.size.sm}
                        />{" "}
                        {revisedAt(article.revisedAt)}
                      </Text>
                    </Box>
                  </Box>
                </Link>
              </Hover>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </BgImageLayout>
  );
};
