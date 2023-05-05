import Head from "next/head";

import { WorkSummary, getAllWorks } from "@/api/works";
import { WorksTemplate } from "@/features/works/template";
import { useFilteredWorks } from "@/features/works/use-filtered-articles";
import { WorksContext } from "@/features/works/works-context";
import OGPBG from "@/public/assets/images/ogp_bg.jpg";
import { WithHeaderAndFooter } from "@/ui/components/layouts";
import { isLeft } from "@/utils/either";

import type { InferGetStaticPropsType, NextPageWithLayout } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const response = await getAllWorks();
  if (isLeft(response)) {
    return {
      props: {
        works: [] as WorkSummary[],
        message: response.value.message,
      },
    };
  }
  return {
    props: { works: response.value, message: "" },
  };
};

const Home: NextPageWithLayout<Props> = ({ works }) => {
  const provider = useFilteredWorks(works);
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
        <WorksTemplate />
      </WorksContext.Provider>
    </>
  );
};

Home.getLayout = (page) => {
  return <WithHeaderAndFooter>{page}</WithHeaderAndFooter>;
};

export default Home;
