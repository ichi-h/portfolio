import Head from "next/head";

import { getAllArticles } from "@/api/articles/getAllAricles";
import { WorksTemplate } from "@/features/works/template";

import type { InferGetStaticPropsType, NextPage } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const articles = await getAllArticles();
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
