"use client";

import { createContext, useEffect, useSyncExternalStore } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys, useMe } from "@/domains/auth/hooks/useAuthQueries";
import { useAuthToken } from "@/domains/auth/hooks/useAuthToken";
import { removeToken } from "@/utils/token";

export const AuthContext = createContext(null);

const subscribe = () => () => {};

function useHydrated() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

export function AuthProvider({ children }) {
  const queryClient = useQueryClient();
  const token = useAuthToken();
  const isReady = useHydrated();

  const { data: user, isError } = useMe(Boolean(token));

  useEffect(() => {
    if (isError) removeToken();
  }, [isError]);

  const logout = () => {
    removeToken();
    queryClient.removeQueries({ queryKey: queryKeys.me });
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isReady,
        isLoggedIn: Boolean(token),
        user: token ? user : undefined,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}