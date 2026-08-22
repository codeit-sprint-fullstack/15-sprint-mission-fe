import style from '../styles/ItemCard.module.css';
import heart from '../assets/ic_heart.png';

export function ItemCard({ name, price, likes, image }) {
  return (
    <div className={style.Card}>
      <img className={style.itemPhoto} src={image} alt="상품이미지" />
      <div className={style.textSection}>
        <p className={style.itemName}>{name}</p>
        <p className={style.itemPrice}>{price}원</p>
        <div className={style.likeSection}>
          <img className={style.heartIcon} src={heart} alt="하트" />
          <span className={style.itemLikes}>{likes}</span>
        </div>
      </div>
    </div>
  );
}