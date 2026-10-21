"use client";

import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import { HeartIcon } from "@/components/Icons";
import { queryKeys } from "@/domains/market/hooks/useProductQueries";
import { getProductImage } from "@/domains/market/utils/productImage";
import { fetchProductDetail } from "@/apis";
import { useAuth } from "@/domains/auth/hooks/useAuth";
import { formatPrice } from "@/utils";
import * as styles from "./ProductCard.css";

export function ProductCard({ product }) {
  const queryClient = useQueryClient();
  const { isLoggedIn } = useAuth();

  const image = getProductImage(product);

  const prefetch = () => {
    if (!isLoggedIn) return;
    queryClient.prefetchQuery({
      queryKey: queryKeys.product(product.id),
      queryFn: () => fetchProductDetail(product.id),
      staleTime: 60 * 1000,
    });
  };

  return (
    <Link
      href={`/items/${product.id}`}
      className={styles.card}
      onMouseEnter={prefetch}
      onFocus={prefetch}
    >
      <div className={styles.imageWrap}>
        {image ? (
          <img
            src={image}
            alt={product.name}
            className={styles.image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div className={styles.noImage} />
        )}
      </div>
      <p className={styles.name}>{product.name}</p>
      <p className={styles.price}>{formatPrice(product.price)}</p>
      <p className={styles.favorite}>
        <HeartIcon size={16} />
        <span>{product.likeCount ?? product.favoriteCount ?? 0}</span>
      </p>
    </Link>
  );
}