"use client";

import { Skeleton } from "@/components/Skeleton";
import * as styles from "./ProductCardSkeleton.css";

export function ProductCardSkeleton() {
  return (
    <div>
      <div className={styles.imageWrap}>
        <Skeleton className={styles.image} />
      </div>
      <Skeleton className={styles.name} width="90%" height={16} />
      <Skeleton className={styles.price} width="48%" height={18} />
    </div>
  );
}
