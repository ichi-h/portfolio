import Head from "next/head";

import { HomeTemplate } from "@/core/components/home/templete";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ichi-h.com</title>
      </Head>
      <HomeTemplate />
    </>
  );
};

export default Home;
