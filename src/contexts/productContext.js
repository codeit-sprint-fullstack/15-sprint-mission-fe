import { createContext } from "react";
import { useContext } from "react";

export const ProductContext = createContext(null);

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (context === null) {
    throw new Error("PostProvider가 내부에 없습니다");
  }

  return context;
};
