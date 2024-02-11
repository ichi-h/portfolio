import { json, LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData, useNavigate } from "@remix-run/react";
import {
  Article,
  Button,
  Headline,
  Icon,
  PublishIcon,
  Text,
  UpdateIcon,
} from "portfolio-ui";

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

  const navigate = useNavigate();

  const clickCategory = () => {
    navigate(`/works?category=${work.category}`);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.heading}>
        <Headline level="1">{work.title}</Headline>
      </div>
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
