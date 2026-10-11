'use client';

import { fetchReplies } from '@/lib/api/replies';
import { queryKeys } from '@/lib/queryKeys';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import ReplyItem from './ReplyItem';
import * as styles from './ReplyList.css';

function ReplyList() {
  const { id: articleId } = useParams();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    error,
  } = useInfiniteQuery({
    queryKey: queryKeys.replies.list(articleId),
    queryFn: ({ pageParam }) => fetchReplies({ articleId, cursor: pageParam }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage?.data.nextCursor ?? undefined;
    },
  });

  if (isPending) return <div>댓글을 불러오는 중...</div>;
  if (error) return <div>댓글을 불러오지 못했습니다.</div>;

  const replies =
    data.pages
      .flatMap((page) => page?.data.list)
      .filter((i) => i !== undefined) ?? [];

  console.log(replies);

  if (replies.length === 0) {
    return <div>작성된 댓글이 없습니다.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.replyList}>
        {replies.map((reply) => (
          <ReplyItem key={reply.id} reply={reply} />
        ))}
      </div>

      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? '불러오는 중...' : '더 보기'}
        </button>
      )}
    </div>
  );
}

export default ReplyList;
