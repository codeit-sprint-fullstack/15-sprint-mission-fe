import { BASE_URL } from './config';

export default async function createProduct({
  name,
  description,
  price,
  tags,
}) {
  try {
    const res = await fetch(BASE_URL + '/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price, tags }),
    });

    if (!res.ok) {
      throw new Error('등록에 실패했습니다.');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
