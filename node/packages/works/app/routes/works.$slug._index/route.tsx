import { json } from "@remix-run/cloudflare";
import { LinksFunction } from "@remix-run/cloudflare";
import { useLoaderData, useNavigate } from "@remix-run/react";
import hljs from "highlight.js";
import codeStyle from "highlight.js/styles/base16/snazzy.min.css?url";
import mermaid from "mermaid";
import {
  Article,
  Button,
  Icon,
  PublishIcon,
  Text,
  UpdateIcon,
} from "portfolio-ui";
import { useEffect, useLayoutEffect } from "react";

import "@/components/linkCard.css";

import { getWork } from "@/api/works/show";
import { Title } from "@/components/title";
import { Work } from "@/model/work";
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
    content: `${useEnv().BFF_SERVER_URL}/ogp?title=${data?.work.title}`,
  },
  { property: "og:site_name", content: "ichi-h.com" },
  { property: "og:description", content: data?.work.description },
  { name: "twitter:title", content: `${data?.work.title} - ichi-h.com` },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:description", content: data?.work.description },
  { name: "twitter:domain", content: "ichi-h.com" },
  { name: "twitter:site", content: "@ichi_h3" },
];

const extractLanguage = (html: string) => {
  const codeBlocks = html.match(/<code class="language-[^]+?">/g);
  if (!codeBlocks) return [];
  return codeBlocks
    .map((codeBlock) => {
      const res = codeBlock.match(/language-([^]+?)"/);
      if (!res) return "";
      return res[1];
    })
    .filter(Boolean)
    .filter((lang, i, self) => self.indexOf(lang) === i)
    .filter((lang) => lang !== "mermaid" && lang !== "html");
};

export default function Index() {
  const { work } = useLoaderData<typeof loader>();

  const navigate = useNavigate();

  const clickCategory = () => {
    navigate(`/works?category=${work.category}`);
  };

  const languages = extractLanguage(work.body);
  const includeMermaid = work.body.includes('<pre class="mermaid">');

  useLayoutEffect(() => {
    if (languages.length > 0) {
      Promise.all(
        languages.map(async (lang) => {
          try {
            return await import(
              `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/languages/${lang}.min.js`
            );
          } catch (_) {
            return null;
          }
        }),
      ).then((res) => {
        res.forEach((mod) => {
          if (mod) hljs.registerLanguage(mod.default.name, mod.default);
        });
      });
    }
  }, []);

  useEffect(() => {
    languages.length > 0 && hljs.highlightAll();
    includeMermaid && mermaid.initialize({ startOnLoad: true });
    return () => {
      includeMermaid && mermaid.init();
    };
  }, []);

  return (
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
  );
}
