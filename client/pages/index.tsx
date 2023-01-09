import Head from "next/head";
import OGPBG from "public/assets/images/ogp_bg.webp";

import { HomeTemplate } from "@/features/home/template";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ichi-h.com</title>
        <meta name="description" content="ichi-h.com" />
        <meta property="og:title" content="ichi-h.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ichi-h.com" />
        <meta property="og:image" content={OGPBG.src} />
        <meta property="og:site_name" content="ichi-h.com" />
        <meta property="og:description" content="ichi-h.com" />
      </Head>
      <HomeTemplate />
    </>
  );
};

export default Home;
