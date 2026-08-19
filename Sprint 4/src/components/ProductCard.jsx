import heartIcon from '../assets/icons/ic_heart.svg';
import './ProductCard.css';


const SAMPLE_IMAGE_COUNT = 14;
const getFallbackImage = (id) => `/images/sample-${(id % SAMPLE_IMAGE_COUNT) + 1}.png`;

export default function ProductCard({ product }) {
  const { id, images, name, price, favoriteCount } = product;
  
  const initialSrc = images && images.length > 0 ? images[0] : getFallbackImage(id);

  return (
    <div className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={initialSrc}
          alt={name}
          className="product-card__image"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null; 
            event.currentTarget.src = getFallbackImage(id);
          }}
        />
      </div>
      <p className="product-card__name">{name}</p>
      <p className="product-card__price">{price?.toLocaleString()}원</p>
      <p className="product-card__favorite">
        <img src={heartIcon} alt="좋아요" className="product-card__heart-icon" />
        {favoriteCount}
      </p>
    </div>
  );
}
