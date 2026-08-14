import "./ProductCard.css";
function ProductCard({ product }) {
  return (
    <div className="product-card">
      {" "}
      <div className="product-image">
        {" "}
        {product.images?.[0] && (
          <img src={product.images[0]} alt={product.name} />
        )}{" "}
      </div>{" "}
      <h2 className="product-name">{product.name}</h2>{" "}
      <p className="product-price"> {product.price.toLocaleString()}원 </p>{" "}
      <span className="product-favorite">
        {" "}
        ❤️ {product.favoriteCount ?? 0}{" "}
      </span>{" "}
    </div>
  );
}
export default ProductCard;
