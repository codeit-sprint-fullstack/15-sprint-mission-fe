import Image from "next/image";
import Link from "next/link";
import { ARTICLE_AUTHOR_DEFAULTS } from "@/apis";
import { formatDate } from "@/utils";
import { avatar, likes, likesImg } from "@/styles/shared.css";
import {
  meta,
  metaSpreadTight,
  postItem,
  postTitle,
  postTop,
  thumb,
} from "@/domains/board/containers/BoardPageContainer/BoardPageContainer.css";

const heartLg = "/assets/board/ic_heart-1.svg";
const profile = "/assets/board/ic_profile.svg";

export function BoardArticleListItem({ article }) {
  return (
    <Link href={`/board/${article.id}`} className={postItem}>
      <div className={postTop}>
        <p className={postTitle}>{article.title}</p>
        <Image
          src={ARTICLE_AUTHOR_DEFAULTS.image}
          alt=""
          width={72}
          height={72}
          className={thumb}
        />
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
