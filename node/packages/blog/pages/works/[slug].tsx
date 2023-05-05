import hljs from "highlight.js";
import python from "highlight.js/lib/languages/python";
import Head from "next/head";

import { getWork, Work } from "@/api/works";
import { ARTICLE_SLUGS } from "@/constants/article-paths";
import { useMounted } from "@/lib/react/use-mounted";
import { mdToHtml } from "@/lib/remark/convert";
import OGPBG from "@/public/assets/images/ogp_bg.webp";
import { ErrorResponse } from "@/types/response";
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
import { formatDate } from "@/utils/date";
import { either } from "@/utils/either";

import type { InferGetStaticPropsType, NextPageWithLayout } from "next";

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
  const onLeft = async (e: ErrorResponse) => ({
    props: {
      work: {} as Work,
      articleBody: "",
      message: e.message,
    },
    notFound: true,
  });
  const onRight = async (work: Work) => {
    const articleBody = await mdToHtml(work.article ? work.article.body : "");
    return {
      props: { work: work, articleBody, message: "" },
      notFound: false,
    };
  };
  return await either<ErrorResponse, Work, ReturnType<typeof onRight>>(onLeft)(
    onRight
  )(response);
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ArticlePage: NextPageWithLayout<Props> = ({
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
    </>
  );
};

ArticlePage.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ArticlePage;
