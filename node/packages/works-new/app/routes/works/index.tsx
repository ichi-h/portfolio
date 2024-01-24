import { json, LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

import { APIResult } from "@/api/result";
import { getFilteredWorks, GetFilteredWorksResponse } from "@/api/works/filter";
import { Category } from "@/model/category";
import { LimitNumber } from "@/model/limitNumber";
import { Offset } from "@/model/offset";
import { SummarizedWork } from "@/model/work";
import { Update, createUpdate } from "@/utils/elmish";

type Model = {
  offset: Offset;
  limit: LimitNumber;
  search: string;
  category: Category | null;
  works: SummarizedWork[];
  total: number;
  worksLoader: "idle" | "loading" | "error";
  error: string;
};

const init: Model = {
  offset: 0,
  limit: 18,
  search: "",
  category: null,
  works: [],
  total: 0,
  worksLoader: "loading",
  error: "",
} as const;

type Message =
  | { type: "setOffset"; offset: Offset }
  | { type: "setSearch"; search: string }
  | { type: "setCategory"; category: Category | null }
  | { type: "getFilteredWorks" }
  | { type: "getFilteredWorksResp"; resp: APIResult<GetFilteredWorksResponse> };

const update = (
  model: Model,
  message: Message,
): ReturnType<Update<Model, Message>> => {
  switch (message.type) {
    case "setOffset": {
      return update(
        {
          ...model,
          offset: message.offset,
        },
        { type: "getFilteredWorks" },
      );
    }

    case "setSearch": {
      return update(
        {
          ...model,
          search: message.search,
          offset: 0,
        },
        { type: "getFilteredWorks" },
      );
    }

    case "setCategory": {
      return update(
        {
          ...model,
          category: message.category,
          offset: 0,
        },
        { type: "getFilteredWorks" },
      );
    }

    case "getFilteredWorks": {
      const newModel: Model = {
        ...model,
        worksLoader: "loading",
      };

      return {
        newModel,
        cmd: async () => {
          const resp = await getFilteredWorks({
            search: newModel.search,
            category: newModel.category ?? undefined,
            offset: newModel.offset,
            limit: newModel.limit,
          });
          return {
            type: "getFilteredWorksResp",
            resp,
          };
        },
      };
    }

    case "getFilteredWorksResp": {
      if (message.resp.status === "error") {
        return {
          newModel: {
            ...model,
            worksLoader: "error",
            error: "Failed to get works. Please try again later.",
          },
        };
      }
      return {
        newModel: {
          ...model,
          worksLoader: "idle",
          total: message.resp.value.total,
          works: message.resp.value.works,
        },
      };
    }
  }
};

const useUpdate = createUpdate(update);

export const loader = async ({ request }: LoaderArgs) => {
  const { searchParams } = new URL(request.url);
  const category = (searchParams.get("category") ?? null) as Category | null;
  const { newModel: tmpModel, cmd } = update(init, {
    type: "setCategory",
    category,
  });
  if (!cmd) {
    return json({
      init: tmpModel,
    });
  }

  const next = await cmd();
  const { newModel } = update(tmpModel, next);
  return json({
    init: newModel,
  });
};

export default function Index() {
  const { init } = useLoaderData<typeof loader>();
  const [model, setModel] = useState(init);
  const send = useUpdate(model, setModel);

  const refetch = () => {
    send({ type: "getFilteredWorks" });
  };

  const result = JSON.stringify(model, null, 2);

  return (
    <div>
      <code>{result}</code>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}
