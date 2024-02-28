import { type MetaFunction } from "@remix-run/cloudflare";
import { Text } from "portfolio-ui";

import { Layout } from "@/components/layout";
import { Title } from "@/components/title";
import { useEnv } from "@/utils/env";

export const meta: MetaFunction = () => [
  { title: "Contact - ichi-h.com", charSet: "utf-8" },
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
    content: "https://ichi-h.com/contact",
  },
  {
    property: "og:type",
    content: "article",
  },
  {
    property: "og:title",
    content: "Contact - ichi-h.com",
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
    content: "Contact - ichi-h.com",
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
      <div>
        <Title>Contact</Title>
        <Text fontSize="4" color="mono.900">
          Coming soon...
        </Text>
      </div>
    </Layout>
  );
}
