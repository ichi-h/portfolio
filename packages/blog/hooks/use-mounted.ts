import { useEffect, useState } from "react";

export const useMounted = (callback: () => void) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      callback();
      setIsMounted(true);
    }
  }, [isMounted, callback]);

  return isMounted;
};
