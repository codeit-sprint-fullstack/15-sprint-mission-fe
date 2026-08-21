import "./ProductCard.css";
import iconHeart from "../assets/icon-heart.svg";

function ProductCard({ product }) {
    const { name, price, images, favoriteCount } = product;

    return (
        <article className="productCard">
            <div className="productCardImage">
                <img src={images[0]} alt={name} />
            </div>

            <div className="productCardInfo">
                <h3 className="productCardName">{name}</h3>

                <p className="productCardPrice">
                    {price.toLocaleString("ko-KR")}원
                </p>

                <div className="productCardFavorite">
                    <img src={iconHeart} alt="" />
                    <span>{favoriteCount}</span>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;