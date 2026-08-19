import './PostBestCard.css';
import heartIcon from '../../assets/ic_heart.svg';

export const PostBestCard = ({ items }) => {
  return (
    <div className="bestCard">
      <img className="itemImg" src={items.images} alt={items.images} />
      <div className="detail">
        <p className="name">{items.name}</p>
        <p className="price">{items.price}원</p>
        <p className="like">
          <img src={heartIcon} alt="#좋아요" className="heartImg" />
          <p className="likeNumber">{items.favoriteCount}</p>
        </p>
      </div>
    </div>
  );
};
