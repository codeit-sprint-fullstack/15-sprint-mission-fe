"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import * as styles from "@/styles/shared.css";

const PAGE_GROUP_SIZE = 5;

const ARROW_ICON_SIZE = 16;

function scrollToTopOnNavigate() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Pagination({
  page,
  totalCount,
  pageSize,
  orderBy,
  keyword,
  buildHref,
}) {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  if (totalPages <= 1) return null;

  const groupStart =
    Math.floor((page - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1;
  const groupEnd = Math.min(groupStart + PAGE_GROUP_SIZE - 1, totalPages);

  const pageNumbers = [];
  for (let number = groupStart; number <= groupEnd; number += 1) {
    pageNumbers.push(number);
  }

  const hrefFor = (targetPage) =>
    buildHref({ page: targetPage, pageSize, orderBy, keyword });

  const hasPrevGroup = groupStart > 1;
  const hasNextGroup = groupEnd < totalPages;

  return (
    <nav className={styles.pagination} aria-label="페이지네이션">
      <Link
        href={hrefFor(groupStart - 1)}
        className={clsx(
          styles.arrowButton,
          !hasPrevGroup && styles.arrowButtonDisabled,
        )}
        aria-label="이전 5개 페이지"
        aria-disabled={!hasPrevGroup}
        scroll={false}
        onNavigate={scrollToTopOnNavigate}
      >
        <Image
          src="/assets/icons/arrow_left.svg"
          alt=""
          width={ARROW_ICON_SIZE}
          height={ARROW_ICON_SIZE}
          className={styles.arrowIcon}
        />
      </Link>

      {pageNumbers.map((pageNumber) => (
        <Link
          key={pageNumber}
          href={hrefFor(pageNumber)}
          className={clsx(
            styles.pageButton,
            pageNumber === page && styles.pageButtonActive,
          )}
          aria-current={pageNumber === page ? "page" : undefined}
          scroll={false}
          onNavigate={scrollToTopOnNavigate}
        >
          {pageNumber}
        </Link>
      ))}

      <Link
        href={hrefFor(groupEnd + 1)}
        className={clsx(
          styles.arrowButton,
          !hasNextGroup && styles.arrowButtonDisabled,
        )}
        aria-label="다음 5개 페이지"
        aria-disabled={!hasNextGroup}
        scroll={false}
        onNavigate={scrollToTopOnNavigate}
      >
        <Image
          src="/assets/icons/arrow_right.svg"
          alt=""
          width={ARROW_ICON_SIZE}
          height={ARROW_ICON_SIZE}
          className={styles.arrowIcon}
        />
      </Link>
    </nav>
  );
}
