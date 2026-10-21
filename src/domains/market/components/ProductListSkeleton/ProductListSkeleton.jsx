import { Skeleton } from "@/components/Skeleton";
import {
  controls,
  section,
  toolbar,
} from "@/domains/market/containers/ItemsPageContainer/ProductListSection.css";
import * as s from "./ProductListSkeleton.css";

const CARDS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function ProductListSkeleton() {
  return (
    <section className={section}>
      <div className={toolbar}>
        <Skeleton className={s.nameBlock} width={140} height={28} />
        <div className={controls}>
          <Skeleton width={325} height={42} radius="12px" />
          <Skeleton width={140} height={42} radius="12px" />
          <Skeleton width={120} height={42} radius="12px" />
        </div>
      </div>

      <div className={s.grid}>
        {CARDS.map((index) => (
          <div key={index}>
            <Skeleton className={s.cardImage} height={undefined} />
            <Skeleton className={s.cardName} width="90%" height={16} />
            <Skeleton className={s.cardPrice} width="48%" height={18} />
          </div>
        ))}
      </div>

      <div className={s.pagination}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
          <Skeleton key={index} width={40} height={40} radius="50%" />
        ))}
      </div>
    </section>
  );
}
