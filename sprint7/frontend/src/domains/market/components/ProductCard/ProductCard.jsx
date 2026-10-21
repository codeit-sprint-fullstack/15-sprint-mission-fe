"use client";

import Link from "next/link";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import { HeartIcon } from "@/components/Icons";
import { queryKeys } from "@/domains/market/hooks/useProductQueries";
import { getProductImage } from "@/domains/market/utils/productImage";
import { fetchProductDetail } from "@/apis";
import { getToken } from "@/utils/token";
import { formatPrice } from "@/utils";
import * as styles from "./ProductCard.css";

export function ProductCard({ product }) {
  const queryClient = useQueryClient();

  const image = getProductImage(product.id);

  const prefetch = () => {
    if (!getToken()) return;
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
          <Image
            src={image}
            alt={product.name}
            fill
            sizes="(max-width: 743px) 90vw, (max-width: 1199px) 30vw, 20vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.noImage} />
        )}
      </div>
      <p className={styles.name}>{product.name}</p>
      <p className={styles.price}>{formatPrice(product.price)}</p>
      <p className={styles.favorite}>
        <HeartIcon size={16} />
        <span>{product.favoriteCount ?? 0}</span>
      </p>
    </Link>
  );
}