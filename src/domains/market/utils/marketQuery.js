const ITEMS_SORT_OPTIONS = ["recent", "oldest"];

export function parseItemsSearchParams(searchParams = {}) {
  const rawPage = Number(searchParams.page ?? 1);
  const page = Number.isSafeInteger(rawPage) && rawPage > 0 ? rawPage : 1;

  const rawSize = Number(searchParams.pageSize ?? 10);
  const pageSize = Number.isSafeInteger(rawSize) && rawSize > 0 ? rawSize : 10;

  const keyword =
    typeof searchParams.keyword === "string" ? searchParams.keyword.trim() : "";

  const orderBy = ITEMS_SORT_OPTIONS.includes(searchParams.orderBy)
    ? searchParams.orderBy
    : "recent";

  return { page, pageSize, keyword, orderBy };
}

export function buildItemsHref({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
} = {}) {
  const params = new URLSearchParams();

  params.set("page", String(page));
  params.set("pageSize", String(pageSize));
  params.set(
    "orderBy",
    ITEMS_SORT_OPTIONS.includes(orderBy) ? orderBy : "recent",
  );

  if (keyword.trim()) {
    params.set("keyword", keyword.trim());
  }

  const query = params.toString();
  return query ? `/items?${query}` : "/items";
}
