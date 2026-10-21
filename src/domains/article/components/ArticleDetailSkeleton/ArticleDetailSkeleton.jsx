import { Skeleton } from "@/components/Skeleton";
import { board } from "@/styles/shared.css";
import * as s from "./ArticleDetailSkeleton.css";

const COMMENT_ITEMS = [0, 1, 2];

export function ArticleDetailSkeleton() {
  return (
    <section className={board}>
      <div className={s.titleWrap}>
        <Skeleton className={s.titleBlock} height={34} />
        <Skeleton className={s.kebabBlock} width={24} height={24} />
      </div>

      <div className={s.authorRow}>
        <Skeleton className={s.avatarBlock} width={40} height={40} />
        <Skeleton className={s.authorName} height={14} />
        <Skeleton className={s.authorDate} height={14} />
        <Skeleton className={s.likeBlock} height={34} />
      </div>

      <div className={s.contentLines}>
        <Skeleton height={18} radius="4px" />
        <Skeleton height={18} width="92%" radius="4px" />
        <Skeleton height={18} width="85%" radius="4px" />
      </div>

      <div>
        <Skeleton className={s.commentHeading} height={22} />
        <Skeleton className={s.commentAreaBlock} height={104} />
        <div className={s.submitWrap}>
          <Skeleton className={s.submitBlock} height={42} />
        </div>

        {COMMENT_ITEMS.map((index) => (
          <div className={s.commentItem} key={index}>
            <Skeleton className={s.commentText} height={16} />
            <div className={s.commentMeta}>
              <Skeleton className={s.commentMetaDot} width={20} height={20} />
              <Skeleton className={s.commentMetaName} height={12} />
              <Skeleton className={s.commentMetaDate} height={12} />
            </div>
          </div>
        ))}
      </div>

      <div className={s.backBlock}>
        <Skeleton className={s.backBtnBlock} height={48} />
      </div>
    </section>
  );
}
