import hljs from "highlight.js";
import python from "highlight.js/lib/languages/python";
import Head from "next/head";

import {
  getAllWorksViaContainer,
  getWorkViaContainer,
  Work,
} from "@/api/works";
import { useMounted } from "@/hooks/use-mounted";
import { mdToHtml } from "@/lib/remark/convert";
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
import { isLeft } from "@/utils/either";

import type { InferGetStaticPropsType, NextPageWithLayout } from "next";

hljs.registerLanguage("python", python);

export async function getStaticPaths() {
  const res = await getAllWorksViaContainer();
  if (isLeft(res)) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
  const works = res.value;
  return {
    paths: works.map((work) => ({
      params: { slug: work.slug },
    })),
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
  const response = await getWorkViaContainer(slug);
  if (isLeft(response)) {
    return {
      notFound: true,
    };
  }
  const work = response.value;
  const articleBody = await mdToHtml(work.article ? work.article.body : "");
  return {
    props: { work: work, articleBody, message: "" },
  };
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
        <meta property="og:image" content={`/assets/ogp/${work.slug}.svg`} />
        <meta property="og:site_name" content="ichi-h.com" />
        <meta property="og:description" content={work.description} />
      </Head>
      <Headline level={1}>{work.title}</Headline>
      <Stack justify="center" gap="md" mdGap="xs2" wrap="wrap">
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
  return <WithHeaderAndFooter>{page}</WithHeaderAndFooter>;
};

export default ArticlePage;