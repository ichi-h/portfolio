import { Text } from "portfolio-ui";


import { Layout } from "@/components/layout";
import { Title } from "@/components/title";

import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: `Contact - ichi-h.com`,
  viewport: "width=device-width,initial-scale=1",
  robots: "index, follow",
  "og:url": `https://ichi-h.com/contact`,
  "og:type": "article",
  "og:title": `Contact - ichi-h.com`,
  "og:image": "https://static.ichi-h.com/bg_ogp.jpg",
  "og:site_name": "ichi-h.com",
  "og:description": "To live is to think and create.",
  "twitter:title": `Contact - ichi-h.com`,
  "twitter:card": "summary_large_image",
  "twitter:description": "To live is to think and create.",
  "twitter:domain": "ichi-h.com",
  "twitter:site": "@ichi_h3",
});

export default function Index() {
  return (
    <Layout>
      <div>
        <Title>Contact</Title>
        <Text fontSize="4" color="mono.900">
          Coming soon...
        </Text>
      </div>
    </Layout>
  );
}
