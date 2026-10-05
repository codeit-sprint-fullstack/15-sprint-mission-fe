"use client";

import { use } from "react";
import { ArticleItem } from "@/components/ArticleItem";
import * as styles from "./ArticleList.css";

export default function ArticleList({
  articlePromise,
  limit,
  keyword,
  sortBy,
  className,
}) {
  const articles = use(articlePromise);

  const listVariant = className === "list" ? "" : styles.cardContainer;

  const filtered = keyword
    ? articles.filter((a) => a.title.includes(keyword))
    : articles;

  const sorted = [...filtered].sort((a, b) => {
    if(sortBy === 'best'){
      return new Date(a.createdAt) - new Date(b.createdAt)
    }
    return new Date(b.createdAt) - new Date(a.createdAt)
  })

  return (
    <div className={listVariant}>
      {sorted.slice(0, limit).map((article) => (
        <ArticleItem key={article.id} {...article} className={className} />
      ))}
    </div>
  );
}
