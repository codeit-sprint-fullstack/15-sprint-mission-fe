import Image from "next/image";
import { ARTICLE_AUTHOR_DEFAULTS } from "@/apis";
import { formatDate } from "@/utils";
import { avatar, heading, likes, likesImg } from "@/styles/shared.css";
import {
  avatarLg,
  detailAuthor,
  detailBody,
  detailLike,
  detailTitle,
  row,
} from "@/domains/article/containers/ArticleDetailContainer/ArticleDetailContainer.css";

export function ArticleContentSection({ article, children }) {
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
        <span className={`${detailLike} ${likes}`}>
          <Image
            src="/assets/board/ic_heart-1.svg"
            alt=""
            width={24}
            height={24}
            className={likesImg}
          />
          123
        </span>
      </div>

      <p className={detailBody}>{article.content}</p>
    </div>
  );
}
