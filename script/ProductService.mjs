const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

async function getProductList(page = 1, pagesize = 10, keyword) {
  // console.log(page, pagesize, keyword);
  const url = new URL(`${BASE_URL}`);
  url.searchParams.set("page", page);
  url.searchParams.set("pageSize", pagesize);
  if (keyword) url.searchParams.set("keyword", keyword);
  // const {href} = url;
  // console.log(href);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  // console.log("getProductList 수행완료!");
  return response.json();
}

async function getProduct(id) {
  // console.log(id);
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  // console.log("getProduct 수행완료!");
  return response.json();
}

async function createProduct({ name, description, price, tags, images }) {
  console.log({ name, description, price, tags, images });
  const response = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      images,
      tags,
      price,
      description,
      name,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  console.log("createProduct 수행완료!");
  return response.json();
}

async function patchProduct({ id, name, description, price, tags, images }) {
  // console.log({ id, name, description, price, tags, images });
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      images,
      tags,
      price,
      description,
      name,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  // console.log("patchProduct 수행완료!");
  return response.json();
}

async function deleteProduct(id) {
  // console.log(id);
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  // console.log("deleteProduct 수행완료!");
  return response.json();
}

//console.log(await getProductList(1, 1, "제목"));
//console.log(await getProduct(771));
// console.log(
//   await createProduct(
//     "LG V60 ThinQ 5G",
//     "2020년 출시된 LG모바일의 마지막 정식 출시 플래그쉽 스마트폰입니다.",
//     350_000,
//     "전자제품",
//     "https://example.com/...")
// );
//console.log(await patchProduct({id: 4095, price: 300_000}));
//console.log(await deleteProduct(4095));

const ProductService = {
  getProduct,
  getProductList,
  createProduct,
  patchProduct,
  deleteProduct,
};

export default ProductService;
