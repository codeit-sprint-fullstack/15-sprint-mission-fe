import Image from "next/image";
import Link from "next/link";
import { ARTICLE_AUTHOR_DEFAULTS } from "@/apis";
import { formatDate } from "@/utils";
import { resolveImageUrl } from "@/domains/market/utils/productImage";
import { avatar, likes, likesImg } from "@/styles/shared.css";
import {
  meta,
  metaSpreadTight,
  postItem,
  postTitle,
  postTop,
  thumb,
  thumbPhoto,
} from "@/domains/board/containers/BoardPageContainer/BoardPageContainer.css";

const heartLg = "/assets/board/ic_heart-1.svg";
const profile = "/assets/board/ic_profile.svg";

export function BoardArticleListItem({ article }) {
  const thumbnail =
    Array.isArray(article.images) && article.images.length > 0
      ? resolveImageUrl(article.images[0])
      : null;

  return (
    <Link href={`/board/${article.id}`} className={postItem}>
      <div className={postTop}>
        <p className={postTitle}>{article.title}</p>
        {thumbnail ? (
          <img src={thumbnail} alt="" className={thumbPhoto} />
        ) : (
          <Image
            src={ARTICLE_AUTHOR_DEFAULTS.image}
            alt=""
            width={72}
            height={72}
            className={thumb}
          />
        )}
      </div>
      <div className={`${meta} ${metaSpreadTight}`}>
        <span>
          <Image
            src={profile}
            alt=""
            width={24}
            height={24}
            className={avatar}
          />{" "}
          {article.author ?? ARTICLE_AUTHOR_DEFAULTS.nickname}{" "}
          {formatDate(article.createdAt)}
        </span>
        <span className={likes}>
          <Image
            src={heartLg}
            alt=""
            width={24}
            height={24}
            className={likesImg}
          />
          {article.likeCount}
        </span>
      </div>
    </Link>
  );
}
