"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMe, signIn, signUp } from "@/apis/authApi";
import { setToken } from "@/utils/token";
import { useAuthToken } from "./useAuthToken";

export const queryKeys = {
  me: ["me"],
};

export function useMe(enabled = true) {
  const token = useAuthToken();
  return useQuery({
    queryKey: queryKeys.me,
    queryFn: getMe,
    enabled: enabled && Boolean(token),
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
}

export function useSignIn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      setToken(data.accessToken);
      queryClient.invalidateQueries({ queryKey: queryKeys.me });
    },
  });
}

export function useSignUp() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      setToken(data.accessToken);
      queryClient.invalidateQueries({ queryKey: queryKeys.me });
    },
  });
}