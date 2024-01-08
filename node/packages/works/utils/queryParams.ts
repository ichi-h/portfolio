type QueryParam = string | number | boolean | undefined;

export const joinQueryParams = (params: Record<string, QueryParam>) => {
  const query = Object.entries(params)
    .map(([key, value]) =>
      value !== undefined ? `${key}=${encodeURIComponent(value)}` : ""
    )
    .filter(([, value]) => value !== "")
    .join("&");

  return query.length > 0 ? `?${query}` : "";
};
