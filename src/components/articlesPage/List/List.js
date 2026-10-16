import * as style from "./List.css";

export default function ArticleList({ items, renderItem, emptyComponent }) {
  if (items.length === 0) {
    return emptyComponent;
  }

  return (
    <ul className={style.list}>
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
