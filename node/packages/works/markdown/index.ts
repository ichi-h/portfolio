import fs from "fs/promises";
import path from "path";
import process from "process";

import matter from "gray-matter";

import { CATEGORY, Category } from "@/constants/category";

export interface Work {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  category: Category[];
  keywords: string[];
  createdAt: string;
  updatedAt: string;
  content: string;
}

const worksDir = path.resolve(process.cwd(), "./markdown/works");

export const getAllSlugs = async () => {
  const result = await fs.readdir(worksDir, { withFileTypes: true });
  return result
    .filter((dirent) => dirent.isFile() && path.extname(dirent.name) === ".md")
    .map(({ name }) => name.split(".md")[0]);
};

export const getWorkBySlug = async (
  slug: string,
  hasContent = false,
): Promise<Work> => {
  const mdFile = await fs.readFile(path.resolve(worksDir, `${slug}.md`), {
    encoding: "utf8",
  });

  const { data, content } = matter(mdFile);

  if (data.title === undefined || data.title === "") {
    throw new Error(`Invalid title in ${slug}.`);
  }
  if (data.description === undefined || data.description === "") {
    throw new Error(`Invalid description in ${slug}.`);
  }
  if (data.thumbnail === undefined) {
    throw new Error(`Invalid thumbnail in ${slug}.`);
  }
  if (
    data.category === undefined ||
    data.category.length === 0 ||
    !data.category.every((category: string) =>
      CATEGORY.map((c) => `${c}`).includes(category),
    )
  ) {
    throw new Error(`Invalid category in ${slug}.`);
  }
  if (data.publish === undefined) {
    throw new Error(`Invalid publish in ${slug}.`);
  }
  if (data.createdAt === undefined) {
    throw new Error(`Invalid createdAt in ${slug}.`);
  }
  if (data.updatedAt === undefined) {
    throw new Error(`Invalid updatedAt in ${slug}.`);
  }

  return {
    title: data.title ?? "",
    description: data.description ?? "",
    thumbnail: data.thumbnail ?? "",
    category: data.category,
    keywords: data.keywords ?? [],
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    slug,
    content: hasContent ? content : "",
  };
};

export const getAllWorks = async (hasContent = false) => {
  const slugs = await getAllSlugs();
  const works = await Promise.all(
    slugs.map(async (slug) => {
      return await getWorkBySlug(slug, hasContent);
    }),
  );
  return works;
};
