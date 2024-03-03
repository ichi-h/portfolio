import { json } from "@remix-run/cloudflare";
import { useLoaderData, useNavigate } from "@remix-run/react";
import {
  Article,
  Button,
  Icon,
  PublishIcon,
  Text,
  UpdateIcon,
} from "portfolio-ui";

import { Title } from "@/components/title";
import { useEnv } from "@/utils/env";

import { init, Message, Model } from "./hooks/data";
import { update } from "./hooks/update";
import * as styles from "./route.css";

import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";

export const loader = async ({ params, context }: LoaderFunctionArgs) => {
  const loop = async (model: Model, msg: Message): Promise<Model> => {
    const { newModel, cmd } = update(model, msg);
    if (!cmd) {
      return newModel;
    }
    const next = await cmd();
    return loop(newModel, next);
  };

  if (!params.slug) {
    return json({ ...init, status: "error", env: context.env as Env });
  }
  const model = await loop(init, { type: "getWork", slug: params.slug });
  if (model.status === "error") {
    return json({ ...init, status: "error", env: context.env as Env });
  }

  return json({
    ...model,
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

export default function Index() {
  const { work } = useLoaderData<typeof loader>();

  const navigate = useNavigate();

  const clickCategory = () => {
    navigate(`/works?category=${work.category}`);
  };

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
