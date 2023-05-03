import fs from "fs";
import path from "path";
import process from "process";

import Head from "next/head";
import OGPBG from "public/assets/images/ogp_bg.webp";

import { MeTemplate } from "@/features/me/template";
import { mdToHtml } from "@/lib/remark/convert";
import { DefaultLayout } from "@/ui/components/layouts/default";

import type { InferGetStaticPropsType, NextPage } from "next";

export const getStaticProps = async () => {
  const cwd = process.cwd();
  const filePath = path.join(cwd, "features/me/about-me.md");
  const md = fs.readFileSync(filePath, "utf-8");
  const html = await mdToHtml(md);
  return {
    props: { html },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Me: NextPage<Props> = ({ html }) => {
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
        <MeTemplate html={html} />
      </DefaultLayout>
    </>
  );
};

export default Me;
