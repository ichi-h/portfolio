import Head from "next/head";

import { WorksTemplate } from "@/features/works/template";
import { useFilteredWorks } from "@/features/works/use-filtered-articles";
import { WorksContext } from "@/features/works/works-context";
import { Work, getAllWorks } from "@/markdown";
import OGPBG from "@/public/assets/images/ogp_bg.jpg";
import { WithHeaderAndFooter } from "@/ui/components/layouts";

import type { NextPageWithLayout, InferGetStaticPropsType } from "next";

// export const getStaticProps = async () => {
//   const works = await getAllWorks();
//   return {
//     props: {
//       works,
//     },
//   };
// };

// type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPageWithLayout = () => {
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
      <WorksTemplate />
    </>
  );
};

Home.getLayout = (page) => {
  return <WithHeaderAndFooter>{page}</WithHeaderAndFooter>;
};

export default Home;
