"use client";

import { createContext, useSyncExternalStore } from "react";
import { useMe, useLogout, queryKeys } from "@/domains/auth/hooks/useAuthQueries";
import { useQueryClient } from "@tanstack/react-query";

export const AuthContext = createContext(null);

const subscribe = () => () => {};

function useHydrated() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

export function AuthProvider({ children }) {
  const queryClient = useQueryClient();
  const isReady = useHydrated();
  const { data: user, isPending } = useMe(true);
  const logoutMutation = useLogout();

  const logout = () => {
    logoutMutation.mutate(undefined, {
      onSettled: () => {
        queryClient.setQueryData(queryKeys.me, null);
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isReady,
        isLoading: isPending,
        isLoggedIn: Boolean(user),
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
