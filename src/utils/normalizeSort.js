const sortList = ["asc", "desc"];
const defaultSort = "desc";

export function normalizeSort(value) {
  return sortList.includes(value) ? value : defaultSort;
}
