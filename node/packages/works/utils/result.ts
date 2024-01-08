interface Status {
  readonly status: "ok" | "error";
}

export interface Ok<T> extends Status {
  readonly status: "ok";
  readonly value: T;
}

export interface Error<T> extends Status {
  readonly status: "error";
  readonly value: T;
}

export type Result<T, U> = Ok<T> | Error<U>;

const value = <T, U>(result: Result<T, U>) => result["value"];

const status = <T, U>(result: Result<T, U>) => result["status"];

export const ok = <T, U>(ok: T): Result<T, U> => {
  return { value: ok, status: "ok" };
};

export const error = <T, U>(error: U): Result<T, U> => {
  return { value: error, status: "error" };
};

export const fromOk =
  <T, U>(ok: T) =>
  (result: Result<T, U>): T => {
    if (status(result) === "ok") return value(result) as T;
    return ok;
  };

export const fromError =
  <T, U>(error: U) =>
  (result: Result<T, U>): U => {
    if (status(result) === "error") return value(result) as U;
    return error;
  };

export const isOk = <T, U>(result: Result<T, U>): result is Ok<T> => {
  return status(result) === "ok";
};

export const isError = <T, U>(result: Result<T, U>): result is Error<U> => {
  return status(result) === "error";
};
