export function ShowProductsList({ posts }) {
  return (
    <div>
      <h1>ShowProductsList</h1>
      <ul>
        {posts.map(({ id, name, price, favoriteCount }) => (
          <li key={id}>
            제목:{name} / 가격:{price} / 좋아요:{favoriteCount}
          </li>
        ))}
      </ul>
    </div>
  );
}
