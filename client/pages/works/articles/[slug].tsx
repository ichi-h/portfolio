import hljs from "highlight.js";
import Head from "next/head";

import { getArticle } from "@/api/articles/getArticle";
import { ARTICLE_SLUGS } from "@/constants/articlePaths";
import { Article } from "@/core/entities/article";
import { useMounted } from "@/lib/react/useMounted";
import { mdToHtml } from "@/lib/remark/convert";
import { THEME } from "@/ui/base";
import { ArticleWorkHtml } from "@/ui/components/article-work-html";
import { DefaultLayout } from "@/ui/components/layouts/default";
import { Budge } from "@/ui/parts/budge";
import { PublishIcon } from "@/ui/parts/icons/publish";
import { UpdateIcon } from "@/ui/parts/icons/update";
import { Stack } from "@/ui/parts/stack/stack";
import { Headline } from "@/ui/parts/text/headline";
import { Link } from "@/ui/parts/text/link";
import { Text } from "@/ui/parts/text/text";
import { formatDate } from "@/utils/formatDate";

import type { InferGetStaticPropsType, NextPage } from "next";

export async function getStaticPaths() {
  return {
    paths: ARTICLE_SLUGS.map((slug) => ({
      params: { slug },
    })),
    fallback: true,
  };
}

interface StaticContext {
  params: {
    slug: string;
  };
}

export const getStaticProps = async (context: StaticContext) => {
  const { slug } = context.params;
  const response = await getArticle(slug);
  switch (response.which) {
    case "left":
      return {
        props: {
          article: {} as Article,
          body: "",
          message: response.value.message,
        },
        notFound: true,
      };
    case "right":
      const body = await mdToHtml(response.value.body);
      console.log(body);
      return {
        props: { article: response.value, body, message: "" },
        notFound: false,
      };
  }
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ArticlePage: NextPage<Props> = ({
  article,
  body,
}: {
  article: Article;
  body: string;
}) => {
  useMounted(() => {
    if (typeof window === "undefined") return;
    hljs.highlightAll();
  });
  return (
    <>
      <Head>
        <title>{article.title} - ichi-h.com</title>
        <link rel="stylesheet" href="/assets/css/atom-one-dark.min.css" />
        <script src="/assets/js/highlight.min.js" defer />
      </Head>
      <DefaultLayout>
        <Headline level={1} fontSize={THEME.size.xl4}>
          {article.title}
        </Headline>
        <Stack gap={THEME.size.md}>
          {article.tags.map((tag) => (
            <Link key={tag} to={`/works?tags=${tag}`} textDecoration="none">
              <Budge>{tag}</Budge>
            </Link>
          ))}
        </Stack>
        <Stack width="100%" justify="flex-end" gap={THEME.size.xs2}>
          <Text>
            <PublishIcon /> {formatDate(article.publishedAt)}
          </Text>
          <Text>
            <UpdateIcon /> {formatDate(article.revisedAt)}
          </Text>
        </Stack>
        <ArticleWorkHtml html={body} />
      </DefaultLayout>
    </>
  );
};

export default ArticlePage;
