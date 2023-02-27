//#region IMPORTS

import React, { useContext } from "react";
import NewProducts from "../../components/organisms/NewProducts";
import { ProductProvider } from "../../contexts/ProductProvider";
import {
  ProductsByCategoryProvider,
} from "../../contexts/ProductsByCategoryProvider";

//#endregion

//#region MAIN COMPONENT
const HomePage: React.FC = () => {
  return (
    <ProductProvider>
      <ProductsByCategoryProvider>
        <NewProducts />
      </ProductsByCategoryProvider>
    </ProductProvider>
  );
};
//#endregion

export default HomePage;
