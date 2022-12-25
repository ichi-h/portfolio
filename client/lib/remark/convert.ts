import { remark } from "remark";
import html from "remark-html";

export const mdToHtml = async (markdown: string) => {
  return (await remark().use(html).process(markdown)).toString();
};
