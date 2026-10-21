"use client";

import Image from "next/image";
import { HeartIcon } from "@/components/Icons";
import { KebabMenu } from "@/components/KebabMenu";
import { formatDotDate, formatPrice } from "@/utils";
import { getProductImage } from "@/domains/market/utils/productImage";
import * as styles from "./ProductDetail.css";

export function ProductDetail({ product, onEdit, onDelete, onToggleFavorite }) {
  const tags = product.tags ?? [];

  const image = getProductImage(product.id);

  return (
    <section className={styles.product}>
      <div className={styles.imageWrap}>
        <Image
          src={image}
          alt={product.name}
          fill
          sizes="(min-width: 1200px) 486px, (min-width: 744px) 340px, 100vw"
          priority
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.titleRow}>
          <h1 className={styles.name}>{product.name}</h1>
          <KebabMenu label="상품 더보기" onEdit={onEdit} onDelete={onDelete} />
        </div>

        <p className={styles.price}>{formatPrice(product.price)}</p>

        <h2 className={styles.label}>상품 소개</h2>
        <p className={styles.description}>{product.description}</p>

        <h2 className={`${styles.label} ${styles.tagLabel}`}>상품 태그</h2>
        <ul className={styles.tags}>
          {tags.map((tag, index) => (
            <li key={`${tag}-${index}`} className={styles.tag}>
              #{tag}
            </li>
          ))}
        </ul>

        <div className={styles.owner}>
          <div className={styles.ownerInfo}>
            <Image
              src="/images/profile-40.svg"
              alt=""
              width={40}
              height={40}
              className={styles.ownerAvatar}
            />
            <div>
              <p className={styles.ownerName}>{product.ownerNickname}</p>
              <p className={styles.date}>{formatDotDate(product.createdAt)}</p>
            </div>
          </div>

          <Image
            src="/images/divider-v.svg"
            alt=""
            width={2}
            height={18}
            className={styles.divider}
          />

          <button
            type="button"
            className={styles.favorite}
            onClick={() => onToggleFavorite(Boolean(product.isFavorite))}
            aria-pressed={Boolean(product.isFavorite)}
            aria-label={product.isFavorite ? "좋아요 취소" : "좋아요"}
          >
            <span className={styles.favoriteIcon}>
              <HeartIcon size={32} filled={Boolean(product.isFavorite)} />
            </span>
            <span>{product.favoriteCount ?? 0}</span>
          </button>
        </div>
      </div>
    </section>
  );
}