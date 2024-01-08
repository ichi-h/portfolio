import { useEnv } from "@/utils/env";
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
  const { APP_URL } = useEnv();
  const _input = (() => {
    if (typeof input === "string") {
      return `${APP_URL}${input}`;
    }
    return {
      ...input,
      url: `${APP_URL}${input.url}`,
    };
  })();

  const response = await fetch(_input, init);

  if (!response.ok) {
    return error(
      new APIError(response.statusText, await response.json(), response.status),
    );
  }

  return ok((await response[init?.resolver || "json"]()) as T);
};
