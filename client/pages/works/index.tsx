import Head from "next/head";

import { Article, getAllArticles } from "@/api/articles/getAllArticles";
import { ResponseError } from "@/api/customFetch";
import { WorksTemplate } from "@/features/works/template";
import { either } from "@/utils/either";

import type { InferGetStaticPropsType, NextPage } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const response = await getAllArticles();
  const onLeft = () => [] as Article[];
  const onRight = (articles: Article[]) => articles;
  const articles = either<ResponseError, Article[], Article[]>(onLeft)(onRight)(response);
  return {
    props: { articles },
  };
};

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Works - ichi-h.com</title>
      </Head>
      <WorksTemplate articles={articles} />
    </>
  );
};

export default Home;
