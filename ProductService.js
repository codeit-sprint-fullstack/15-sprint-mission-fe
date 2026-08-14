const BASE_URL = "https://panda-market-api-crud.vercel.app";

// 1. 상품 목록 조회
export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  try { // 코드를 실행해봐 문제시 캐치
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );

    // 서버 응답이 2XX가 아닐 때 에러 처리
    if (!response.ok) {
      throw new Error(`요청 실패 (상태 코드: ${response.status})`);
    }

    const data = await response.json();
    console.log("getProductList 성공:", data);
    return data;
  } catch (error) {
    // 에러 발생 시 콘솔 출력
    console.error("getProductList 에러:", error.message);
  }
}

// 2. 상품 상세 조회 (특정 ID의 상품 1개만 가져오기)
export async function getProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);

    if (!response.ok) {
      throw new Error(`요청 실패 (상태 코드: ${response.status})`);
    }

    const data = await response.json();
    console.log("getProduct 성공:", data);
    return data;
  } catch (error) {
    console.error("getProduct 에러:", error.message);
  }
}

// 3. 상품 생성 (POST 메서드 사용)
export async function createProduct(productData) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData), // 받아온 데이터를 JSON 문자열로 변환해서 보냄
    });

    if (!response.ok) {
      throw new Error(`요청 실패 (상태 코드: ${response.status})`);
    }

    const data = await response.json();
    console.log("createProduct 성공:", data);
    return data;
  } catch (error) {
    console.error("createProduct 에러:", error.message);
  }
}

// 4. 상품 수정 (PATCH 메서드 사용)
export async function patchProduct(id, productData) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error(`요청 실패 (상태 코드: ${response.status})`);
    }

    const data = await response.json();
    console.log("patchProduct 성공:", data);
    return data;
  } catch (error) {
    console.error("patchProduct 에러:", error.message);
  }
}

// 5. 상품 삭제 (DELETE 메서드 사용)
export async function deleteProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`요청 실패 (상태 코드: ${response.status})`);
    }

    const data = await response.json();
    console.log("deleteProduct 성공:", data);
    return data;
  } catch (error) {
    console.error("deleteProduct 에러:", error.message);
  }
}
