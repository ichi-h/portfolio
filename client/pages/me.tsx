import Head from "next/head";

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
      </Head>
      <DefaultLayout>
        <Headline level={1}>About me</Headline>
        <Text fontSize={THEME.size.lg}>Coming soon...</Text>
      </DefaultLayout>
    </>
  );
};

export default Me;
