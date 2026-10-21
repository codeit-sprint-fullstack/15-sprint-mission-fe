"use client";

import Image from "next/image";
import AuthorInfo from "../AuthorInfo/AuthorInfo.jsx";
import { useRouter } from "next/navigation";
import * as styles from "./BestBoardList.css.js";
import medalImage from "../../assets/ic_medal.png";
import defaultProduct from "../../assets/default_product.png";

export default function BestBoardList({ articles }) {
  const router = useRouter();

  const formatDate = (date) => {
    return new Date(date)
      .toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\s/g, "")
      .replace(/\.$/, "");
  };

  const handleClick = async (id) => {
    router.push(`/boards/${id}`);
  };

  return (
    <div className={styles.list}>
      {articles.map((article) => (
        <div
          key={article.id}
          className={styles.card}
          onClick={() => handleClick(article.id)}
        >
          <div className={styles.badge}>
            <Image src={medalImage} alt="메달_이미지" width={16} height={16} />
            <p>Best</p>
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{article.title}</h2>
            <div className={styles.thumbnail}>
              <Image
                src={defaultProduct}
                alt="기본_이미지"
                width={48}
                height={48}
                objectFit="contain"
              />
            </div>
          </div>
          <AuthorInfo
            name={article.author?.nickname ?? "익명"}
            date={formatDate(article.createdAt)}
            dateTime={article.createdAt}
            variant="best"
          />
        </div>
      ))}
    </div>
  );
}
