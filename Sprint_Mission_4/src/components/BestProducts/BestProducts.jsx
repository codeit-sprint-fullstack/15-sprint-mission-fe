import { ShowProductsList } from '../ShowProductsList';

export function BestProducts() {

  return (
    <div>
      <h1>베스트 상품</h1>
      <ShowProductsList pageSize={4} orderBy={'favorite'}/>
    </div>
  );
}
