import { Avatar, GitHubIcon, Icon, Link, Text, XIcon } from "portfolio-ui";

import me from "@/assets/me_512x512.webp";
import { Hr } from "@/components/hr";
import { Layout } from "@/components/layout";
import { Title } from "@/components/title";
import * as styles from "@/styles/me.css";

import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: `Me - ichi-h.com`,
  viewport: "width=device-width,initial-scale=1",
  robots: "index, follow",
  "og:url": `https://ichi-h.com/me`,
  "og:type": "article",
  "og:title": `Me - ichi-h.com`,
  "og:image": `${APP_URL}/top_ogp.webp`,
  "og:site_name": "ichi-h.com",
  "og:description": "To live is to think and create.",
  "twitter:title": `Me - ichi-h.com`,
  "twitter:card": "summary_large_image",
  "twitter:description": "To live is to think and create.",
  "twitter:domain": "ichi-h.com",
  "twitter:site": "@ichi_h3",
});

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
