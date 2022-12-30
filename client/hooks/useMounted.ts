import { useEffect, useRef } from "react";

export const useMounted = (callback: () => void) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      callback();
      isMounted.current = true;
    }
  });

  return isMounted;
};
