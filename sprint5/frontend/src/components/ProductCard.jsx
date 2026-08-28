import './ProductCard.css';


const SAMPLE_IMAGE_COUNT = 14;


const getFallbackImage = (id) => {
  const hash = String(id)
    .split('')
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return `/images/sample-${(hash % SAMPLE_IMAGE_COUNT) + 1}.png`;
};

export default function ProductCard({ product }) {
  const { id, name, price } = product;

  return (
    <div className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={getFallbackImage(id)}
          alt={name}
          className="product-card__image"
          loading="lazy"
        />
      </div>
      <p className="product-card__name">{name}</p>
      <p className="product-card__price">{price?.toLocaleString()}원</p>
    </div>
  );
}
