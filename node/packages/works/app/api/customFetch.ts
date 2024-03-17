import { ok, error } from "@/utils/result";

import { APIError } from "./error";
import { APIResult } from "./result";

interface CustomRequestInit extends RequestInit {
  resolver?: "json" | "text" | "blob" | "arrayBuffer" | "formData";
}

export interface BasicAuth {
  username: string;
  password: string;
}

export const customFetch =
  (auth?: BasicAuth) =>
  async <T, E = any>(
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

    const _init = (() => {
      if (!auth) return init;
      return {
        ...init,
        headers: {
          ...init?.headers,
          Authorization: `Basic ${btoa(`${auth.username}:${auth.password}`)}`,
        },
      } as CustomRequestInit;
    })();

    const response = await fetch(_input, _init);

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
