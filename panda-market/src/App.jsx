import './App.css';
import { Nav } from './Components/Nav/Nav';
import { Footer } from './Components/Footer/Footer';
// import { fetchPosts } from './api/posts';
// import { useState, useEffect } from 'react';
// import { Pagination } from './Components/Pagination';
// import { PostCard } from './pages/PostCard/PostCard';
import { PostList } from './pages/PostList';
import { PostBestList } from './pages/PostBestList/PostBestList';

// const ITEMS_PER_PAGE = 10;
// const INITIAL_TOTAL_COUNT = 0;
// const INITIAL_PAGE = 1;

function App() {
  // const [items, setItems] = useState([]);

  // const [nowPage, setNowPage] = useState(INITIAL_PAGE);
  // const [totalCount, setTotalCount] = useState(INITIAL_TOTAL_COUNT);
  // const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);;

  // useEffect(() => {
  //   const getPosts = async () => {
  //     try {
  //       const { list, totalCount } = await fetchPosts(nowPage, ITEMS_PER_PAGE);
  //       setItems(list);
  //       setTotalCount(totalCount);
  //       console.log(list);
  //     } catch (error) {
  //       console.log('에러 발생', error);
  //     }
  //   };
  //   getPosts();
  // }, [nowPage, totalPages]); //-> 옆에 경고가 뜨는대로 작성함, 사용자가 있는 페이지가 바뀔 때 위 함수를 다시 실행

  // const goToPage = (herePage) => {
  //   if (herePage <= 0 || herePage > totalPages) {
  //     console.log('잘 못된 페이지 수 입니다.');
  //     return;
  //   }
  //   setNowPage(herePage);
  // };

  return (
    <>
      <Nav />
      <section className="productWrap">
        <div className="productContainer">
          <PostBestList />
          {/* items={items} */}
          <PostList />
          {/* items={items}
      nowPage={nowPage}
      totalPages={totalPages}
      goToPage={goToPage} */}
          {/* <ul>
        {items.map((item) => (
          // <li key={item.id}>{item.name}</li>
          <PostCard 
          items={item}
          key={item.id}/>
        ))}
      </ul>
      <Pagination
        nowPage={nowPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      /> */}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
