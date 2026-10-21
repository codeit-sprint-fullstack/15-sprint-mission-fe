"use client";

import { useState } from "react";
import Image from "next/image";
import { HeartIcon } from "@/components/Icons";
import { KebabMenu } from "@/components/KebabMenu";
import { formatDotDate, formatPrice } from "@/utils";
import { getProductImage, resolveImageUrl } from "@/domains/market/utils/productImage";
import * as styles from "./ProductDetail.css";

export function ProductDetail({ product, onEdit, onDelete, onToggleFavorite }) {
  const tags = product.tags ?? [];
  const images = Array.isArray(product.images) ? product.images : [];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const mainImage =
    images.length > 0
      ? resolveImageUrl(images[Math.min(selectedIndex, images.length - 1)])
      : getProductImage(product);

  return (
    <section className={styles.product}>
      <div className={styles.gallery}>
        <div className={styles.imageWrap}>
          <img
            src={mainImage}
            alt={product.name}
            className={styles.image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {images.length > 1 && (
          <ul className={styles.thumbList}>
            {images.map((url, index) => (
              <li key={`${url}-${index}`}>
                <button
                  type="button"
                  className={
                    index === selectedIndex
                      ? `${styles.thumb} ${styles.thumbActive}`
                      : styles.thumb
                  }
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`${index + 1}번째 이미지 보기`}
                  aria-pressed={index === selectedIndex}
                >
                  <img
                    src={resolveImageUrl(url)}
                    alt=""
                    className={styles.thumbImg}
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
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
            onClick={() => onToggleFavorite(Boolean(product.isLiked))}
            aria-pressed={Boolean(product.isLiked)}
            aria-label={product.isLiked ? "좋아요 취소" : "좋아요"}
          >
            <HeartIcon size={24} filled={Boolean(product.isLiked)} />
            <span>{product.likeCount ?? product.favoriteCount ?? 0}</span>
          </button>
        </div>
      </div>
    </section>
  );
}