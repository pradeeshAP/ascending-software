"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type LoadingContextValue = {
  isLoading: boolean;
  finish: () => void;
};

const LoadingContext = createContext<LoadingContextValue>({
  isLoading: false,
  finish: () => {},
});

export function useLoading() {
  return useContext(LoadingContext);
}

const SESSION_KEY = "as-loaded";

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // sessionStorage is only available post-hydration, so the intro-skip check
    // must happen in an effect rather than a lazy useState initializer (which
    // would otherwise mismatch the server-rendered markup).
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      if (sessionStorage.getItem(SESSION_KEY)) setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const finish = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {}
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, finish }}>{children}</LoadingContext.Provider>
  );
}
