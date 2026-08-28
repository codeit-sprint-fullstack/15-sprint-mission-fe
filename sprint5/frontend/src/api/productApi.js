import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://panda-market-soonchang.onrender.com',
});


export const getProducts = async ({ page = 1, pageSize = 10, orderBy = 'recent', keyword = '' }) => {
  const offset = (page - 1) * pageSize;

  const { data } = await instance.get('/products', {
    params: { offset, limit: pageSize, sort: orderBy, keyword },
  });

  return data; 
};

export const getProductDetail = async (id) => {
  const { data } = await instance.get(`/products/${id}`);
  return data;
};

export const createProduct = async ({ name, description, price, tags }) => {
  const { data } = await instance.post('/products', { name, description, price, tags });
  return data;
};
