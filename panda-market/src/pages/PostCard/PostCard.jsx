import './PostCard.css';
import heartIcon from '../../assets/ic_heart.svg';
import defaultImage from '../../assets/Img_default.svg'

export const PostCard = ({ items }) => {
  return (
    <div className="postCard">
      <img className="itemImg" src={items.images || defaultImage} alt={items.name} />
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
