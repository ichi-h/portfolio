import { ReactElement } from "react";
import { renderToString } from "react-dom/server";
import { remark } from "remark";
import html from "remark-html";

import { LinkCard } from "@/components/linkCard";

type Template =
  | {
      type: "text";
      style: string[];
      text: string;
    }
  | {
      type: "youtube";
      id: string;
    }
  | {
      type: "linkCard";
      href: string;
      title: string;
      description: string;
      thumbnailUrl?: string;
    };

export const parseMd2Html = async (markdown: string) => {
  const mdToHtml = async (md: string) =>
    (await remark().use(html).process(md)).toString();
  const docs = (await mdToHtml(markdown))
    .replace(
      /<pre><code class="language-mermaid">(.*?)<\/code><\/pre>/gs,
      '<pre class="mermaid">$1</pre>',
    )
    .replace(/~~(.+?)~~/g, "<s>$1</s>");

  const templateToHtml = (template: Template) => {
    if (template.type === "text") {
      const style = template.style.map((s) => `text-${s}`).join(" ");
      if (
        style.includes("center") ||
        style.includes("right") ||
        style.includes("left")
      ) {
        return `<p class="${style}">${template.text}</p>`;
      }
      return `<span class="${style}">${template.text}</span>`;
    }
    if (template.type === "youtube") {
      return `<div class="text-center"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/${template.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe></div>`;
    }
    if (template.type === "linkCard") {
      return renderToString(
        LinkCard({
          href: template.href,
          title: template.title,
          description: template.description,
          thumbnailUrl: template.thumbnailUrl,
        }) as ReactElement,
      );
    }
    return "";
  };

  return docs
    .replace(/<p>{{%([^%]+)%}}<\/p>/g, (value) => {
      const template = JSON.parse(
        value
          .replace(/<p>/, "")
          .replace(/<\/p>/, "")
          .replace(/{{%([^%]+)%}}/g, "{$1}"),
      ) as Template;
      return templateToHtml(template);
    })
    .replace(/{{%([^%]+)%}}/g, (value) => {
      const template = JSON.parse(
        value.replace(/{{%([^%]+)%}}/g, "{$1}"),
      ) as Template;
      return templateToHtml(template);
    });
};
