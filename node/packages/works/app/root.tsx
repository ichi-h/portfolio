import { json } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import uiStyles from "portfolio-ui/style.css";

import { Env } from "@/libs/remix-env";
import { htmlStyle, bodyStyle } from "@/styles";
import styles from "@/styles/style.css";
import { useEnv } from "@/utils/env";

import { Background } from "./components/background";

import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "ichi-h.com",
  viewport: "width=device-width,initial-scale=1",
  robots: "index, follow",
  "og:url": "https://ichi-h.com",
  "og:type": "website",
  "og:title": "ichi-h.com",
  "og:image": "https://static.ichi-h.com/bg_ogp.jpg",
  "og:site_name": "ichi-h.com",
  "og:description": "To live is to think and create.",
  "twitter:title": "ichi-h.com",
  "twitter:card": "summary_large_image",
  "twitter:description": "To live is to think and create.",
  "twitter:domain": "ichi-h.com",
  "twitter:site": "@ichi_h3",
});

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: uiStyles },
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap",
  },
];

export const loader = () => {
  const env = useEnv();
  return json({ env });
};

export default function App() {
  const { env } = useLoaderData<typeof loader>();

  return (
    <html className={htmlStyle} lang="ja">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={bodyStyle}>
        <Background>
          <Outlet />
        </Background>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Env data={env} />
      </body>
    </html>
  );
}
