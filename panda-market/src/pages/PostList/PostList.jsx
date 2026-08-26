import './PostList.css';
import { Pagination } from '../../Components/Pagination';
import { PostCard } from '../PostCard/';
import { useProduct } from '../../hook/useProduct';
import { useState } from 'react';
import { SearchBar } from '../../Components/SearchBar';
import { Nav } from '../../Components/Nav/Nav';
import { Footer } from '../../Components/Footer/Footer';
import { Link } from 'react-router';

const ITEMS_PER_PAGE = 10;

export function PostList() {
  //드롭다운 메뉴로 상품 정렬 변경
  const [orderBy, setOrderBy] = useState('recent');

  //키워드 현재 값, 키워드 상태를 바꿔줄 함수 선언
  const [keyword, setKeyword] = useState('');

  //페이지네이션에 필요한 값들
  const { items, nowPage, totalPages, goToPage } = useProduct({
    limit: ITEMS_PER_PAGE,
    orderBy,
    keyword, // useProduct에서 keyword를 파라미터로 받고 있음
  });

  //드롭다운 메뉴에서 클릭시 orderBy 상태값 변경해주는 함수
  const handleOrderClick = (event) => {
    setOrderBy(event.target.value);
  };

  return (
    <>
      <Nav />
      <section className="productWrap">
        <div className="postListcontainer">
          <div className="postListHeader">
            <h2>판매 중인 상품</h2>
            <div className="listHandle">
              {/* 검색  컴포넌트 */}
              <SearchBar onSearch={setKeyword} />
              <Link className="register" to="/registration">상품 등록하기</Link>
              {/* <div className="register">상품 등록하기</div> */}
              <select
                className="dropDown"
                value={orderBy}
                onChange={handleOrderClick}
              >
                <option value="recent">최신 순</option>
                <option value="favorite">좋아요 순</option>
              </select>
            </div>
          </div>
          {/* 상품목록 map으로 뽑기, 목록 레이아웃은 PostCard 컴포넌트로 */}
          <ul>
            {items.map((item) => (
              // <li key={item.id}>{item.name}</li>
              <PostCard items={item} key={item.id} />
            ))}
          </ul>
          {/* 페이지네이션 컴포넌트  */}
          <Pagination
            nowPage={nowPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
