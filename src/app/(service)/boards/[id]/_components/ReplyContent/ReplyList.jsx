'use client';

import imgReplyEmpty from '@/assets/boards/img_reply_empty.svg';
import { fetchReplies } from '@/lib/api/replies';
import { queryKeys } from '@/lib/queryKeys';
import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
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

  if (replies.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <Image src={imgReplyEmpty} alt="댓글 없음 이미지" />
        <p className={styles.emptyMessage}>
          아직 댓글이 없어요,
          <br />
          지금 댓글을 달아보세요!
        </p>
      </div>
    );
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
