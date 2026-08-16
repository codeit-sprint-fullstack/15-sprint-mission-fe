const BASE_URL = "https://panda-market-api-crud.vercel.app";
const urlProduct = BASE_URL + "/products";
export { urlProduct };

export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  const url = new URL(urlProduct);
  url.searchParams.set("page", page);
  url.searchParams.set("pageSize", pageSize);
  url.searchParams.set("keyword", keyword);

  try {
    const res = await fetch(url, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("상품 목록을 불러오는데 실패했습니다.");
    }

    const data = await res.json();
    return data.list;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
}

export async function getProduct(productId) {
  const url = new URL(urlProduct + "/" + productId);

  try {
    const res = await fetch(url, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("요청하신 상품을 찾을 수 없습니다.");
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
}

export async function createProduct(name, description, price, tags, images) {
  const url = new URL(urlProduct);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price, tags, images }),
    });

    if (!res.ok) {
      throw new Error("상품 정보를 다시 확인해주세요.");
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
}

export async function patchProduct(productId, name, description, price, tags, images) {
  const url = new URL(urlProduct + "/" + productId);

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price, tags, images }),
    });

    if (!res.ok) {
      throw new Error("상품 정보를 다시 확인해주세요.");
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
}

export async function deleteProduct(productId) {
  const url = new URL(urlProduct + "/" + productId);

  try {
    const res = await fetch(url, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("삭제에 실패했습니다. 이미 없는 상품일 수 있습니다.");
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
}