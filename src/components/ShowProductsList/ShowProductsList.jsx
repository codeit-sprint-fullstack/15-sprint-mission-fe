export function ShowProductsList({ posts }) {
  return (
    <div>
      <ul>
        {posts.map(({ id, name, price, favoriteCount, images }) => (
          <li key={id}>
            <div>
              제목:{name} / 가격:{price} / 좋아요:{favoriteCount}
              <img src={images} width={16} height={16} loading="lazy" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
