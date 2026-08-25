import { useReducer, useEffect } from 'react';
import { getPosts } from '../api/posts';

const INITIAL_TOTAL_PAGES = 0;
const INITIAL_PAGE = 1;

const initialState = {
  currentPage: INITIAL_PAGE,
  posts: [],
  totalPages: INITIAL_TOTAL_PAGES,
  isLoading: false,
  isSuccess: undefined,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, isLoading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        posts: action.payload.data,
        totalPages: action.payload.totalPages,
      };
    case 'FETCH_ERROR':
      return { ...state, isLoading: false, isSuccess: false, totalPages: 0 };
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}

export function useGetPost(limit, sort, keyword) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentPage, posts, totalPages, isLoading, isSuccess } = state;

  useEffect(() => {
    let isActive = true;

    const getPostsData = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const { data, totalPages, isSuccess } = await getPosts(
          currentPage,
          limit,
          sort,
          keyword,
        );
        if (!isSuccess) {
          throw new Error('useGetPost ERROR');
        }
        if (isActive) {
          dispatch({ type: 'FETCH_SUCCESS', payload: { data, totalPages } });
        }
      } catch (error) {
        if (isActive) {
          console.log('error:', error);
          dispatch({ type: 'FETCH_ERROR' });
        }
      }
    };

    getPostsData();

    return () => {
      isActive = false;
    };
  }, [currentPage, limit, sort, keyword]);

  const handleCurrentPage = (selectedPage) => {
    if (selectedPage < 1 || selectedPage > totalPages) {
      return;
    }
    dispatch({ type: 'SET_PAGE', payload: selectedPage });
  };

  return {
    posts,
    totalPages,
    currentPage,
    isLoading,
    isSuccess,
    handleCurrentPage,
  };
}
