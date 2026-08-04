export async function getProductList(page, pageSize, keyword) {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
    );

    if (!response.ok) {
      throw new Error("상품 목록을 가져오는데 실패했습니다.");
    }

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products/${id}`
    );
    if (!response.ok) {
      throw new Error("상품을 가져오는데 실패했습니다.");
    }

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function createProduct(name, description, price, tags, images) {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          description: description,
          price: price,
          tags: tags,
          images: images
        })
      }
    );
    if (!response.ok) {
      throw new Error("상품 생성에 실패 했습니다.");
    }
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function patchProduct(id, name, description, price, tags, images) {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          description: description,
          price: price,
          tags: tags,
          images: images
        })
      }
    );
    if (!response.ok) {
      throw new Error("상품 수정에 실패했습니다.");
    }
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products/${id}`,
      {
        method: "DELETE"
      }
    );
    if (!response.ok) {
      throw new Error("상품 삭제에 실패했습니다.");
    }

    return response;
  } catch (error) {
    console.error(error);
  }
}
