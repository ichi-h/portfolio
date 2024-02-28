import { type MetaFunction } from "@remix-run/cloudflare";
import { Avatar, GitHubIcon, Icon, Link, Text, XIcon } from "portfolio-ui";

import me from "@/assets/me_512x512.webp";
import { Hr } from "@/components/hr";
import { Layout } from "@/components/layout";
import { Title } from "@/components/title";
import * as styles from "@/styles/pages/me.css";
import { useEnv } from "@/utils/env";

export const meta: MetaFunction = () => [
  { title: "Me - ichi-h.com", charSet: "utf-8" },
  {
    name: "viewport",
    content: "width=device-width,initial-scale=1",
  },
  {
    name: "robots",
    content: "index, follow",
  },
  {
    property: "og:url",
    content: "https://ichi-h.com/me",
  },
  {
    property: "og:type",
    content: "article",
  },
  {
    property: "og:title",
    content: "Me - ichi-h.com",
  },
  {
    property: "og:image",
    content: `${useEnv().APP_URL}/top_ogp.webp`,
  },
  {
    property: "og:site_name",
    content: "ichi-h.com",
  },
  {
    property: "og:description",
    content: "To live is to think and create.",
  },
  {
    name: "twitter:title",
    content: "Me - ichi-h.com",
  },
  {
    name: "twitter:card",
    content: "summary_large_image",
  },
  {
    name: "twitter:description",
    content: "To live is to think and create.",
  },
  {
    name: "twitter:domain",
    content: "ichi-h.com",
  },
  {
    name: "twitter:site",
    content: "@ichi_h3",
  },
];

export default function Index() {
  return (
    <Layout>
      <div className={styles.layout}>
        <Title>About me</Title>
        <Avatar className={styles.avatar} src={me} size={64} />
        <Text className={styles.name} color="mono.900">
          ichi-h
        </Text>
        <Text className={styles.subtext} color="mono.900">
          考えること。作ること。
        </Text>
        <div className={styles.snsLinks}>
          <Link
            className={styles.snsLink}
            href="https://github.com/ichi-h"
            openInNewTab
          >
            <Icon className={styles.snsIcon} icon={GitHubIcon} />
          </Link>
          <Link
            className={styles.snsLink}
            href="https://twitter.com/ichi_h3"
            openInNewTab
          >
            <Icon className={styles.snsIcon} icon={XIcon} />
          </Link>
        </div>
        <Hr />
        <Text fontSize="4" color="mono.900">
          Coming soon...
        </Text>
      </div>
    </Layout>
  );
}
