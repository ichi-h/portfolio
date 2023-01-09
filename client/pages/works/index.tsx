import Head from "next/head";
import OGPBG from "public/assets/images/ogp_bg.webp";

import { getAllArticles } from "@/api/articles/getAllArticles";
import { ArticleSummary } from "@/core/entities/article";
import { WorksTemplate } from "@/features/works/template";
import { useFilteredArticles } from "@/features/works/useFilteredArticles";
import { WorksContext } from "@/features/works/worksContext";
import { ErrorResponse } from "@/types/response";
import { DefaultLayout } from "@/ui/components/layouts/default";
import { either } from "@/utils/either";

import type { InferGetStaticPropsType, NextPage } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const response = await getAllArticles();
  const onLeft = (e: ErrorResponse) => ({
    props: {
      articles: [] as ArticleSummary[],
      message: e.message,
    },
  });
  const onRight = (articles: ArticleSummary[]) => ({
    props: { articles, message: "" },
  });
  return either<ErrorResponse, ArticleSummary[], ReturnType<typeof onRight>>(
    onLeft
  )(onRight)(response);
};

const Home: NextPage<Props> = ({ articles }) => {
  const provider = useFilteredArticles(articles);
  return (
    <>
      <Head>
        <title>Works - ichi-h.com</title>
        <link rel="canonical" href="https://ichi-h.com/works" />
        <meta name="description" content="Works - ichi-h.com" />
        <meta property="og:title" content="Works - ichi-h.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ichi-h.com/works" />
        <meta property="og:image" content={OGPBG.src} />
        <meta property="og:site_name" content="ichi-h.com" />
        <meta property="og:description" content="Works - ichi-h.com" />
      </Head>
      <WorksContext.Provider value={provider}>
        <DefaultLayout>
          <WorksTemplate />
        </DefaultLayout>
      </WorksContext.Provider>
    </>
  );
};

export default Home;
