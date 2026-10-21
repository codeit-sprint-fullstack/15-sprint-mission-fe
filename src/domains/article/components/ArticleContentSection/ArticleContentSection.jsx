import Image from "next/image";
import { ARTICLE_AUTHOR_DEFAULTS } from "@/apis";
import { HeartIcon } from "@/components/Icons";
import { formatDate } from "@/utils";
import { resolveImageUrl } from "@/domains/market/utils/productImage";
import { avatar, heading, likes } from "@/styles/shared.css";
import {
  avatarLg,
  detailAuthor,
  detailBody,
  detailImage,
  detailImageItem,
  detailImages,
  detailLike,
  detailTitle,
  row,
} from "@/domains/article/containers/ArticleDetailContainer/ArticleDetailContainer.css";

export function ArticleContentSection({
  article,
  likeCount = 0,
  isLiked = false,
  onToggleLike,
  children,
}) {
  const images = Array.isArray(article.images) ? article.images : [];

  return (
    <div>
      <div className={row}>
        <h2 className={`${heading} ${detailTitle}`}>{article.title}</h2>
        {children}
      </div>

      <div className={detailAuthor}>
        <Image
          src="/assets/board/ic_profile-1.svg"
          alt=""
          width={40}
          height={40}
          className={`${avatar} ${avatarLg}`}
        />
        <b>{article.author ?? ARTICLE_AUTHOR_DEFAULTS.nickname}</b>
        <span>{formatDate(article.createdAt)}</span>
        <button
          type="button"
          className={`${detailLike} ${likes}`}
          aria-pressed={isLiked}
          aria-label={isLiked ? "좋아요 취소" : "좋아요"}
          onClick={onToggleLike}
        >
          <HeartIcon filled={isLiked} size={24} />
          {likeCount}
        </button>
      </div>

      {images.length > 0 && (
        <ul className={detailImages}>
          {images.map((url, index) => (
            <li key={`${url}-${index}`} className={detailImageItem}>
              <img
                src={resolveImageUrl(url)}
                alt={`게시글 이미지 ${index + 1}`}
                className={detailImage}
              />
            </li>
          ))}
        </ul>
      )}

      <p className={detailBody}>{article.content}</p>
    </div>
  );
}
