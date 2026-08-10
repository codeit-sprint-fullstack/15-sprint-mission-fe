//# 판매 중인 상품 섹션 (그리드 + 데이터 fetch)

import ProductCard from './ProductCard.jsx';
import styles from './ProductList.module.css';

const mockProducts = [
  {id:1, imageUrl:"https://placehold.co/300", name:"아이패드 미니 팝니다", price:500000, favoriteCount:240},
  {id:2, imageUrl:"https://placehold.co/300", name:"아이패드 미니 팝니다", price:500000, favoriteCount:240},
  {id:3, imageUrl:"https://placehold.co/300", name:"아이패드 미니 팝니다", price:500000, favoriteCount:240},
  {id:4, imageUrl:"https://placehold.co/300", name:"아이패드 미니 팝니다", price:500000, favoriteCount:240},
  {id:5, imageUrl:"https://placehold.co/300", name:"아이패드 미니 팝니다", price:500000, favoriteCount:240},
  {id:6, imageUrl:"https://placehold.co/300", name:"아이패드 미니 팝니다", price:500000, favoriteCount:240},
  {id:7, imageUrl:"https://placehold.co/300", name:"아이패드 미니 팝니다", price:500000, favoriteCount:240},
  {id:8, imageUrl:"https://placehold.co/300", name:"아이패드 미니 팝니다", price:500000, favoriteCount:240},
];

export default function ProductList(){
  return (
    <sectionv className={styles.section} >
      <h2 className={styles.title}>판매 중인 상품</h2>
      <div className={styles.grid}>
        {mockProducts.map((product)=>(
          <ProductCard key={product.id}{...product}/>
          ))}
      </div>
    </sectionv>
  );
}