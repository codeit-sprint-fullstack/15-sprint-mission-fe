"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertModal, ConfirmModal } from "@/components/Modal";
import { BackButton } from "@/components/BackButton";
import { getErrorMessage } from "@/apis/httpClient";
import { useAuth } from "@/domains/auth/hooks/useAuth";
import {
  useDeleteProduct,
  useProduct,
  useToggleFavorite,
  useUpdateProduct,
} from "@/domains/market/hooks/useProductQueries";
import { ErrorMessage, LoadingIndicator } from "@/domains/market/components/Status";
import { CommentSection } from "@/domains/market/components/detail/CommentSection";
import { EditProductModal } from "@/domains/market/components/detail/EditProductModal";
import { ProductDetail } from "@/domains/market/components/detail/ProductDetail";
import * as styles from "./ProductDetailContainer.css";

export function ProductDetailContainer({ productId }) {
  const router = useRouter();
  const { isReady, isLoggedIn } = useAuth();

  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const productQuery = useProduct(productId, { enabled: isReady && isLoggedIn });
  const updateMutation = useUpdateProduct(productId);
  const deleteMutation = useDeleteProduct(productId);
  const favoriteMutation = useToggleFavorite(productId);

  useEffect(() => {
    if (isReady && !isLoggedIn) router.replace("/signin");
  }, [isReady, isLoggedIn, router]);

  if (!isReady || !isLoggedIn) return <LoadingIndicator />;

  if (productQuery.isError) {
    return (
      <div className={styles.container}>
        <ErrorMessage
          message={getErrorMessage(productQuery.error, "상품 정보를 불러오지 못했어요.")}
          onRetry={() => productQuery.refetch()}
        />
        <BackButton href="/items" />
      </div>
    );
  }

  if (!productQuery.data) return <LoadingIndicator />;

  const product = productQuery.data;

  const handleDelete = () => {
    deleteMutation.mutate(undefined, {
      onSuccess: () => router.replace("/items"),
      onError: (error) => {
        setShowDelete(false);
        setAlertMessage(getErrorMessage(error, "상품을 삭제하지 못했어요."));
      },
    });
  };

  const handleUpdate = (body) => {
    updateMutation.mutate(body, {
      onSuccess: () => setShowEdit(false),
    });
  };

  return (
    <div className={styles.container}>
      <ProductDetail
        product={product}
        onEdit={() => setShowEdit(true)}
        onDelete={() => setShowDelete(true)}
        onToggleFavorite={(isFavorite) => favoriteMutation.mutate(isFavorite)}
      />

      <hr className={styles.rule} />

      <CommentSection productId={productId} />

      <BackButton href="/items" />

      {showDelete && (
        <ConfirmModal
          message="정말로 상품을 삭제하시겠어요?"
          isLoading={deleteMutation.isPending}
          onCancel={() => setShowDelete(false)}
          onConfirm={handleDelete}
        />
      )}

      {showEdit && (
        <EditProductModal
          product={product}
          isSaving={updateMutation.isPending}
          errorMessage={
            updateMutation.isError
              ? getErrorMessage(updateMutation.error, "상품을 수정하지 못했어요.")
              : ""
          }
          onClose={() => {
            updateMutation.reset();
            setShowEdit(false);
          }}
          onSubmit={handleUpdate}
        />
      )}

      {alertMessage && <AlertModal message={alertMessage} onClose={() => setAlertMessage("")} />}
    </div>
  );
}
