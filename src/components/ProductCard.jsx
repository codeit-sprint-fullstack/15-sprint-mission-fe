import "../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img 
      className="product-image" 
      src={product.images?.[0]} 
      alt={product.name} />

      <p className="product-name">{product.name}</p>

      <strong className="product-price">
        {product.price.toLocaleString()}원
      </strong>

      <span className="product-heart">
        <img src="/image/ic_heart.png" alt="좋아요" />
        {product.favoriteCount}
      </span>
    </article>
  );
}

export default ProductCard;
