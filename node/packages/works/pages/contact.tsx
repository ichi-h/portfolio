import Head from "next/head";

import OGPBG from "@/public/assets/images/ogp_bg.jpg";
import { THEME } from "@/ui/base";
import { WithHeaderAndFooter } from "@/ui/components/layouts";
import { Headline } from "@/ui/parts/text/headline";
import { Text } from "@/ui/parts/text/text";

import type { NextPageWithLayout } from "next";

const Contact: NextPageWithLayout = () => {
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
      <Headline level={1}>Contact</Headline>
      <Text fontSize={THEME.size.lg}>Coming soon...</Text>
    </>
  );
};

Contact.getLayout = (page) => {
  return <WithHeaderAndFooter>{page}</WithHeaderAndFooter>;
};

export default Contact;
