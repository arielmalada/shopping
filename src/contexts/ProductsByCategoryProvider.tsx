import React, { useState, useEffect, createContext } from "react";
import {
  getProductsByCategory,
  ProductsTypes,
} from "../services/products";
export const ProductsContext = createContext<ProductsTypes | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

export const ProductsByCategoryProvider: React.FC<Props> = (props) => {
  const [ProductData, setProductData] = useState<ProductsTypes | undefined>();
  useEffect(() => {
    const exampleLimitParams = { "limit": "4", "skip": "1" };
    const urlParams = new URLSearchParams(exampleLimitParams).toString();
    getProductsByCategory("smartphones", urlParams).then((res) => {
      setProductData(res?.data);
    });
  }, []);
  return (
    <ProductsContext.Provider value={ProductData}>
      {props.children}
    </ProductsContext.Provider>
  );
};
