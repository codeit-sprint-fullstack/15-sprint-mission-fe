import ProductCard from "./ProductCard";

function ProductCardList({ products, gridCols }) {
  return (
    <div className={`grid ${gridCols} gap-4`}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductCardList;
