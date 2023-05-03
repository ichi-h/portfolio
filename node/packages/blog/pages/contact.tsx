import Head from "next/head";

import OGPBG from "@/public/assets/images/ogp_bg.webp";
import { THEME } from "@/ui/base";
import { DefaultLayout } from "@/ui/components/layouts/default";
import { Headline } from "@/ui/parts/text/headline";
import { Text } from "@/ui/parts/text/text";

import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact - ichi-h.com</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Contact - ichi-h.com" />
        <meta property="og:title" content="Contact - ichi-h.com" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ichi-h.com" />
        <meta property="og:image" content={OGPBG.src} />
        <meta property="og:site_name" content="ichi-h.com" />
        <meta property="og:description" content="Contact - ichi-h.com" />
      </Head>
      <DefaultLayout>
        <Headline level={1}>Contact</Headline>
        <Text fontSize={THEME.size.lg}>Coming soon...</Text>
      </DefaultLayout>
    </>
  );
};

export default Contact;
