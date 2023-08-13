import fs from "fs/promises";
import path from "path";
import process from "process";

import matter from "gray-matter";
import TinySegmenter from "tiny-segmenter";

const main = async () => {
  const worksDir = path.resolve(
    process.cwd(),
    "./packages/blog/markdown/works"
  );
  const dirents = await fs
    .readdir(worksDir, { withFileTypes: true })
    .then((dirents) =>
      dirents.filter((dirent) => dirent.isFile() && dirent.name.endsWith(".md"))
    );
  const md = await Promise.all(
    dirents.map((dirent) =>
      fs.readFile(path.resolve(worksDir, dirent.name), {
        encoding: "utf8",
      })
    )
  );
  const parsed = md.map((text) => matter(text));
  const segmenter = new TinySegmenter();
  const json = JSON.stringify(
    parsed.map(({ data, content }, i) => ({
      title: segmenter
        .segment(`${data.title}`.replace(/\s/g, "SPACE"))
        .join(" "),
      url: `/works/${dirents[i].name.replace(/\.md$/, "")}`,
      body: segmenter
        .segment(content)
        .join(" ")
        .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
        .replace(/\s+/g, " "),
    }))
  );
  fs.writeFile(path.resolve(process.cwd(), "index.json"), json);
};

main();
