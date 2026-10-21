"use client";

import Image from "next/image";
import AuthorInfo from "../AuthorInfo/AuthorInfo.jsx";
import { useRouter } from "next/navigation";
import defaultProduct from "../../assets/default_product.png";
import * as styles from "./BoadrList.css";

export default function BoardList({ articles }) {
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
      {articles.length > 0 ? (
        articles.map((article) => (
          <div
            key={article.id}
            className={styles.article}
            onClick={() => handleClick(article.id)}
          >
            <div className={styles.content}>
              <h3 className={styles.title}>{article.title}</h3>
              <div className={styles.thumbnail}>
                <Image
                  src={defaultProduct}
                  alt="기본_이미지"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <AuthorInfo
              name={article.author?.nickname ?? "익명"}
              date={formatDate(article.createdAt)}
              dateTime={article.createdAt}
              variant="list"
            />
          </div>
        ))
      ) : (
        <p className={styles.empty}>게시글이 없습니다.</p>
      )}
    </div>
  );
}
