import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://panda-market-api.vercel.app',
});

export const getProducts = async ({ page = 1, pageSize = 10, orderBy = 'recent', keyword = '' }) => {
  const { data } = await instance.get('/products', {
    params: { page, pageSize, orderBy, keyword },
  });
  return data;
};


export const getBestProducts = async ({ pageSize = 4 }) => {
  const { data } = await instance.get('/products', {
    params: { page: 1, pageSize, orderBy: 'favorite' },
  });
  return data;
};
