import React, { useState, useEffect, createContext } from "react";
import { getProduct, ProductTypes } from "../services/products";
export const ProductContext = createContext<ProductTypes | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

export const ProductProvider: React.FC<Props> = (props) => {
  const [ProductData, setProductData] = useState<ProductTypes | undefined>();
  useEffect(() => {
    // use id 1 as an example
    getProduct(1).then((res) => {
      setProductData(res?.data);
    });
  }, []);
  return (
    <ProductContext.Provider value={ProductData}>
      {props.children}
    </ProductContext.Provider>
  );
};
