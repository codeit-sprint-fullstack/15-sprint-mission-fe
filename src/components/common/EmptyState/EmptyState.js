import * as styles from "./EmptyState.css";
import Image from "next/image";
import icSearchEmpty from "@/assets/images/ic-search-empty.svg";
import clsx from "clsx";

export default function EmptyState({
  message = "검색 결과가 없어요!",
  image = icSearchEmpty,
  messageClassName,
}) {
  return (
    <div className={styles.emptyBox}>
      <Image src={image} alt="" width={160} height={160} />
      <p className={clsx(styles.emptyText, messageClassName)}>{message}</p>
    </div>
  );
}
