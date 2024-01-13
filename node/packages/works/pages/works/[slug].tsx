import hljs from "highlight.js";
import python from "highlight.js/lib/languages/python";
import Head from "next/head";

import { getWork } from "@/api/works/show";
import { getAllWorkSlugs } from "@/api/works/slug";
import { useMounted } from "@/hooks/use-mounted";
import { mdToHtml } from "@/lib/remark/convert";
import { Work } from "@/model/work";
import { ArticleHtml } from "@/ui/components/article-html";
import { WithHeaderAndFooter } from "@/ui/components/layouts";
import { Budge } from "@/ui/parts/budge";
import { PublishIcon } from "@/ui/parts/icons/publish";
import { UpdateIcon } from "@/ui/parts/icons/update";
import { Stack } from "@/ui/parts/stack/stack";
import { Headline } from "@/ui/parts/text/headline";
import { Link } from "@/ui/parts/text/link";
import { Text } from "@/ui/parts/text/text";
import { formatDate } from "@/utils/date";

import type { InferGetStaticPropsType, NextPageWithLayout } from "next";

hljs.registerLanguage("python", python);

export async function getStaticPaths() {
  const resp = await getAllWorkSlugs();
  if (resp.status === "error") throw resp.value;
  return {
    paths: [...resp.value.map((slug) => ({ params: { slug } }))],
    fallback: "blocking",
  };
}

interface StaticContext {
  params: {
    slug: string;
  };
}

export const getStaticProps = async (context: StaticContext) => {
  const { slug } = context.params;
  const resp = await getWork(slug);

  if (resp.status === "error") {
    return {
      notFound: true,
    };
  }

  const body = await mdToHtml(resp.value.body);

  return {
    props: {
      work: resp.value,
      body,
      message: "",
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ArticlePage: NextPageWithLayout<Props> = ({
  work,
  body,
}: {
  work: Work;
  body: string;
}) => {
  useMounted(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <Head>
        <title>{work.title} - ichi-h.com</title>
        <meta name="description" content={work.description} />
        <meta property="og:title" content={`${work.title} - ichi-h.com`} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://ichi-h.com/works/${work.slug}`}
        />
        <meta property="og:image" content={`/api/ogp?title=${work.title}`} />
        <meta property="og:site_name" content="ichi-h.com" />
        <meta property="og:description" content={work.description} />
      </Head>
      <Headline level={1}>
        <Text align="left">{work.title}</Text>
      </Headline>
      <Stack justify="center" direction="column" gap="xs2" wrap="wrap">
        <Stack justify="end" gap="xs2" width="100%">
          <Link to={`/works?category=${work.category}`} textDecoration="none">
            <Budge>{work.category}</Budge>
          </Link>
        </Stack>
        <Stack justify="end" gap="xs2" width="100%">
          <Text>
            <PublishIcon /> {formatDate(work.publishedAt)}
          </Text>
          <Text>
            <UpdateIcon /> {formatDate(work.updatedAt)}
          </Text>
        </Stack>
      </Stack>
      <ArticleHtml html={body} />
    </>
  );
};

ArticlePage.getLayout = (page) => {
  return <WithHeaderAndFooter>{page}</WithHeaderAndFooter>;
};

export default ArticlePage;
