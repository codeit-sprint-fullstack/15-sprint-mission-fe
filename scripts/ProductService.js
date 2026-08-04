const BASE_URL = "https://panda-market-api-crud.vercel.app";
const urlProduct = BASE_URL + "/products";
export { urlProduct };

export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  try {
    const url = new URL(urlProduct);
    url.searchParams.set("page", page);
    url.searchParams.set("pageSize", pageSize);
    url.searchParams.set("keyword", keyword);

    const res = await fetch(url, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("실행 중 오류가 발생했습니다.");
    }

    const data = await res.json();
    return data.list;
  } catch (e) {
    console.log(e.message);
    throw e;

  }
}

export async function getProduct(productId) {
  try {
    const res = await fetch(urlProduct + "/" + productId, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("요청하신 내용을 찾을 수 없습니다.");
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
}

export async function createProduct({
  name,
  description,
  price,
  tags,
  images,
}) {
  try {
    const res = await fetch(urlProduct, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });

    if (!res.ok) {
      throw new Error(
        "요청 중 오류가 발생했습니다. 입력 내용을 다시 한번 확인해주세요.",
      );
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
    throw e;

  }
}

export async function patchProduct(
  productId,
  { name, description, price, tags, images },
) {
  try {
    const res = await fetch(urlProduct + "/" + productId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });

    if (!res.ok) {
      throw new Error(
        "요청 중 오류가 발생했습니다. 입력 내용을 다시 한번 확인해주세요.",
      );
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
    throw e;

  }
}

export async function deleteProduct(productId) {
  try {
    const res = await fetch(urlProduct + "/" + productId, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("정상적으로 삭제되지 않았습니다.");
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
    throw e;

  }
}
