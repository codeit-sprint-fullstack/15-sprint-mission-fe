import Image from "next/image";
import styles from "./ProductCard.module.css";
import { CiHeart } from "react-icons/ci";
import logo from "@/assets/logo.png";

export default function ProductCard({ products, variant }) {
  return (
    <li className={`${styles.card} ${variant ? styles[variant] : ""}`}>
      <Image
        src={logo}
        alt="제품 사진"
        className={styles.image}
        width={220}
        height={220}
      />
      <p className={styles.description}>
        {products.description ?? "상품 설명"}
      </p>
      <p className={styles.price}>
        {Number(products.price).toLocaleString() ?? 0}원
      </p>
      <div className={styles.favoriteCount}>
        <CiHeart />
        <p>240</p>
      </div>
    </li>
  );
}
