import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL =
  import.meta.env.API_URL || "https://one5-sprint-mission-be-xgtr.onrender.com";

export default function useProductRegistration() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const registerProduct = async (formData) => {
    if (isLoading) return;

    const productData = {
      name: formData.name,
      description: formData.description,
      price: Number(formData.price),
      tags: formData.tags,
    };

    try {
      setIsLoading(true);

      const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("상품 등록에 실패했습니다.");
      }

      const result = await response.json();

      alert("상품이 성공적으로 등록되었습니다!");

      const productId = result.id || result.productId;

      if (productId) {
        navigate(`/products/${productId}`);
      } else {
        navigate("/products");
      }

      return true; 
    } catch (error) {
      console.error("에러 발생:", error);
      alert(error.message || "오류가 발생했습니다. 다시 시도해 주세요.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { registerProduct, isLoading };
}