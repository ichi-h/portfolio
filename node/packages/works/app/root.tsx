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
import "portfolio-ui/style.css";

import { Env } from "@/components/env";
import { useEnv } from "@/utils/env";

import { Background } from "./components/background";
import "./styles/global.css";

import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
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

export const meta: MetaFunction<typeof loader> = ({}) => {
  return [
    { title: "ichi-h.com" },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:url",
      content: "https://ichi-h.com",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: "ichi-h.com",
    },
    {
      property: "og:image",
      content: `${useEnv().APP_URL}/top_ogp.webp`,
    },
    {
      property: "og:site_name",
      content: "ichi-h.com",
    },
    {
      property: "og:description",
      content: "To live is to think and create.",
    },
    {
      name: "twitter:title",
      content: "ichi-h.com",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:description",
      content: "To live is to think and create.",
    },
    {
      name: "twitter:domain",
      content: "ichi-h.com",
    },
    {
      name: "twitter:site",
      content: "@ichi_h3",
    },
  ];
};

export default function App() {
  const { env } = useLoaderData<typeof loader>();

  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
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
