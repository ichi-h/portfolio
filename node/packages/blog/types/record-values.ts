export type RecordValues<T> = T extends Record<string, infer U>
  ? RecordValues<U>
  : T;
