import { remark } from "remark";
import html from "remark-html";

export const mdToHtml = async (markdown: string) => {
  return (
    await remark().use(html, { sanitize: false }).process(markdown)
  ).toString();
};
