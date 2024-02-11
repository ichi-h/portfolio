import { json, LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { Article, Headline } from "portfolio-ui";

import * as styles from "@/styles/worksSlug";

import { init, Message, Model } from "./__hooks/data";
import { update } from "./__hooks/update";

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

export default function Index() {
  const { work } = useLoaderData<typeof loader>();

  return (
    <>
      <div className={styles.heading}>
        <Headline level="1">{work.title}</Headline>
      </div>
      <Article dangerouslySetInnerHTML={{ __html: work.body }} />
    </>
  );
}
