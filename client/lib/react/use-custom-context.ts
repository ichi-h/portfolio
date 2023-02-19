import { useContext } from "react";

export const useCustomContext = <T>(context: React.Context<T | null>) => {
  const ctx = useContext(context);
  if (!ctx) {
    throw new Error("Context is not provided");
  }
  return ctx;
};
