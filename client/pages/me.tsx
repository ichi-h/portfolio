import Head from "next/head";
import OGPBG from "public/assets/images/ogp_bg.webp";

import { THEME } from "@/ui/base";
import { DefaultLayout } from "@/ui/components/layouts/default";
import { Headline } from "@/ui/parts/text/headline";
import { Text } from "@/ui/parts/text/text";

import type { NextPage } from "next";

const Me: NextPage = () => {
  return (
    <>
      <Head>
        <title>About me - ichi-h.com</title>
        <meta name="description" content="About me - ichi-h.com" />
        <meta property="og:title" content="About me - ichi-h.com" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ichi-h.com" />
        <meta property="og:image" content={OGPBG.src} />
        <meta property="og:site_name" content="ichi-h.com" />
        <meta property="og:description" content="About me - ichi-h.com" />
      </Head>
      <DefaultLayout>
        <Headline level={1}>About me</Headline>
        <Text fontSize={THEME.size.lg}>Coming soon...</Text>
      </DefaultLayout>
    </>
  );
};

export default Me;
