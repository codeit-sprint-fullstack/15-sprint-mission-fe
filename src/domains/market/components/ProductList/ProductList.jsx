"use client";

import clsx from "clsx";
import { EmptyState } from "@/components/EmptyState";
import { useDeviceType } from "@/hooks/useDeviceType";
import { ProductCard } from "@/domains/market/components/ProductCard";
import * as s from "@/domains/market/containers/ItemsPageContainer/ProductListSection.css";

const GRID_CLASS = {
  desktop: "gridDesktop",
  tablet: "gridTablet",
  mobile: "gridMobile",
};

export function ProductList({ products, isLoading }) {
  const deviceType = useDeviceType();

  if (!isLoading && products.length === 0) {
    return <EmptyState message="검색 결과가 없어요." />;
  }

  return (
    <div
      className={clsx(
        s.grid,
        s[GRID_CLASS[deviceType]],
        isLoading && s.gridLoading,
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
