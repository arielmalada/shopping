import React, { useState, useEffect, createContext } from "react";
import {
  getProductsByCategory,
  ProductsTypes,
} from "../services/products";

export const ProductsSaleContext = createContext<ProductsTypes | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

export const ProductsSaleProvider: React.FC<Props> = (props) => {
  // pretend this is sale provider
  const [ProductData, setProductData] = useState<ProductsTypes | undefined>();
  useEffect(() => {
    const exampleLimitParams = { "limit": "4", "skip": "1" };
    const urlParams = new URLSearchParams(exampleLimitParams).toString();
    getProductsByCategory("smartphones", urlParams).then((res) => {
      setProductData(res?.data);
    });
  }, []);
  return (
    <ProductsSaleContext.Provider value={ProductData}>
      {props.children}
    </ProductsSaleContext.Provider>
  );
};