export const customFetch = async <T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  const response = await fetch(input, init);
  const data = await response.json();
  return data as T;
};
