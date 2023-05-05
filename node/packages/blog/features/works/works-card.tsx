import { WorkSummary } from "@/api/works";
import { THEME } from "@/ui/base";
import { Hover } from "@/ui/parts/animation/hover";
import { Box } from "@/ui/parts/box/box";
import { PublishIcon } from "@/ui/parts/icons/publish";
import { UpdateIcon } from "@/ui/parts/icons/update";
import { Thumbnail } from "@/ui/parts/image/thumbnail";
import { Stack } from "@/ui/parts/stack/stack";
import { Headline } from "@/ui/parts/text/headline";
import { Link } from "@/ui/parts/text/link";
import { Text } from "@/ui/parts/text/text";
import { formatDate } from "@/utils/date";

interface Props {
  work: WorkSummary;
  order: keyof Pick<WorkSummary, "publishedAt" | "revisedAt">;
}

export const WorksCard = ({ work, order }: Props) => {
  return (
    <Hover key={work.id}>
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
          <Box width="100%">
            <Thumbnail
              src={work.thumbnailUrl}
              alt={work.title}
              width="100%"
              height="166px"
            />
            <Headline level={2} fontSize={THEME.size.lg}>
              <Text lineClamp={2}>{work.title}</Text>
            </Headline>
          </Box>
          <Box align="right" width="100%">
            {order === "publishedAt" && (
              <Text fontSize={THEME.size.xs}>
                <PublishIcon width={THEME.size.sm} height={THEME.size.sm} />{" "}
                {formatDate(work.publishedAt)}
              </Text>
            )}
            {order === "revisedAt" && (
              <Text fontSize={THEME.size.xs}>
                <UpdateIcon width={THEME.size.sm} height={THEME.size.sm} />{" "}
                {formatDate(work.revisedAt)}
              </Text>
            )}
          </Box>
        </Stack>
      </Link>
    </Hover>
  );
};
