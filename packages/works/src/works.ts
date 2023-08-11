import fs from "fs/promises";
import path from "path";
import process from "process";

import dotenv from "dotenv";
import matter from "gray-matter";

import { TAGS } from "./tags";

export interface Work {
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  publish: boolean;
  createdAt: string;
  updatedAt: string;
  slug: string;
  content: string;
}

export interface WorkFilter {
  search?: string;
  tags?: string[];
}

dotenv.config();

const worksDir = process.env.WORKS_DIR ?? path.resolve(__dirname, "./pages");

export const getAllSlugs = async () => {
  const dirs = await fs.readdir(worksDir, { withFileTypes: true });
  return dirs.filter((dirent) => dirent.isDirectory()).map(({ name }) => name);
};

export const getWorksBySlug = async (slug: string, hasContent = false) => {
  const files = await fs.readdir(path.resolve(worksDir, slug), {
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
        path.resolve(worksDir, slug, mdFile.name),
        "utf8"
      );
      return mdFileContent;
    })
  );
  const works: Work[] = mdFileContents.map((mdFileContent, i) => {
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
      createdAt: mdFiles[0].name.split(".md")[0],
      updatedAt: mdFiles[i].name.split(".md")[0],
      slug,
      content: hasContent ? content : "",
    };
  });
  return works;
};

export const getLatestWorkBySlug = async (slug: string, hasContent = false) => {
  const works = await getWorksBySlug(slug, hasContent);
  if (works.length === 0) {
    return null;
  }
  const latestWork = works.sort((a, b) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  })[0];
  return latestWork;
};

const filterWorks = (works: Work[], filter: WorkFilter) => {
  const workFilter = {
    search: filter.search ?? "",
    tags: filter.tags ?? [],
  };
  const filteredWorks = works.filter((work) => {
    return (
      work.title.includes(workFilter.search) ||
      work.description.includes(workFilter.search) ||
      work.content.includes(workFilter.search) ||
      work.tags.some((tag) => workFilter.tags.includes(tag))
    );
  });
  return filteredWorks;
};

export const getAllLatestWorks = async (
  hasContent = false,
  filter?: WorkFilter
) => {
  const slugs = await getAllSlugs();
  const works = (
    await Promise.all(
      slugs.map(async (slug) => {
        return await getLatestWorkBySlug(slug, hasContent);
      })
    )
  ).filter((work) => work !== null) as Work[];
  if (!filter) return works;
  return filterWorks(works, filter);
};

export const getAllWorks = async (hasContent = false, filter?: WorkFilter) => {
  const slugs = await getAllSlugs();
  const works = (
    await Promise.all(
      slugs.map(async (slug) => {
        return await getWorksBySlug(slug, hasContent);
      })
    )
  ).flat();
  if (!filter) return works;
  return filterWorks(works, filter);
};
