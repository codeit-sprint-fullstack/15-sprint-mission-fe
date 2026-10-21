import Image from "next/image";
import Link from "next/link";
import { ARTICLE_AUTHOR_DEFAULTS } from "@/apis";
import { formatDate } from "@/utils";
import { resolveImageUrl } from "@/domains/market/utils/productImage";
import { likes } from "@/styles/shared.css";
import {
  bestBadge,
  bestCard,
  likesImgSm,
  meta,
  metaSpread,
  postTitle,
  postTop,
  thumb,
  thumbPhoto,
} from "@/domains/board/containers/BoardPageContainer/BoardPageContainer.css";

const medal = "/assets/board/ic_medal.svg";
const heartSm = "/assets/board/ic_heart-2.svg";

export function BoardBestArticleCard({ article }) {
  const thumbnail =
    Array.isArray(article.images) && article.images.length > 0
      ? resolveImageUrl(article.images[0])
      : null;

  return (
    <Link href={`/board/${article.id}`} className={bestCard}>
      <span className={bestBadge}>
        <Image src={medal} alt="" width={16} height={16} />
        Best
      </span>
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
      <div className={`${meta} ${metaSpread}`}>
        <span>
          {article.author ?? ARTICLE_AUTHOR_DEFAULTS.nickname}{" "}
          <span className={likes}>
            <Image
              src={heartSm}
              alt=""
              width={16}
              height={16}
              className={likesImgSm}
            />
            {article.likeCount}
          </span>
        </span>
        <span>{formatDate(article.createdAt)}</span>
      </div>
    </Link>
  );
}
