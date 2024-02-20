import { ok, error } from "@/utils/result";

import { APIError } from "./error";
import { APIResult } from "./result";

interface CustomRequestInit extends RequestInit {
  resolver?: "json" | "text" | "blob" | "arrayBuffer" | "formData";
}

export const customFetch = async <T, E = any>(
  input: RequestInfo,
  init?: CustomRequestInit,
): Promise<APIResult<T, E>> => {
  const _input = (() => {
    if (typeof input === "string") {
      return input;
    }
    return {
      ...input,
      url: input.url,
    } as Request;
  })();

  const response = await fetch(_input, init);

  if (!response.ok) {
    const body = await (async () => {
      try {
        return (await response.json()) as E;
      } catch (e) {
        return {} as E;
      }
    })();
    return error(new APIError(response.statusText, body, response.status));
  }

  return ok((await response[init?.resolver || "json"]()) as T);
};
