import hljs from "highlight.js";
import python from "highlight.js/lib/languages/python";
import Head from "next/head";
import OGPBG from "public/assets/images/ogp_bg.webp";

import { getWork } from "@/api/works/getWork";
import { ARTICLE_SLUGS } from "@/constants/articlePaths";
import { Work } from "@/core/entities/work";
import { useMounted } from "@/lib/react/useMounted";
import { mdToHtml } from "@/lib/remark/convert";
import { THEME } from "@/ui/base";
import { ArticleHtml } from "@/ui/components/article-html";
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

hljs.registerLanguage("python", python);

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
  const response = await getWork(slug);
  switch (response.which) {
    case "left":
      return {
        props: {
          work: {} as Work,
          articleBody: "",
          message: response.value.message,
        },
        notFound: true,
      };
    case "right":
      const articleBody = await mdToHtml(
        response.value.article ? response.value.article.body : ""
      );
      return {
        props: { work: response.value, articleBody, message: "" },
        notFound: false,
      };
  }
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ArticlePage: NextPage<Props> = ({
  work,
  articleBody,
}: {
  work: Work;
  articleBody: string;
}) => {
  useMounted(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <Head>
        <title>{work.title} - ichi-h.com</title>
        <meta name="description" content={work.description} />
        <meta name="keywords" content={work.tags.join(",")} />
        <meta property="og:title" content={`${work.title} - ichi-h.com`} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://ichi-h.com/works/${work.slug}`}
        />
        <meta property="og:image" content={OGPBG.src} />
        <meta property="og:site_name" content="ichi-h.com" />
        <meta property="og:description" content={work.description} />
      </Head>
      <DefaultLayout>
        <Headline level={1} fontSize={THEME.size.xl4}>
          {work.title}
        </Headline>
        <Stack justify="center" gap="md">
          {work.tags.map((tag) => (
            <Link key={tag} to={`/works?tags=${tag}`} textDecoration="none">
              <Budge>{tag}</Budge>
            </Link>
          ))}
        </Stack>
        <Stack width="100%" justify="end" gap="xs2">
          <Text>
            <PublishIcon /> {formatDate(work.publishedAt)}
          </Text>
          <Text>
            <UpdateIcon /> {formatDate(work.revisedAt)}
          </Text>
        </Stack>
        <ArticleHtml html={articleBody} />
      </DefaultLayout>
    </>
  );
};

export default ArticlePage;
