import fs from "fs/promises";
import path from "path";
import process from "process";

import matter from "gray-matter";
import TinySegmenter from "tiny-segmenter";

const splitTitle = (segmenter, title) =>
  segmenter.segment(`${title}`.replace(/\s/g, "SPACE")).join(" ");

const splitBody = (segmenter, body) =>
  segmenter
    .segment(body)
    .join(" ")
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
    .replace(/\s+/g, " ");

const main = async () => {
  const worksDir = path.resolve(
    process.cwd(),
    "./packages/blog/markdown/works",
  );
  const dirents = await fs
    .readdir(worksDir, { withFileTypes: true })
    .then((dirents) =>
      dirents.filter(
        (dirent) => dirent.isFile() && dirent.name.endsWith(".md"),
      ),
    );
  const md = await Promise.all(
    dirents.map((dirent) =>
      fs.readFile(path.resolve(worksDir, dirent.name), {
        encoding: "utf8",
      }),
    ),
  );
  const aboutMeMd = await fs.readFile(
    path.resolve(process.cwd(), "./packages/blog/markdown/about-me.md"),
    {
      encoding: "utf8",
    },
  );
  const parsed = md.map((text) => matter(text));
  const segmenter = new TinySegmenter();
  const parsedAboutMe = matter(aboutMeMd);
  const json = JSON.stringify([
    ...parsed.map(({ data, content }, i) => {
      return {
        title: splitTitle(segmenter, data.title),
        url: `/works/${dirents[i].name.replace(/\.md$/, "")}`,
        body: splitBody(segmenter, content),
      };
    }),
    {
      title: splitTitle(segmenter, parsedAboutMe.data.title),
      url: "/me",
      body: splitBody(segmenter, parsedAboutMe.content),
    },
  ]);
  fs.writeFile(path.resolve(process.cwd(), "index.json"), json);
};

main();
