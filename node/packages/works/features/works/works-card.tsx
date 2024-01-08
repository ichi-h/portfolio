import { SummarizedWork } from "@/model/work";
import { THEME } from "@/ui/base";
import { Hover } from "@/ui/parts/animation/hover";
import { Box } from "@/ui/parts/box/box";
import { PublishIcon } from "@/ui/parts/icons/publish";
import { Thumbnail } from "@/ui/parts/image/thumbnail";
import { Stack } from "@/ui/parts/stack/stack";
import { Headline } from "@/ui/parts/text/headline";
import { Link } from "@/ui/parts/text/link";
import { Text } from "@/ui/parts/text/text";
import { formatDate } from "@/utils/date";

interface Props {
  work: SummarizedWork;
}

export const WorksCard = ({ work }: Props) => {
  return (
    <Hover key={work.slug}>
      <Link
        to={`/works/${work.slug}`}
        color={THEME.color.mono["000"]}
        textDecoration="none"
      >
        <Stack
          direction="column"
          justify="between"
          isShadow={true}
          padding={THEME.size.md}
          borderRadius="xs3"
          width="100%"
          height="100%"
        >
          <Stack direction="column" gap="xs3" width="100%">
            <Thumbnail
              src={`/api/ogp?title=${work.title}`}
              alt={work.title}
              width="100%"
              height="144px"
            />
            <Headline level={2}>
              <Text fontSize={THEME.size.lg} lineClamp={2}>
                {work.title}
              </Text>
            </Headline>
          </Stack>
          <Box align="right" width="100%">
            <Text fontSize={THEME.size.xs}>
              <PublishIcon width={THEME.size.sm} height={THEME.size.sm} />{" "}
              {formatDate(work.publishedAt)}
            </Text>
          </Box>
        </Stack>
      </Link>
    </Hover>
  );
};
