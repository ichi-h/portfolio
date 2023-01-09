import { Html, Head, Main, NextScript } from "next/document";

import { THEME } from "@/ui/base";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="author" content="ichi-h" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content={THEME.color.primary["000"]} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ichi_h3" />
        <meta name="twitter:creator" content="@ichi_h3" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
