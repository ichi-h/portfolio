import { remark } from "remark";
import html from "remark-html";

import { getWork } from "@/api/works/show";
import { Update, createUpdate } from "@/utils/elmish";

import { Model, Message } from "./data";

type Template =
  | {
      type: "text";
      style: string[];
      text: string;
    }
  | {
      type: "youtube";
      id: string;
    };

const parse = async (markdown: string) => {
  const mdToHtml = async (md: string) =>
    (await remark().use(html).process(md)).toString();
  const docs = await mdToHtml(markdown);
  return docs.replace(/{{%([^}]+)%}}/g, (value) => {
    const template = JSON.parse(
      value.replace(/{{%([^}]+)%}}/g, "{$1}"),
    ) as Template;
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
    return value;
  });
};

export const update = (
  model: Model,
  message: Message,
): ReturnType<Update<Model, Message>> => {
  switch (message.type) {
    case "getWork": {
      return {
        newModel: model,
        cmd: async () => {
          const resp = await getWork(message.slug);
          return {
            type: "getWorkResp",
            resp,
          };
        },
      };
    }

    case "getWorkResp": {
      if (message.resp.status === "error") {
        return {
          newModel: {
            ...model,
            status: "error",
          },
        };
      }

      return update(
        {
          ...model,
          work: message.resp.value,
        },
        { type: "parseMdToHtml", body: message.resp.value.body },
      );
    }

    case "parseMdToHtml": {
      return {
        newModel: model,
        cmd: async () => {
          const result = await parse(message.body);
          return {
            type: "parseMdToHtmlResult",
            result,
          };
        },
      };
    }

    case "parseMdToHtmlResult": {
      return {
        newModel: {
          ...model,
          work: {
            ...model.work,
            body: message.result,
          },
          status: "ok",
        },
      };
    }
  }
};

export const useUpdate = createUpdate(update);
