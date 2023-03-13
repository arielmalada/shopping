import React, { useState, useEffect, createContext } from "react";
import {
  getProductsByCategory,
  ProductsTypes,
} from "../services/products";

export const ProductsNewProductsContext = createContext<ProductsTypes | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

export const ProductsNewProductsProvider: React.FC<Props> = (props) => {
  // pretend this is new products provide
  const [ProductData, setProductData] = useState<ProductsTypes | undefined>();
  useEffect(() => {
    const exampleLimitParams = { "limit": "4"};
    const urlParams = new URLSearchParams(exampleLimitParams).toString();
    getProductsByCategory("smartphones", urlParams).then((res) => {
      setProductData(res?.data);
    });
  }, []);
  return (
    <ProductsNewProductsContext.Provider value={ProductData}>
      {props.children}
    </ProductsNewProductsContext.Provider>
  );
};
