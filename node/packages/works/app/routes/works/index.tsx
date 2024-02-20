import { json, LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData, useNavigate, Link as _Link } from "@remix-run/react";
import { Paragraph, Radio, Text, Link, Icon, UpdateIcon } from "portfolio-ui";
import { useState } from "react";

import { Hr } from "@/components/hr";
import { Title } from "@/components/title";
import { Category } from "@/model/category";
import * as styles from "@/styles/works";

import { init } from "./__hooks/data";
import { update, useUpdate } from "./__hooks/update";

import type { MetaFunction } from "@remix-run/cloudflare";

export const loader = async ({ request }: LoaderArgs) => {
  const { searchParams } = new URL(request.url);
  const category = (searchParams.get("category") ?? null) as Category | null;
  const { newModel: tmpModel, cmd } = update(init, {
    type: "setCategory",
    category,
  });
  if (!cmd) {
    return json({
      init: tmpModel,
    });
  }

  const next = await cmd();
  const { newModel } = update(tmpModel, next);
  return json({
    init: newModel,
  });
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Works - ichi-h.com",
  viewport: "width=device-width,initial-scale=1",
  robots: "index, follow",
  "og:url": "https://ichi-h.com/works",
  "og:type": "article",
  "og:title": "Works - ichi-h.com",
  "og:image": "https://static.ichi-h.com/bg_ogp.jpg",
  "og:site_name": "ichi-h.com",
  "og:description": "To live is to think and create.",
  "twitter:title": "Works - ichi-h.com",
  "twitter:card": "summary_large_image",
  "twitter:description": "To live is to think and create.",
  "twitter:domain": "ichi-h.com",
  "twitter:site": "@ichi_h3",
});

export default function Index() {
  const { init } = useLoaderData<typeof loader>();
  const [model, setModel] = useState(init);
  const send = useUpdate(model, setModel);

  const navigate = useNavigate();

  const checked = (category: Category) => () => {
    send({ type: "setCategory", category });
    navigate({ search: `?category=${category}` });
  };

  return (
    <div className={styles.layout}>
      <Title>Works</Title>
      <div className={styles.radioGroup}>
        <Radio
          name="category"
          onChange={checked("development")}
          value="development"
          defaultChecked={model.category === "development"}
        >
          <Text className={styles.radioLabel}>Development</Text>
        </Radio>
        <Radio
          name="category"
          onChange={checked("music")}
          value="music"
          defaultChecked={model.category === "music"}
        >
          <Text className={styles.radioLabel}>Music</Text>
        </Radio>
        <Radio
          name="category"
          onChange={checked("photograph")}
          value="photograph"
          defaultChecked={model.category === "photograph"}
        >
          <Text className={styles.radioLabel}>Photograph</Text>
        </Radio>
        <Radio
          name="category"
          onChange={checked("philosophy")}
          value="philosophy"
          defaultChecked={model.category === "philosophy"}
        >
          <Text className={styles.radioLabel}>Philosophy</Text>
        </Radio>
      </div>
      <Hr />
      {model.worksLoader === "loading" && (
        <Paragraph align="center">読み込み中……</Paragraph>
      )}
      {model.worksLoader === "error" && (
        <Paragraph align="center">
          エラーが発生しました。時間をおいて再度お試しください。
        </Paragraph>
      )}
      {model.worksLoader === "idle" && model.works.length === 0 && (
        <Paragraph align="center">検索結果は0件です。</Paragraph>
      )}
      {model.worksLoader === "idle" && model.works.length > 0 && (
        <div className={styles.cardGrid}>
          {model.works.map((work) => (
            <Link
              className={styles.cardLink}
              key={work.slug}
              as={_Link}
              asProps={{ to: `/works/${work.slug}` }}
              decoration="none"
            >
              <div className={styles.card}>
                <div className={styles.cardLayout}>
                  <img
                    className={styles.cardThumbnail}
                    src={
                      work.thumbnailUrl ||
                      `${BFF_SERVER_URL}/ogp?title=${work.title}`
                    }
                    alt={work.title}
                  />
                  <div className={styles.cardPublishedAt}>
                    <Icon size={3} icon={UpdateIcon} />
                    <Text fontSize="3" color="mono.900">
                      {work.publishedAt}
                    </Text>
                  </div>
                  <Paragraph
                    overflow="hidden"
                    textOverflow="ellipsis"
                    lineClamp={3}
                  >
                    <Text className={styles.cardTitle}>{work.title}</Text>
                  </Paragraph>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
