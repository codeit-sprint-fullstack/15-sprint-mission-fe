import { Skeleton } from "@/components/Skeleton";
import { detailPage } from "@/domains/market/containers/ItemsPageContainer/ProductListSection.css";
import * as s from "./ProductDetailSkeleton.css";

export function ProductDetailSkeleton() {
  return (
    <div className={detailPage}>
      <Skeleton className={s.imageBlock} height={undefined} />
      <Skeleton className={s.nameBlock} height={34} />
      <Skeleton className={s.priceBlock} height={24} />
      <Skeleton className={s.dateBlock} height={16} />
    </div>
  );
}
