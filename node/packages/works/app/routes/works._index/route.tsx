import { json } from "@remix-run/cloudflare";
import {
  useLoaderData,
  useNavigate,
  Link as _Link,
  useNavigation,
} from "@remix-run/react";
import { Paragraph, Radio, Text, Link, Icon, UpdateIcon } from "portfolio-ui";

import { getFilteredWorks } from "@/api/works/filter";
import { Hr } from "@/components/hr";
import { Title } from "@/components/title";
import type { Category } from "@/model/category";
import type { LimitNumber } from "@/model/limitNumber";
import type { Offset } from "@/model/offset";
import type { SummarizedWork } from "@/model/work";
import { useEnv } from "@/utils/env";

import * as styles from "./route.css";

import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";

export type Model = {
  offset: Offset;
  limit: LimitNumber;
  search: string;
  category: Category | undefined;
  works: SummarizedWork[];
  total: number;
  error: string;
};

export const init: Model = {
  offset: 0,
  limit: 18,
  search: "",
  category: undefined,
  works: [],
  total: 0,
  error: "",
} as const;

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") ?? "";
  const category = (searchParams.get("category") ?? undefined) as
    | Category
    | undefined;
  const offset = Number(searchParams.get("offset") ?? 0);
  const limit = 18;

  const resp = await getFilteredWorks({
    // FIXME: remove any type
    username: (context.cloudflare.env as any).BASIC_AUTH_USERNAME,
    password: (context.cloudflare.env as any).BASIC_AUTH_PASSWORD,
  })({
    search,
    category,
    offset,
    limit,
  });

  if (resp.status === "error") {
    return json<Model>({
      ...init,
      error: "Failed to get works.",
    });
  }

  const works = resp.value.works;
  const total = resp.value.total;

  return json<Model>({
    offset,
    limit,
    search,
    category,
    works,
    total,
    error: "",
  });
};

export const meta: MetaFunction<typeof loader> = ({}) => [
  { title: "Works - ichi-h.com", charSet: "utf-8" },
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
    content: "https://ichi-h.com/works",
  },
  {
    property: "og:type",
    content: "article",
  },
  {
    property: "og:title",
    content: "Works - ichi-h.com",
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
    content: "Works - ichi-h.com",
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
  const model = useLoaderData<typeof loader>();

  const navigate = useNavigate();
  const navigation = useNavigation();

  const checked = (category: Category) => () => {
    navigate({ search: `?category=${category}` });
  };

  return (
    <div className={styles.layout}>
      <Title>Works</Title>
      <div className={styles.searchMenu}>
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
      </div>
      <Hr />
      {navigation.state === "loading" && (
        <Paragraph align="center">読み込み中……</Paragraph>
      )}
      {navigation.state === "idle" && (
        <>
          {model.error ? (
            <Paragraph align="center">
              エラーが発生しました。時間をおいて再度お試しください。
            </Paragraph>
          ) : (
            <>
              {model.works.length === 0 && (
                <Paragraph align="center">検索結果は0件です。</Paragraph>
              )}
              {model.works.length > 0 && (
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
                              `${useEnv().OG_IMAGE_SERVER_URL}?title=${work.title}`
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
                            <Text className={styles.cardTitle}>
                              {work.title}
                            </Text>
                          </Paragraph>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
