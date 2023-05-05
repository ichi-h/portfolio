import "modern-css-reset";
import "@/ui/global.css";
import "highlight.js/styles/atom-one-dark.css";

import Head from "next/head";
import { ReactElement } from "react";

import type { AppPropsWithLayout } from "next/app";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
