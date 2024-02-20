import { json, LoaderArgs } from "@remix-run/cloudflare";
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
import * as styles from "@/styles/worksSlug";

import { init, Message, Model } from "./__hooks/data";
import { update } from "./__hooks/update";

import type { MetaFunction } from "@remix-run/cloudflare";

export const loader = async ({ params }: LoaderArgs) => {
  const loop = async (model: Model, msg: Message): Promise<Model> => {
    const { newModel, cmd } = update(model, msg);
    if (!cmd) {
      return newModel;
    }
    const next = await cmd();
    return loop(newModel, next);
  };

  if (!params.slug) {
    return json({ ...init, status: "error" });
  }
  const model = await loop(init, { type: "getWork", slug: params.slug });

  return json(model);
};

export const meta: MetaFunction<typeof loader> = ({ data: { work } }) => ({
  charset: "utf-8",
  title: `${work.title} - ichi-h.com`,
  viewport: "width=device-width,initial-scale=1",
  robots: "index, follow",
  "og:url": `https://ichi-h.com/works/${work.slug}`,
  "og:type": "article",
  "og:title": `${work.title} - ichi-h.com`,
  "og:image": `${BFF_SERVER_URL}/ogp?title=${work.title}`,
  "og:site_name": "ichi-h.com",
  "og:description": work.description,
  "twitter:title": `${work.title} - ichi-h.com`,
  "twitter:card": "summary_large_image",
  "twitter:description": work.description,
  "twitter:domain": "ichi-h.com",
  "twitter:site": "@ichi_h3",
});

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
