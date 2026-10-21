import { Skeleton } from "@/components/Skeleton";
import {
  bestCard,
  bestGrid,
  postItem,
  postTop,
  toolbar,
} from "@/domains/board/containers/BoardPageContainer/BoardPageContainer.css";
import { board, head, heading } from "@/styles/shared.css";
import * as s from "./BoardListSkeleton.css";

const BEST_CARDS = [0, 1, 2];
const POST_ITEMS = [0, 1, 2, 3, 4];
const PAGES = [0, 1, 2, 3, 4, 5, 6, 7];

export function BoardListSkeleton() {
  return (
    <section className={board}>
      <h2 className={heading}>베스트 게시글</h2>
      <div className={bestGrid}>
        {BEST_CARDS.map((index) => (
          <div className={bestCard} key={index}>
            <Skeleton className={s.badgeBar} height={32} />
            <div className={s.cardContent}>
              <div className={s.cardTop}>
                <div className={s.titleLines}>
                  <Skeleton height={20} radius="6px" />
                  <Skeleton height={20} width="70%" radius="6px" />
                </div>
                <Skeleton className={s.thumbBlock} width={72} height={72} />
              </div>
              <div className={s.metaLine}>
                <Skeleton width={120} height={14} radius="4px" />
                <Skeleton width={64} height={14} radius="4px" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={head}>
        <h2 className={heading}>게시글</h2>
        <Skeleton className={s.writeButtonBlock} width={100} height={42} />
      </div>

      <div className={toolbar}>
        <Skeleton className={s.searchBlock} width={325} height={42} />
        <Skeleton className={s.sortBlock} width={120} height={42} />
      </div>

      {POST_ITEMS.map((index) => (
        <div className={postItem} key={index}>
          <div className={postTop}>
            <div className={s.titleLines}>
              <Skeleton height={20} radius="6px" />
              <Skeleton height={16} width="55%" radius="4px" />
            </div>
            <Skeleton className={s.thumbBlock} width={72} height={72} />
          </div>
          <div className={s.metaLine}>
            <Skeleton width={150} height={14} radius="4px" />
            <Skeleton width={48} height={14} radius="4px" />
          </div>
        </div>
      ))}

      <div className={s.paginationBlock}>
        {PAGES.map((index) => (
          <Skeleton key={index} width={40} height={40} radius="50%" />
        ))}
      </div>
    </section>
  );
}
