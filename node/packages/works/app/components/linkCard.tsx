import { Icon, OpenInNewIcon, Paragraph, Text } from "portfolio-ui";
import { FC } from "react";

import { linkCardStyles } from "@/styles";

type Props = {
  href: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
};

export const LinkCard: FC<Props> = ({
  href,
  title,
  description,
  thumbnailUrl,
}) => (
  <div className={linkCardStyles.hoverAnimation}>
    <a
      className={linkCardStyles.unstyledAnchor}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className={linkCardStyles.linkCard}>
        <div className={linkCardStyles.layout}>
          <div className={linkCardStyles.content}>
            <Paragraph textOverflow="ellipsis" overflow="hidden" lineClamp={2}>
              <div className={linkCardStyles.title}>
                <Text fontSize="5" weight="bold">
                  {title}
                </Text>
                <Icon icon={OpenInNewIcon} />
              </div>
            </Paragraph>
            <Paragraph textOverflow="ellipsis" overflow="hidden" lineClamp={2}>
              <Text fontSize="4">{description}</Text>
            </Paragraph>
          </div>
          {thumbnailUrl ? (
            <div
              className={linkCardStyles.thumbnail}
              style={{ backgroundImage: `url(${thumbnailUrl})` }}
            />
          ) : (
            <div className={linkCardStyles.thumbnail}>
              <Text fontSize="4" color="mono.500">
                No Image
              </Text>
            </div>
          )}
        </div>
      </div>
    </a>
  </div>
);
