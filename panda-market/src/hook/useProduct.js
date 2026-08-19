import { useState, useEffect } from 'react';
import { fetchPosts } from '../api/posts';

export function useProduct({initialPage = 1, limit, orderBy = 'recent', keyword = ''}) {
  const [items, setItems] = useState([]);
  const [nowPage, setNowPage] = useState(initialPage);
  const [totalCount, setTotalCount] = useState(0);
  const totalPages = Math.ceil(totalCount / limit);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { list, totalCount } = await fetchPosts(nowPage, limit, orderBy, keyword);
        setItems(list);
        setTotalCount(totalCount);
        console.log(list);
      } catch (error) {
        console.log('에러 발생', error);
      }
    };
    getPosts();
  }, [nowPage, limit, orderBy, keyword]); //-> 옆에 경고가 뜨는대로 작성함, 사용자가 있는 페이지가 바뀔 때 위 함수를 다시 실행

  const goToPage = (herePage) => {
    if (herePage <= 0 || herePage > totalPages) {
      console.log('잘 못된 페이지 수 입니다.');
      return;
    }
    setNowPage(herePage);
  };

  return { items, nowPage, totalPages, goToPage };
  //useProduct 훅의 리턴값
}
