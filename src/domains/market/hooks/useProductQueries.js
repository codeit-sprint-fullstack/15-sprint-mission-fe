"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addLike,
  removeLike,
  deleteProduct,
  fetchProductCommentList,
  fetchProductDetail,
  fetchProductList,
  updateProduct,
  createProductComment,
  deleteProductComment,
  updateProductComment,
} from "@/apis";

export const queryKeys = {
  products: ["products"],
  productList: (params) => ["products", "list", params],
  product: (id) => ["products", "detail", String(id)],
  comments: (id) => ["products", "detail", String(id), "comments"],
};

export function useProducts(params, options = {}) {
  return useQuery({
    queryKey: queryKeys.productList(params),
    queryFn: () => fetchProductList(params),
    placeholderData: keepPreviousData,
    staleTime: 30 * 1000,
    refetchInterval: 60 * 1000,
    refetchOnWindowFocus: true,
    ...options,
  });
}

export function useProduct(productId, options = {}) {
  return useQuery({
    queryKey: queryKeys.product(productId),
    queryFn: () => fetchProductDetail(productId),
    staleTime: 60 * 1000,
    ...options,
  });
}

export function useUpdateProduct(productId) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body) => updateProduct(productId, body),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.product(productId), (old) => ({ ...old, ...data }));
      queryClient.invalidateQueries({ queryKey: ["products", "list"] });
    },
  });
}

export function useDeleteProduct(productId) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteProduct(productId),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: queryKeys.product(productId) });
      queryClient.invalidateQueries({ queryKey: ["products", "list"] });
    },
  });
}

export function useToggleLike(productId) {
  const queryClient = useQueryClient();
  const key = queryKeys.product(productId);

  return useMutation({
    mutationFn: (isLiked) => (isLiked ? removeLike(productId) : addLike(productId)),
    onMutate: async (isLiked) => {
      await queryClient.cancelQueries({ queryKey: key });
      const previous = queryClient.getQueryData(key);
      queryClient.setQueryData(key, (old) =>
        old
          ? {
              ...old,
              isLiked: !isLiked,
              likeCount: Math.max(0, (old.likeCount ?? old.favoriteCount ?? 0) + (isLiked ? -1 : 1)),
              favoriteCount: Math.max(0, (old.favoriteCount ?? old.likeCount ?? 0) + (isLiked ? -1 : 1)),
            }
          : old,
      );
      return { previous };
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) queryClient.setQueryData(key, context.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: key, exact: true });
      queryClient.invalidateQueries({ queryKey: ["products", "list"] });
    },
  });
}

export function useComments(productId, options = {}) {
  return useQuery({
    queryKey: queryKeys.comments(productId),
    queryFn: () => fetchProductCommentList(productId),
    ...options,
  });
}

export function useCreateComment(productId) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (content) => createProductComment(productId, content),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.comments(productId) }),
  });
}

export function useUpdateComment(productId) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ commentId, content }) => updateProductComment(commentId, content),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.comments(productId) }),
  });
}

export function useDeleteComment(productId) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (commentId) => deleteProductComment(commentId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.comments(productId) }),
  });
}