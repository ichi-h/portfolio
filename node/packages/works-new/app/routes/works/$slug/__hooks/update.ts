import { parseMdToHtml } from "@/api/parse";
import { getWork } from "@/api/works/show";
import { Update, createUpdate } from "@/utils/elmish";

import { Model, Message } from "./data";

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
          const resp = await parseMdToHtml(message.body);
          return {
            type: "parseMdToHtmlResp",
            resp,
          };
        },
      };
    }

    case "parseMdToHtmlResp": {
      if (message.resp.status === "error") {
        return {
          newModel: {
            ...model,
            status: "error",
          },
        };
      }

      return {
        newModel: {
          ...model,
          work: {
            ...model.work,
            body: message.resp.value.html,
          },
          status: "ok",
        },
      };
    }
  }
};

export const useUpdate = createUpdate(update);
