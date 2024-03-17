import { json } from "@remix-run/cloudflare";
import { LinksFunction } from "@remix-run/cloudflare";
import { useLoaderData, useNavigate } from "@remix-run/react";
import codeStyle from "highlight.js/styles/base16/snazzy.min.css?url";
import {
  Article,
  Button,
  Icon,
  PublishIcon,
  Text,
  UpdateIcon,
} from "portfolio-ui";
import { Suspense, lazy } from "react";

import "@/components/linkCard.css";

import { getWork } from "@/api/works/show";
import { Title } from "@/components/title";
import type { Work } from "@/model/work";
import { useEnv } from "@/utils/env";

import { parseMd2Html } from "./parseMd2Html";
import * as styles from "./route.css";

import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";

export type Model = {
  work: Work;
  status: "ok" | "error";
};

export const init: Model = {
  work: {
    slug: "",
    category: "philosophy",
    title: "",
    description: "",
    body: "",
    thumbnailUrl: "",
    languages: [],
    publishedAt: "",
    updatedAt: "",
  },
  status: "ok",
} as const;

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: codeStyle,
  },
];

export const loader = async ({ params, context }: LoaderFunctionArgs) => {
  if (!params.slug) {
    return json({ ...init, status: "error" });
  }

  const resp = await getWork({
    // FIXME: remove any type
    username: (context.cloudflare.env as any).BASIC_AUTH_USERNAME,
    password: (context.cloudflare.env as any).BASIC_AUTH_PASSWORD,
  })(params.slug);

  if (resp.status === "error") {
    return json({ ...init, status: "error" });
  }

  const body = await parseMd2Html(resp.value.body);

  return json({
    work: {
      ...resp.value,
      body,
    },
    status: "ok",
  });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: `${data?.work.title} - ichi-h.com`, charSet: "utf-8" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  { name: "robots", content: "index, follow" },
  {
    property: "og:url",
    content: `https://ichi-h.com/works/${data?.work.slug}`,
  },
  { property: "og:type", content: "article" },
  { property: "og:title", content: `${data?.work.title} - ichi-h.com` },
  {
    property: "og:image",
    content: `${useEnv().OG_IMAGE_SERVER_URL}?title=${data?.work.title}`,
  },
  { property: "og:site_name", content: "ichi-h.com" },
  { property: "og:description", content: data?.work.description },
  { name: "twitter:title", content: `${data?.work.title} - ichi-h.com` },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:description", content: data?.work.description },
  { name: "twitter:domain", content: "ichi-h.com" },
  { name: "twitter:site", content: "@ichi_h3" },
];

export default function Index() {
  const { work } = useLoaderData<typeof loader>();

  const navigate = useNavigate();

  const clickCategory = () => {
    navigate(`/works?category=${work.category}`);
  };

  const Highlight = lazy(() => import("./Highlight.client"));

  return (
    <>
      <div className={styles.layout}>
        <Title>{work.title}</Title>
        <div className={styles.matter}>
          <Button rounded={true} size="sm" onClick={clickCategory}>
            # {work.category}
          </Button>
        </div>
        <div className={styles.matter}>
          <div className={styles.date}>
            <Icon icon={PublishIcon} />
            <Text color="mono.900">{work.publishedAt}</Text>
          </div>
          <div className={styles.date}>
            <Icon icon={UpdateIcon} />
            <Text color="mono.900">{work.updatedAt}</Text>
          </div>
        </div>
        <Article dangerouslySetInnerHTML={{ __html: work.body }} />
      </div>
      <Suspense fallback={<></>}>
        <Highlight work={work} />
      </Suspense>
    </>
  );
}
