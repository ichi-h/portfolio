import fs from "fs/promises";
import path from "path";

import matter from "gray-matter";

import { TAGS, Tag } from "./tags";

export interface ParsedMarkdown {
  title: string;
  description: string;
  thumbnail: string;
  tags: Tag[];
  publish: boolean;
  createdAt: Date;
  slug: string;
  content: string;
}

const pagesDir = path.resolve(__dirname, "./pages");

export const getAllSlugs = async () => {
  const dirs = await fs.readdir(pagesDir, { withFileTypes: true });
  return dirs.filter((dirent) => dirent.isDirectory()).map(({ name }) => name);
};

export const getWorkBySlug = async (slug: string, hasContent = false) => {
  const files = await fs.readdir(path.resolve(pagesDir, slug), {
    withFileTypes: true,
  });
  const mdFiles = files.filter((file) => {
    return path.extname(file.name) === ".md";
  });
  if (mdFiles.length === 0) {
    return [];
  }
  const mdFileContents = await Promise.all(
    mdFiles.map(async (mdFile) => {
      const mdFileContent = await fs.readFile(
        path.resolve(pagesDir, slug, mdFile.name),
        "utf8"
      );
      return mdFileContent;
    })
  );
  const parsedMdFiles: ParsedMarkdown[] = mdFileContents.map(
    (mdFileContent, i) => {
      const { data, content } = matter(mdFileContent);

      if (data.title === undefined || data.title === "") {
        throw new Error(`Invalid title in ${slug}/${mdFiles[i].name}.`);
      }
      if (data.description === undefined || data.description === "") {
        throw new Error(`Invalid description in ${slug}/${mdFiles[i].name}.`);
      }

      const isValidTags = data.tags.every((tag: string) => {
        return TAGS.map((t) => `${t}`).includes(tag);
      });
      if (!isValidTags) {
        throw new Error(
          `Invalid tags in ${slug}/${mdFiles[i].name}. (tags: ${data.tags})`
        );
      }

      return {
        title: data.title ?? "",
        description: data.description ?? "",
        thumbnail: data.thumbnail ?? "",
        tags: data.tags,
        publish: data.publish,
        createdAt: new Date(mdFiles[i].name.split(".md")[0]),
        slug,
        content: hasContent ? content : "",
      };
    }
  );
  return parsedMdFiles;
};

export const getLatestWorkBySlug = async (slug: string, hasContent = false) => {
  const works = await getWorkBySlug(slug, hasContent);
  if (works.length === 0) {
    return null;
  }
  const latestWork = works.sort((a, b) => {
    return b.createdAt.getTime() - a.createdAt.getTime();
  })[0];
  return latestWork;
};

export const getAllLatestWorks = async (hasContent = false) => {
  const slugs = await getAllSlugs();
  const works = await Promise.all(
    slugs.map(async (slug) => {
      return await getLatestWorkBySlug(slug, hasContent);
    })
  );
  return works.filter((work) => work !== null) as ParsedMarkdown[];
};

export const getAllWorks = async (hasContent = false) => {
  const slugs = await getAllSlugs();
  const works = await Promise.all(
    slugs.map(async (slug) => {
      return await getWorkBySlug(slug, hasContent);
    })
  );
  return works.flat();
};
