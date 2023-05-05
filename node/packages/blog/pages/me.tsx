import fs from "fs";
import path from "path";
import process from "process";

import Head from "next/head";

import { MeTemplate } from "@/features/me/template";
import { mdToHtml } from "@/lib/remark/convert";
import OGPBG from "@/public/assets/images/ogp_bg.webp";
import { DefaultLayout } from "@/ui/components/layouts/default";

import type { InferGetStaticPropsType, NextPageWithLayout } from "next";

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

const Me: NextPageWithLayout<Props> = ({ html }) => {
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
      <MeTemplate html={html} />
    </>
  );
};

Me.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Me;
