import icProfile from '@/assets/boards/ic_profile.svg';
import { updateReply } from '@/lib/api/replies';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';
import * as styles from './ReplyItem.css';
import ReplyOptionMenu from './ReplyOptionMenu';

function ReplyItem({ reply }) {
  const { id, content, createdAt, articleId } = reply;
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(reply.content);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (newContent) => updateReply({ id, content: newContent }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.replies.list(String(articleId)),
      });
      alert('댓글이 수정되었습니다.');
      setIsEditing(false);
    },
    onError: (error) => {
      alert('댓글 수정에 실패했습니다.');
      console.error(error);
    },
  });

  const handleStartEdit = () => {
    setEditContent(content);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditContent(content);
    setIsEditing(false);
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    if (isPending) return;

    const trimmedContent = editContent.trim();
    if (!trimmedContent) {
      alert('댓글 내용을 입력해 주세요');
      return;
    }

    mutate(trimmedContent);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmitEdit} className={styles.editContainer}>
          <div className={styles.replyTop}>
            <textarea
              className={styles.editTextarea}
              value={editContent}
              autoFocus
              placeholder="수정할 댓글 내용을 입력하세요."
              onChange={(event) => setEditContent(event.target.value)}
            />
          </div>
          <div className={styles.replyEditBottom}>
            <div className={styles.replyBottom}>
              <div className={styles.replyProfileContainer}>
                <Image
                  className={styles.replyProfileImage}
                  src={icProfile}
                  alt="프로필 이미지"
                />
              </div>
              <div className={styles.replyInfo}>
                <p className={styles.replyUser}>똑똑한판다</p>
                <p className={styles.replyDate}>{createdAt}</p>
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <button
                type="button"
                onClick={handleCancelEdit}
                className={styles.cancelButton}
              >
                취소
              </button>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isPending || !editContent.trim()}
              >
                {isPending ? '수정 중...' : '수정 완료'}
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className={styles.readOnlyContainer}>
          <div className={styles.replyTop}>
            <p className={styles.replyContent}>{content}</p>
            <ReplyOptionMenu id={id} onEdit={handleStartEdit} />
          </div>
          <div className={styles.replyBottom}>
            <div className={styles.replyProfileContainer}>
              <Image
                className={styles.replyProfileImage}
                src={icProfile}
                alt="프로필 이미지"
              />
            </div>
            <div className={styles.replyInfo}>
              <p className={styles.replyUser}>똑똑한판다</p>
              <p className={styles.replyDate}>{createdAt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ReplyItem;
